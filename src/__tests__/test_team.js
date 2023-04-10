const { Character, Team } = require("../js/team");

describe("Team", () => {
    let team;

    beforeEach(() => {
        team = new Team();
    });

    it("should be able to add a character to the team", () => {
        const character = new Character("John");
        team.add(character);
        expect(team.members.size).toBe(1);
        expect(team.members.has(character)).toBe(true);
    });

    it("should throw an error when adding a duplicate character", () => {
        const character = new Character("John");
        team.add(character);
        expect(() => team.add(character)).toThrowError(
            "Character already in team"
        );
    });

    it("should be able to add multiple characters to the team", () => {
        const character1 = new Character("John");
        const character2 = new Character("Jane");
        team.addAll(character1, character2);
        expect(team.members.size).toBe(2);
        expect(team.members.has(character1)).toBe(true);
        expect(team.members.has(character2)).toBe(true);
    });

    it("should be able to convert the team to an array", () => {
        const character1 = new Character("John");
        const character2 = new Character("Jane");
        team.addAll(character1, character2);
        const array = team.toArray();
        expect(array.length).toBe(2);
        expect(array).toContain(character1);
        expect(array).toContain(character2);
    });
});
