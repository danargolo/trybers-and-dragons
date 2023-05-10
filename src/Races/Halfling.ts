import Race from './Race';

export default class Halfling extends Race {
  readonly maxLifePoints: number;
  private static _increase = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
  }

  get maxLifePoint(): number {
    return this.maxLifePoint;
  }

  static createdRacesInstances(): number {
    Halfling._increase += 1;
    return Halfling._increase;
  }
}