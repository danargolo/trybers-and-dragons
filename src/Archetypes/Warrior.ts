import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _increase = 0;
  private _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    Warrior._increase += 1;
    return Warrior._increase;
  }
}