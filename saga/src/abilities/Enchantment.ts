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
    super.use(target, caster);
    if (this.canUse()) {
      const reducedDamage = Math.round(this._damage * 0.7);
      target.useAbility(caster, this, reducedDamage);
      target.setStunnedState(true);
    }
  }
}
