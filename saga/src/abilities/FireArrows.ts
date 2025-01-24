import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class FireArrows extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.FireArrows;
  protected _usagetime = 1;
  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      const reducedDamage = 0;
      target.useAbility(caster, this, reducedDamage);
      this._damage += 2;
      this._usagetime -= 1;
    }
  }
}
