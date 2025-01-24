import { Player } from '../players/player';
import { Logger } from '../other/logger';

import { Ability, AbilityClasses } from './ability';

export class FireArrows extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.FireArrows;
  private _burnTurns: number = 0;
  private _burnTarget: Player | null = null;
  private _burnCaster: Player | null = null;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    const usable: boolean = this.canUse();
    super.use(target, caster);
    if (usable) {
      target.useAbility(caster, this, this._damage); // Наносим начальный урон
      Logger.logAbilityUse(caster.classid, caster.name, target.classid, target.name, this._damage);
      this._burnTurns = 2;
      this._burnTarget = target;
      this._burnCaster = caster;
    }
  }

  public applyBurnEffect(): void {
    if (this._burnTurns > 0 && this._burnTarget && this._burnCaster) {
      const burnDamage = 5;
      this._burnTarget.useAbility(this._burnCaster, this, burnDamage);

      Logger.logBurnEffect(
        this._burnCaster.classid,
        this._burnCaster.name,
        this._burnTarget.classid,
        this._burnTarget.name,
        burnDamage,
        this._burnTarget.health,
      );

      this._burnTurns--;
    }
  }
}
