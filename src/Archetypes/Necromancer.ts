import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _increase = 0;
  private _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    Necromancer._increase += 1;
    return Necromancer._increase;
  }
}