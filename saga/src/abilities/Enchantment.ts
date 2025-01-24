import { Player } from '../players/player';

import { Ability, AbilityClasses } from './ability';

export class Enchantment extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.Enchantment;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    const usable: boolean = this.canUse();
    super.use(target, caster);
    if (usable) {
      const reducedDamage = Math.round(this._damage * 0.7); // Уменьшенный урон
      target.useAbility(caster, this, reducedDamage); // Применяем урон
      target.setStunnedState(true); // Оглушаем цель
    }
  }
}
