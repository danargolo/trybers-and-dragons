import Race from './Race';

export default class Dwarf extends Race {
  readonly maxLifePoints: number;
  private static _increase = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
  }

  get maxLifePoint(): number {
    return this.maxLifePoint;
  }

  static createdRacesInstances(): number {
    Dwarf._increase += 1;
    return Dwarf._increase;
  }
}