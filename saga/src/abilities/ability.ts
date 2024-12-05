import { Player } from '../players/player';

import { Attack } from './attack';

export enum abilitytype {
  FireArrows,
  Strike,
  Enchantment,
}

export abstract class Ability {
  protected abilityid: abilitytype;
  protected usagetimes: number;
  protected damage: number = 0;

  protected set Damage(dmg: number) {
    if (dmg > 0 && dmg <= 15) {
      this.damage = dmg;
    } else {
      throw new Error('damage is incorrect');
    }
  }

  protected set Usagetimes(time: number) {
    if (time === 0 || time === 1) {
      this.usagetimes = time;
    } else {
      throw new Error('attack is incorrect');
    }
  }

  public get Damage(): number {
    return this.damage;
  }

  public get Usagetimes() {
    return this.usagetimes;
  }

  public get Abilityid() {
    return this.abilityid;
  }

  public abstract use(caster: Player, target: Player, hit: Attack): void;
}

export function Abilitychance(chance: number): boolean {
  const randomValue = Math.random();
  if (randomValue <= chance) {
    return true;
  } else {
    return false;
  }
}
