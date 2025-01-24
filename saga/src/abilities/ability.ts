import { Player } from '../players/player';

export enum AbilityClasses {
  Attack,
  Enchantment,
  FireArrows,
  Strike,
  FrostArrows,
}

export abstract class Ability {
  protected _usagetimes: number;
  protected _abilityid: AbilityClasses;
  protected _control: boolean;
  protected _damage: number;
  constructor(player: Player) {
    this._damage = player.atk;
    this._control = player.StunnedState;
    this._usagetimes = 1;
  }

  // Сеттер для урона
  protected set damage(dmg: number) {
    if (dmg > 0 && dmg <= 15) {
      this._damage = dmg;
    } else {
      throw new Error('Damage is incorrect. It must be between 1 and 15.');
    }
  }

  public get damage(): number {
    return this._damage;
  }

  public get usagetimes(): number {
    return this._usagetimes;
  }

  public set usagetimes(value: number) {
    if (value === 0 || value === 1) {
      this._usagetimes = value;
    } else {
      throw new Error('Usagetimes is incorrect. It must be 0 or 1.');
    }
  }

  public abstract use(target: Player, caster: Player): void;
}
