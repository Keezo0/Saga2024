import { Player } from '../players/player';

import { Attack } from './attack';

export enum abilityClasses {
  Enchantment,
  FireArrows,
  Strike,
}

export abstract class Ability {
  protected _usagetimes: number;
  protected _abilityid: abilityClasses;
  protected _control: boolean;
  protected _damage: number;

  constructor(player: Player) {
    this._damage = player.atk;
    this._control = player.StunnedState;
  }

  protected set Damage(dmg: number) {
    if (dmg > 0 && dmg <= 15) {
      this._damage = dmg;
    } else {
      throw new Error('damage is incorrect');
    }
  }

  protected set Usagetimes(time: number) {
    if (time === 0 || time === 1) {
      this._usagetimes = time;
    } else {
      throw new Error('attack is incorrect');
    }
  }

  public get Damage(): number {
    return this._damage;
  }

  public get Usagetimes() {
    return this._usagetimes;
  }

  protected abstract useAbility(hit: Attack, target: Player): void;
}

export function Abilitychance(chance: number): boolean {
  const randomValue = Math.random();
  if (randomValue <= chance) {
    return true;
  } else {
    return false;
  }
}
