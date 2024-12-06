import { Player } from '../players/player';

import { Ability, abilityClasses } from './ability';
import { Attack } from './attack';

export class Enchantment extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.Enchantment;
  protected _usagetime = 1;

  public useAbility(hit: Attack, target: Player): void {
    if (this._usagetime === 1) {
      const reducedDamage = Math.round(this._damage * 0.7);
      const newHit = new Attack(target, true);
      newHit._damage = reducedDamage;
      hit.applyDamage(target, newHit);
      target.takeDmg(newHit);
      this._control = true;
      this._usagetime -= 1;
    }
  }
}
