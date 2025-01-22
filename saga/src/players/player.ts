import { Ability } from "../abilities/ability";

export enum playerClasses {
  Mage,
  Archer,
  Knight,
}

export abstract class Player {
  protected _name: string;
  protected _class: string;
  protected _classid: playerClasses;
  protected _health: number;
  protected _atk: number;
  protected _stunnedState: boolean = false;

  constructor(playerName: string, role: string, playerHealth: number, playerAtk: number) {
    this._name = playerName;
    this._class = role;
    this.health = playerHealth;
    this.atk = playerAtk;
  }

  public useAbility(caster: Player, ability: Ability, damage: number) {
    this.health = this.health - damage;
  }

  protected set health(hp: number) {
    if (hp > 0 && hp <= 50) {
      this._health = hp;
    } else {
      throw new Error('health is incorrect');
    }
  }

  protected set atk(atk: number) {
    if (atk > 0 && atk <= 25) {
      this._atk = atk;
    } else {
      throw new Error('attack is incorrect');
    }
  }

  public get StunnedState(): boolean {
    return this._stunnedState;
  }

  public get name(): string {
    return this._name;
  }

  public get class(): string {
    return this._class;
  }

  public get health(): number {
    return this._health;
  }

  public get atk(): number {
    return this._atk;
  }
}
