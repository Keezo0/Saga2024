import { Player } from './player';

export class Archer extends Player {
  private _arrowResistance: number;
  constructor(playerName: string, playerHealth: number, playerAtk: number, archerResistance: number) {
    super(playerName, 'Archer', playerHealth, playerAtk);
    this._arrowResistance = archerResistance;
  }

  public getResistance() {
    return this._arrowResistance;
  }
}
