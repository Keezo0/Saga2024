import { Player, PlayerClass } from './player';

export class Mage extends Player {
  protected _atk = 5;
  protected _health = 20;
  protected classid = PlayerClass.Mage;
  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, 'Mage', playerHealth, playerAtk);
  }
}
