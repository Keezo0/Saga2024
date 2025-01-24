import { Player, playerClasses } from './player';

export class Mage extends Player {
  protected _atk: number;
  protected _classid = playerClasses.Mage;
  protected _health: number;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, playerHealth, playerAtk);
  }
}
