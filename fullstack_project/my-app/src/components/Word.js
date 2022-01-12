import React from 'react';

class Word {
    constructor(part1, part2) {
        this.id = Date.now();
        this.part1 = part1;
        this.part2 = part2;
        this.isLearnt = false;
        this.lastSeen = "01.01.2000"; // dd.mm.yyyy
    }
}

// module.exports = Word
// export { Word };    