import { Player } from '../players/player';
import { Ability, AbilityClasses } from './ability';

export class Attack extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.Attack;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    super.use(target, caster); // Вызываем метод use из родительского класса
    target.useAbility(caster, this, this.damage);
  }
}