import { Player } from '../players/player';

import { Ability, abilitytype } from './ability';
import { Attack } from './attack';

export class Strike extends Ability {
  protected damage = 15;
  protected ability_id = abilitytype.Enchantment;
  protected usagetime = 1;

  public use(caster: Player, target: Player, hit: Attack) {
    caster.class === 'Knight';
    target.StunnedState === false;
    hit.damage === this.damage;
    if ((this.Usagetimes = 1)) {
      this.Usagetimes -= 1;
    }
  }
}
