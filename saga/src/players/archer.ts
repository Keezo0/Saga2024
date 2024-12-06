import { Abilitychance } from '../abilities/ability';
import { Attack } from '../abilities/attack';
import { FireArrows } from '../abilities/FireArrows';

import { Player } from './player';

export class Archer extends Player {
  protected _atk: number;
  protected _health: number;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, 'Archer', playerHealth, playerAtk);
  }

  public attack(): Attack {
    const hit = new Attack(this, false);
    if (Abilitychance(0.4) === true) {
      const fireArrows = new FireArrows(this);
      fireArrows.useAbility(hit, this);
    }
    return hit;
  }

  public takeDmg(taking_dmg: Attack) {
    if (taking_dmg._controll_apply === true) {
      this._stunnedState = true;
      this._health = this._health - taking_dmg._damage;
    } else {
      this._health = this._health - taking_dmg._damage;
    }
  }
}
