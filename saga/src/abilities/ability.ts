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
  protected _usedThisTurn: boolean = false; // Новый флаг

  constructor(player: Player) {
    this._damage = player.atk;
    this._control = player.stunnedState;
    this._usagetimes = 1;
  }

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
  public resetTurn(): void {
    this._usedThisTurn = false; // Сбрасываем флаг использования в начале хода
  }

  public canUse(): boolean {
    return this._usagetimes === 1 && !this._usedThisTurn; // Проверяем, можно ли использовать способность
  }
  
  public use(target: Player, caster: Player): void {
    if (this.canUse()) {
      this._usedThisTurn = true;
      this._usagetimes = 0;
    }
  }
}
