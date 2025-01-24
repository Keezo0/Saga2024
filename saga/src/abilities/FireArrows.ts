import { Player } from '../players/player';
import { Ability, AbilityClasses } from './ability';
import { Logger } from '../other/logger';

export class FireArrows extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.FireArrows;
  protected _usagetimes = 1;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    if (this._usagetimes === 1) {
      target.useAbility(caster, this, this._damage);
      Logger.logAbilityUse(caster.classid, caster.name, target.classid, target.name, this._damage);

      // Применяем эффект "горения"
      this.applyBurnEffect(target, caster);

      this._usagetimes = 0;
    } else {
      console.log(`${caster.name} не может использовать "Огненные стрелы" в этом раунде.`);
    }
  }

  private applyBurnEffect(target: Player, caster: Player): void {
    let burnTurns = 2;
  
    const burnInterval = setInterval(() => {
      if (burnTurns > 0 && target.health > 0) {
        const burnDamage = 5;
        target.useAbility(caster, this, burnDamage);
        Logger.logBurnEffect(caster.classid, caster.name, target.classid, target.name, burnDamage);
  
        burnTurns--;
      } else {
        clearInterval(burnInterval);
      }
    }, 1000);

    burnInterval.unref();
  }
}