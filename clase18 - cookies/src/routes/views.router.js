import {Router} from 'express';
import cookieParser from 'cookie-parser';

const router = Router();
router.use(cookieParser('C0d3rS3cr3tC0d3'));

router.get("/", (req, res)=>{
    res.send("Hola mundo!");
});

const cookieName = 'MiPrimeraCookie';

router.get("/setCookie", (req, res)=>{
    res.cookie(cookieName, "Esta es una cookie muy poderosa", {maxAge: 15000})
    .send("Cookie");
});

router.get("/setSignedCookie", (req, res)=>{
    res.cookie(cookieName, "Esta es una cookie muy poderosa cifrada", {
        maxAge: 15000,
        signed:true
    })
    .send("Cookie");
});

router.get("/getCookie", (req, res)=>{
    console.log(req.cookies);
    res.send(req.cookies.MiPrimeraCookie);  
});

router.get("/getSignedCookie", (req, res)=>{
    console.log(req.signedCookies);
    res.send(req.signedCookies.MiPrimeraCookie);  
});

router.get("/deleteCookie", (req, res)=>{
    res.clearCookie(cookieName).send(`Se eliminó la cookie: ${cookieName}`);
});

 
//sesiones
router.get('/session',(req,res)=>{
    if(req.session.counter){
        req.session.counter++
        res.send(`se ha visitado el sitio  ${req.session.counter} veces`)
    }else{
        req.session.counter=1;
        res.send('Bienvenido. es tu primera vez visitando')
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(!err) res.send('cerrar ok')
        else res.send({status:'error',body:err})
    })
})

router.get('/login', (req, res) => {
    const { username, password } = req.query
    if (username !== 'pepe' || password !== 'pepepass') {
      return res.send('login failed')
    }
    req.session.user = username
    req.session.admin = true
    res.send('login success!')
})
   
function auth(req, res, next) {
    if (req.session?.user === 'pepe' && req.session?.admin) {
      return next()
    }
    return res.status(401).send('error de autorización!')
}

router.get('/privado', auth, (req, res) => {
    res.send('si estas viendo esto es porque ya te logueaste!')
})
   
   
export default router;