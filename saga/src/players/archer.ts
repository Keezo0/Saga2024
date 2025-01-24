import { Player, playerClasses } from './player';

export class Archer extends Player {
  protected _atk: number;
  protected _classid = playerClasses.Archer;
  protected _health: number;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, playerHealth, playerAtk);
  }
}
