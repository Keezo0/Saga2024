import { Player } from '../players/player';

import { Ability } from './ability';
import { Attack } from './attack';

export class FireArrows extends Ability {
  protected _damage: number;
  protected _usagetime = 1;

  public useAbility(hit: Attack, target: Player): void {
    if (this._usagetime === 1) {
      const reducedDamage = 0;
      const newHit = new Attack(target, true);
      newHit._damage = reducedDamage;
      hit.applyDamage(target, newHit);
      target.takeDmg(newHit);
      this._damage += 2;
      this._usagetime -= 1;
    }
  }
}
