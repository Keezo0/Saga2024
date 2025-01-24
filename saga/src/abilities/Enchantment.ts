import { Player } from '../players/player';

import { Ability, AbilityClasses } from './ability';

export class Enchantment extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.Enchantment;
  protected _usagetime = 1; // Использование ограничено 1 раз за раунд

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      // Проверяем, доступна ли способность
      const reducedDamage = Math.round(this._damage * 0.7);
      target.useAbility(caster, this, reducedDamage);
      target.setStunnedState(true); // Оглушаем цель с вероятностью 50%
    }
    this._usagetime = 0; // Способность использована, блокируем до конца раунда
  }
}
