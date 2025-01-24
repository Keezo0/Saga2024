import { Player, playerClasses } from './player';

export class Knight extends Player {
  protected _atk: number;
  protected _classid = playerClasses.Knight;
  protected _health: number;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, playerHealth, playerAtk);
  }
}
