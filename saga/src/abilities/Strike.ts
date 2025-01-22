import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class Strike extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.Strike;
  protected _usagetime = 1;

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      const newDamage = Math.round(this._damage * 0.3) + this._damage;
      target.useAbility(caster, this, newDamage);
      this._usagetime -= 1;
    }
  }
}
