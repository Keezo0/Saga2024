import { Player } from '../players/player';
import { Ability, AbilityClasses } from './ability';

export class FrostArrows extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.FrostArrows;
  protected _usagetime: number = 1;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    const usable: boolean = this.canUse();
    super.use(target, caster);
    if (usable) {
      target.useAbility(caster, this, this._damage);
      target.setStunnedState(true);
      this._usagetime = 0;
    }
  }

  public get usagetime(): number {
    return this._usagetime;
  }
}