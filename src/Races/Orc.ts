import Race from './Race';

export default class Orc extends Race {
  readonly maxLifePoints: number;
  private static _increase = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
  }

  get maxLifePoint(): number {
    return this.maxLifePoint;
  }

  static createdRacesInstances(): number {
    Orc._increase += 1;
    return Orc._increase;
  }
}