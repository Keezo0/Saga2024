import { Enchantment } from '../abilities/Enchantment';

import { Player, PlayerClasses } from './player';

export class Mage extends Player {
  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, playerHealth, playerAtk);
    this._classid = PlayerClasses.Mage;
    this._class = 'Маг';
    this._abilities.push(new Enchantment(this));
  }

  public useSpecialAbility(target: Player): void {
    const ability = this._abilities.find(ability => ability instanceof Enchantment);
    if (ability) {
      ability.use(target, this);
    }
  }
}
