import { Player } from '../players/player';

import { Ability, AbilityClasses } from './ability';

export class FireArrows extends Ability {
  protected _damage: number;
  protected _abilityid = AbilityClasses.FireArrows;

  constructor(caster: Player) {
    super(caster);
    this._damage = caster.atk;
  }

  public use(target: Player, caster: Player): void {
    if (this.usagetimes === 1) {
      target.useAbility(caster, this, this._damage);
      this.usagetimes = 0; // Способность использована
    } else {
      console.log(`${caster.name} не может использовать "Огненные стрелы" в этом раунде.`);
    }
  }
}