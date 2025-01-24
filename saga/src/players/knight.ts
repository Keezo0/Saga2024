import { Strike } from '../abilities/Strike';

import { Player, PlayerClasses } from './player';

export class Knight extends Player {
  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, playerHealth, playerAtk);
    this._classid = PlayerClasses.Knight;
    this._class = 'Рыцарь';
    this._abilities.push(new Strike(this));
  }

  public useSpecialAbility(target: Player): void {
    const ability = this._abilities.find(ability => ability instanceof Strike);
    if (ability) {
      ability.use(target, this);
    }
  }
}
