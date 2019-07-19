//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = value => {
  if (value < 3) throw new Error("Ability scores must be at least 3");
  if (value > 18) throw new Error("Ability scores can be at most 18");
  return Math.floor((value - 10) / 2);
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  static rollAbility() {
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
    const rolledDices = [rollDice(), rollDice(), rollDice(), rollDice()]
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, curr) => {
        return (acc += curr);
      });

    return rolledDices;
  }

  get strength() {
    return this._strength;
  }

  set strength(value) {
    this._strength = value;
  }

  get dexterity() {
    return this._dexterity;
  }

  set dexterity(value) {
    this._dexterity = value;
  }

  get constitution() {
    return this._constitution;
  }

  set constitution(value) {
    this._constitution = value;
  }

  get intelligence() {
    return this._intelligence;
  }

  set intelligence(value) {
    this._intelligence = value;
  }

  get wisdom() {
    return this._wisdom;
  }

  set wisdom(value) {
    this._wisdom = value;
  }

  get charisma() {
    return this._charisma;
  }

  set charisma(value) {
    this._charisma = value;
  }

  get hitpoints() {
    return this._hitpoints;
  }

  set hitpoints(value) {
    this._hitpoints = value;
  }
}
