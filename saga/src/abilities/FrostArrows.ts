import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class FrostArrows extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.FrostArrows;
  protected _usagetime = 1;

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      target.useAbility(caster, this, this.damage);
      target.setStunnedState(true); // Оглушаем цель
      this._usagetime -= 1;
    }
  }
}