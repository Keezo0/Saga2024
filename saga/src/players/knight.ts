// import { Attack } from '../abilities/attack';
// import { Abilitychance } from '../abilities/ability';
// import { Strike } from '../abilities/Strike';

import { Player, PlayerClass } from './player';

export class Knight extends Player {
  protected _atk = 7;
  protected _health = 15;
  protected classid = PlayerClass.Knight;
  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, 'Knight', playerHealth, playerAtk);
  }

  // public attack(): Attack {
  //   const atk = new Attack(this._atk, false);
  //   if (Abilitychance(20) == true){
  //     Strike.use(Knight, Player, atk)
  //   }
  // }
}
