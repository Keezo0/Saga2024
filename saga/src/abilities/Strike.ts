import { Player } from '../players/player';

import { Ability } from './ability';
import { Attack } from './attack';

export class Strike extends Ability {
  protected _damage: number;
  protected _usagetime = 1;

  public useAbility(hit: Attack, target: Player): void {
    if (this._usagetime === 1) {
      const newDamage = Math.round(this._damage * 0.3) + this._damage;
      const newHit = new Attack(target, true);
      newHit._damage = newDamage;
      hit.applyDamage(target, newHit);
      target.takeDmg(newHit);
      this._usagetime -= 1;
    }
  }
}
