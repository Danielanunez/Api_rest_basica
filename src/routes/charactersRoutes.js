const express = require('express');
const router = express.Router();//usamos el enrutador que tiene express por default
const charactersController = require('../controllers/charactersController')

router.get('/characters', charactersController.getAllCharacters);

router.get('/characters/:id' , charactersController.getOneCharacter);

router.post('/characters/create', charactersController.createCharacter);

router.delete('/characters/:id/delete', charactersController.deleteCharacter);

router.put('/characters/:id/edit', charactersController.editCharacter);


module.exports = router;

