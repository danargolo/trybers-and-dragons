type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  amount: number;
  type_: EnergyType;
}

export { EnergyType };