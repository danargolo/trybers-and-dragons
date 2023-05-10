import Race from './Race';

export default class Elf extends Race {
  readonly maxLifePoints: number;
  private static _increase = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
  }

  get maxLifePoint(): number {
    return this.maxLifePoint;
  }

  static createdRacesInstances(): number {
    Elf._increase += 1;
    return Elf._increase;
  }
}