import { Router } from "express";

const router = Router()

router.get('/:word([a-zA-Z]+)',async(res,res)=>{
    res.send(req.params.word)
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