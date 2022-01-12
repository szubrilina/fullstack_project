import React from 'react';

class WordSet {
    constructor(wordArray) {
        this.words = wordArray;
    }

    deleteWord(id) {
        this.words.filter(elem => elem.id !== id)
    }

    addWord(word) {
        this.words.push(word);
    }
}

// module.exports = WordSet
// export { WordSet };