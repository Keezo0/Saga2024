import { Player } from '../players/player';

import { Ability, AbilityClasses } from './ability';

export class Strike extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.Strike;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    super.use(target, caster);
    if (this.canUse()) {
      const bonusDamage = Math.round(this._damage * 0.3);
      const totalDamage = this._damage + bonusDamage;
      target.useAbility(caster, this, totalDamage);
    }
  }
}
