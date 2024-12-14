const types = [
    'Bowman', 'Swordsman', 'Magician','Undead', 'Zombie', 'Daemon',
];

export default class Character {
    constructor(name, type, attack, defence) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Name length error');
        }
        if (!types.includes(type)) {
            throw new Error('Character type error');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }
}
