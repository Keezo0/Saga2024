import { Player } from './player';

export class Mage extends Player {
private _magicalResistance: number;
  constructor(playerName: string, playerHealth: number, playerAtk: number, mageResistance: number) {
    super(playerName, 'Mage', playerHealth, playerAtk);
    this._magicalResistance = mageResistance;
  }

  public getResistance(){
    return this._magicalResistance;
  }
}