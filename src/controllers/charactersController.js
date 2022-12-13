const { getCharacters,
    getOneCharacter,
    createCharacter,
    deleteCharacter,
    editCharacter
} = require('../models/getCharacters');

const characters = getCharacters();

module.exports = {
    getAllCharacters: (req, res) => res.send(characters),
    getOneCharacter: function (req, res) {
        const id = req.params.id;
        const character = getOneCharacter(id);
        res.send(character);
    },
    createCharacter: (req, res) => {
        const id = characters.length + 1;
        const newCharacter = {
            id: id,
            name: req.body.name,
            status: req.body.status,
            species: req.body.species,
            img: req.body.img
        }
        characters.push(newCharacter);
        createCharacter(characters);
        res.send('Personaje creado con Éxito!!');
    },
    deleteCharacter: (req, res) => {
        const id = req.params.id;
        const newCharacters = characters.filter(character => character.id != id);
        newCharacters.forEach((character, index) => character.id = index + 1);//les otorga un nuevo ID a cada elemento
        deleteCharacter(newCharacters);
        res.send(`Personaje #${id} ha sido eliminado.`)
    },
    editCharacter: (req, res) => {
        const id = req.params.id;
        const newCharacters = characters.map(character => {
            if (character.id == id) {
                return character = {
                    id: character.id,
                    name: req.body.name,
                    status: req.body.status,
                    species: req.body.species,
                    img: req.body.img
                }
            } 
            return character;
        });
        editCharacter(newCharacters);
        res.send(`Personaje #${id} ha sido editado con Éxito!`);
    }
}