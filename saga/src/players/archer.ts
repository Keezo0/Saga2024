import { Abilitychance } from '../abilities/ability';
import { FireArrows } from '../abilities/FireArrows';

import { Player, playerClasses } from './player';

export class Archer extends Player {
  protected _atk: number;
  protected _classid = playerClasses.Archer;
  protected _health: number;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, 'Archer', playerHealth, playerAtk);
  }
}
