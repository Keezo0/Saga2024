import { Player, PlayerClass } from './player';

export class Archer extends Player {
  protected _atk = 5;
  protected _health = 17;
  protected classid = PlayerClass.Archer;
  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, 'Archer', playerHealth, playerAtk);
  }
}
