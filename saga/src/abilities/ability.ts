import { Player } from '../players/player';

export enum abilityClasses {
  Attack,
  Enchantment,
  FireArrows,
  Strike,
  FrostArrows,
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

  protected set damage(dmg: number) {
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

  public get damage(): number {
    return this._damage;
  }

  public get Usagetimes() {
    return this._usagetimes;
  }

  // Геттер для _usagetimes
  public get usagetimes(): number {
    return this._usagetimes;
  }

  // Сеттер для _usagetimes
  public set usagetimes(value: number) {
    this._usagetimes = value;
  }

  public abstract use(target: Player, caster: Player): void;
}