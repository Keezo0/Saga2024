import { Attack } from '../abilities/attack';

export abstract class Player {
  protected _name: string;
  protected _class: string;
  protected _health: number;
  protected _atk: number;
  protected _stunnedState: boolean = false;

  constructor(playerName: string, role: string, playerHealth: number, playerAtk: number) {
    this._name = playerName;
    this._class = role;
    this._health = playerHealth;
    this._atk = playerAtk;
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

  public takeDmg(taking_dmg: Attack) {
    if (taking_dmg._controll_apply === true) {
      this._stunnedState = true;
      this._health = this._health - taking_dmg._damage;
    } else {
      this._health = this._health - taking_dmg._damage;
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