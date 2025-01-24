import { Player } from '../players/player';

import { Ability, AbilityClasses } from './ability';

export class Attack extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.Attack;
  protected _usagetime: number;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    target.useAbility(caster, this, this.damage);
  }

  public get damage(): number {
    return this._damage;
  }
}
