const fs = require('fs');
const path = require('path');

const getCharacters = () =>{
    const allCharacters =  JSON.parse(fs.readFileSync(path.join(__dirname, '../data/personajes.json')));
    return allCharacters;
};

const getOneCharacter = (id) =>{
    const allCharacters = getCharacters();
    return characters.find(character => character.id == id);
} 
const createCharacter = (characters) =>{
    fs.writeFileSync(path.join(__dirname, '../data/personajes.json'), JSON.stringify(characters, null, ' '));
}
const deleteCharacter = (characters) =>{
    fs.writeFileSync(path.join(__dirname, '../data/personajes.json'), JSON.stringify(characters, null, ' '));
}
const editCharacter = (characters) =>{
    fs.writeFileSync(path.join(__dirname, '../data/personajes.json'), JSON.stringify(characters, null, ' '));
}

module.exports = {
    getCharacters,
    getOneCharacter,
    createCharacter,
    deleteCharacter,
    editCharacter
};