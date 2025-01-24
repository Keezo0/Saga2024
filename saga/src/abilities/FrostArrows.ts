import { Player } from '../players/player';
import { Ability, AbilityClasses } from './ability';

export class FrostArrows extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.FrostArrows;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    super.use(target, caster); // Вызываем метод use из родительского класса
    if (this.canUse()) {
      target.useAbility(caster, this, this._damage);
      target.setStunnedState(true);
    }
  }
}