import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class FrostArrows extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.FrostArrows;
  protected _usagetime = 1;

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      target.useAbility(caster, this, this.damage);
      this._damage += 2;
      this._usagetime -= 1;
    }
  }
}
