export abstract class Player {
  private _name: string;
  private _class: string;
  private _health: number;
  private _atk: number;
  private _stunnedState: boolean = false;

  constructor(playerName: string, playerClass: string, playerHealth: number, playerAtk: number) {
    this._name = playerName;
    this._class = playerClass;
    this._health = playerHealth;
    this._atk = playerAtk;
  }

  attack(target) {
    const damage = this._atk;
    target.takeDamage(damage);
    return `${this._name} атакует ${target} и наносит ${damage} урона.`;
  }

  takeDamage(damage: number) {
    this._health -= damage;
    if (this._health < 0) {
      this._health = 0;
    }
  }

  public setHealth(hp: number) {
    if (hp > 0 && hp <= 50) {
      this._health = hp;
    } else {
      throw new Error('health is incorrect');
    }
  }

  public setAtk(atk: number) {
    if (atk > 0 && atk <= 25) {
      this._atk = atk;
    } else {
      throw new Error('attack is incorrect');
    }
  }

  public getStunnedState(): boolean {
    return this._stunnedState;
  }

  public getName(): string {
    return this._name;
  }

  public getClass(): string {
    return this._class;
  }

  public getHealth(): number {
    return this._health;
  }

  public getAtk(): number {
    return this._atk;
  }
}
