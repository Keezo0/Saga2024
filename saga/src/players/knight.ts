import { Player } from './player';

export class Knight extends Player {
  private _physicalResistance: number;
  constructor(playerName: string, playerHealth: number, playerAtk: number, knightResistance: number) {
    super(playerName, 'knight', playerHealth, playerAtk);
    this._physicalResistance = knightResistance;
  }

  public getResistance() {
    return this._physicalResistance;
  }
}
