export default abstract class Race {
  readonly _name: string;
  readonly _dexterity: number;

  constructor(name: string, dexterity: number ){
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {

    throw new Error("Not implemented")
  }

  public abstract get maxLifePoints(): number;


}