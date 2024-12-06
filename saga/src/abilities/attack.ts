import { Player } from '../players/player';

export class Attack {
  _damage: number;
  _control_apply: boolean;

  constructor(player: Player, controlApply: boolean) {
    this._damage = player.atk;
    this._control_apply = controlApply;
  }

  public get Damage(): number {
    return this._damage;
  }

  public applyDamage(player: Player, hit: Attack): void {
    if (player.health > 0) {
      player.takeDmg(hit);
    }
  }
}
