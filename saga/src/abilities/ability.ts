import { Player } from '../players/player';

export enum AbilityClasses {
  Attack,
  Enchantment,
  FireArrows,
  Strike,
  FrostArrows,
}

export abstract class Ability {
  protected _usagetimes: number; // Количество использований способности
  protected _abilityid: AbilityClasses; // Идентификатор способности
  protected _control: boolean; // Контрольное состояние (например, оглушение)
  protected _damage: number; // Урон способности

  constructor(player: Player) {
    this._damage = player.atk; // Урон равен атаке игрока
    this._control = player.StunnedState; // Контрольное состояние
    this._usagetimes = 1; // Инициализация количества использований (1 раз за раунд)
  }

  // Сеттер для урона
  protected set damage(dmg: number) {
    if (dmg > 0 && dmg <= 15) {
      this._damage = dmg;
    } else {
      throw new Error('Damage is incorrect. It must be between 1 and 15.');
    }
  }

  // Геттер для урона
  public get damage(): number {
    return this._damage;
  }

  // Геттер для количества использований
  public get usagetimes(): number {
    return this._usagetimes;
  }

  // Сеттер для количества использований
  public set usagetimes(value: number) {
    if (value === 0 || value === 1) {
      this._usagetimes = value;
    } else {
      throw new Error('Usagetimes is incorrect. It must be 0 or 1.');
    }
  }

  // Абстрактный метод для использования способности
  public abstract use(target: Player, caster: Player): void;
}