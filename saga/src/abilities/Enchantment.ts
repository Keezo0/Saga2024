import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class Enchantment extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.Enchantment;
  protected _usagetime = 1;

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      const reducedDamage = Math.round(this._damage * 0.7);
      target.useAbility(caster, this, reducedDamage);
      target.setStunnedState(true); // Оглушаем цель
      this._usagetime -= 1;
    }
  }
}