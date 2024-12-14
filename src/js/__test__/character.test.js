import Character from '../character.js';
import Bowman from '../bowman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('Invalid short name', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 100),
    ).toThrow('Name length error');
});

test('Invalid long name', () => {
    expect(
        () => new Character('NickNickNick', 'Daemon', 100, 100),
    ).toThrow('Name length error');
});

test('Invalid type character', () => {
    expect(
        () => new Character('Tom', 'Knight', 100, 100),
    ).toThrow('Character type error');
});

test('Bowman', () => {
    const bowman = new Bowman('Tom');
    expect(bowman).toEqual({
        name: 'Tom',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('Swordsman', () => {
    const swordsman = new Swordsman('Ron');
    expect(swordsman).toEqual({
        name: 'Ron',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('Magician', () => {
    const magician = new Magician('Zac');
    expect(magician).toEqual({
        name: 'Zac',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('Undead', () => {
    const undead = new Undead('Eddy');
    expect(undead).toEqual({
        name: 'Eddy',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('Zombie', () => {
    const zombie = new Zombie('Michael');
    expect(zombie).toEqual({
        name: 'Michael',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('Daemon', () => {
    const daemon = new Daemon('Chris');
    expect(daemon).toEqual({
        name: 'Chris',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});