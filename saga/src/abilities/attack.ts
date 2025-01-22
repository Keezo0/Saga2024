import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class Attack extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.Attack;
  protected _usagetime: number;

  public use(target: Player, caster: Player): void {
      this._damage = caster.atk;
      target.useAbility(caster, this, this.damage);
  }

  public get damage(): number {
    return this._damage;
  }
}
