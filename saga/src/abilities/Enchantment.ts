import { Player } from '../players/player';

import { Ability, abilitytype } from './ability';
import { Attack } from './attack';

export class Enchantment extends Ability {
  protected damage = 5;
  protected abilityid = abilitytype.Enchantment;
  protected usagetimes = 1;

  public use(caster: Player, target: Player, hit: Attack) {
    caster.class === 'Mage';
    target.StunnedState === true;
    hit.damage === this.damage;
    if ((this.Usagetimes = 1)) {
      this.Usagetimes -= 1;
    }
  }
}
