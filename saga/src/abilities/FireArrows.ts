import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class FireArrows extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.FireArrows;
  protected _usagetime = 1;

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      this._damage = 0;
      target.useAbility(caster, this, this._damage);
      this._damage = caster.atk+2;
      this._usagetime -= 1;
    }
  }
}