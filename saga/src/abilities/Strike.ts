import { Player } from '../players/player';
import { Ability, AbilityClasses } from './ability';

export class Strike extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.Strike;
  protected _usagetime = 1; // Использование ограничено 1 раз за раунд

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    if (this._usagetime === 1) {
      // Проверяем, доступна ли способность
      const bonusDamage = Math.round(this._damage * 0.3);
      const totalDamage = this._damage + bonusDamage;
      target.useAbility(caster, this, totalDamage); // Передаем урон в метод useAbility
      this._usagetime = 0; // Способность использована, блокируем до конца раунда
    } else {
      console.log(`${caster.name} не может использовать "Удар возмездия" в этом раунде.`);
    }
  }
}