import { Player } from '../players/player';
import { Ability, AbilityClasses } from './ability';

export class FrostArrows extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.FrostArrows;
  protected _usagetime = 1;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      // Проверяем, доступна ли способность
      target.useAbility(caster, this, this._damage);
      target.setStunnedState(true);
      this._usagetime = 0;
    } else {
      console.log(`${caster.name} не может использовать "Ледяные стрелы" в этом раунде.`);
    }
  }
}