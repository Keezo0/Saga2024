import { Attack } from '../abilities/Attack';
import { Abilitychance } from '../abilities/ability';
import { Strike } from '../abilities/Strike';

import { Player, playerClasses } from './player';

export class Knight extends Player {
  protected _atk: number;
  protected _classid = playerClasses.Knight;
  protected _health: number;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, 'Knight', playerHealth, playerAtk);
  }
}
