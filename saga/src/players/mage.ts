import { Enchantment } from '../abilities/Enchantment';
import { Attack } from '../abilities/Attack';
import { Abilitychance } from '../abilities/ability';

import { Player, playerClasses } from './player';

export class Mage extends Player {
  protected _atk: number;
  protected _classid = playerClasses.Mage;
  protected _health: number;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, 'Mage', playerHealth, playerAtk);
  }
}
