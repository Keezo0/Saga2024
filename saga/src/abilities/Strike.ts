import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class Strike extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.Strike;
  protected _usagetime = 1;

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      this._damage = Math.round(this._damage * 0.3) + this._damage; // Убедимся, что урон не отрицательный
      target.useAbility(caster, this, this._damage);
      this._usagetime -= 1;
    }
  }
}