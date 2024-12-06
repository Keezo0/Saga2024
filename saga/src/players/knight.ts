import { Attack } from '../abilities/attack';
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

  public attack(): Attack {
    const hit = new Attack(this, false);
    if (Abilitychance(0.4) === true) {
      const fireArrows = new Strike(this);
      fireArrows.useAbility(hit, this);
    }
    return hit;
  }
}
