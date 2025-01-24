import { Player } from '../players/player';
import { Ability, abilityClasses } from './ability';

export class FrostArrows extends Ability {
  protected _damage: number;
  protected _abilityid = abilityClasses.FrostArrows;
  protected _usagetime = 1; // Использование ограничено 1 раз за раунд

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) { // Проверяем, доступна ли способность
      target.useAbility(caster, this, this._damage);
      target.setStunnedState(true); // Оглушаем цель
      this._usagetime = 0; // Способность использована, блокируем до конца раунда
    } else {
      console.log(`${caster.name} не может использовать "Ледяные стрелы" в этом раунде.`);
    }
  }
}