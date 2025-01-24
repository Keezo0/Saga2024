import { Ability } from '../abilities/ability';

export enum playerClasses {
  Mage,
  Archer,
  Knight,
}

export abstract class Player {
  protected _abilities: Ability[] = [];
  protected _name: string;  
  protected _class: string;
  protected _classid: playerClasses;
  protected _health: number;
  protected _atk: number;
  protected _stunnedState: boolean = false;

  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    this._name = playerName;
    this._health = playerHealth;
    this.atk = playerAtk;
  }

  public useAbility(caster: Player, ability: Ability, damage: number) {
    this._health = this.health - damage;
  }


  protected set atk(atk: number) {
    if (atk > 0 && atk <= 25) {
      this._atk = atk;
    } else {
      throw new Error('attack is incorrect');
    }
  }

  public get classid(): playerClasses {
    return this._classid;
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