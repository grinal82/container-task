class Character {
    constructor(name) {
        this.name = name;
    }
}

class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error("Character already in team");
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((character) => this.add(character));
    }

    toArray() {
        return [...this.members];
    }
}

// eslint-disable-next-line no-undef
module.exports = { Character, Team };
