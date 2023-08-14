import { Router } from "express";

const router = Router()

const palabras=["Hola","Chao",'Aloha']

router.param('word',async(req,res,next,word)=>{
  const buscarPalabra = palabras.find(buscarPalabra => req.params.word === buscarPalabra)
  if(!buscarPalabra){
    return res.status(400).send('url no valida')
  }
  req.word = buscarPalabra
  next()
})

router.get('/:word([a-zA-Z]+)',async(res,res)=>{
    res.send(req.word)
})
//%C3%A1  á  %C3%A9 é  %C3%AD  í %C3%B3  ó %C3%BA  ú %C3%BC 
router.get('/:word([a-zA-Z%C3%A1]+)/:language([a-z]+)',async(res,res)=>{
  res.send(req.params.word)
})


router.delete('/:word([a-zA-Z%C3%A1]+)/:language([a-z]+)',async(res,res)=>{
  res.send(req.params.word)
})

router.get('*', async (req, res) => {
  res.status(404).send("URL no valida");
})

/**const onlyLowerCase = (req, res, next) => {
  const { word } = req.params;
  if (/^[a-z]+$/.test(word)) {
    next();
  } else {
    res.status(400).send("El parámetro 'word' solo debe contener letras minúsculas.");
  }
};
router.get("/:word", onlyLowerCase, async (req, res) => {
  res.send(req.params.word);
}); */