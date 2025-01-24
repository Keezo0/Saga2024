import { FireArrows } from '../abilities/FireArrows';
import { Player, PlayerClasses } from './player';

export class Archer extends Player {
  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, playerHealth, playerAtk);
    this._classid = PlayerClasses.Archer;
    this._class = 'Лучник';
    this._abilities.push(new FireArrows(this));
  }

  public useSpecialAbility(target: Player): void {
    const fireArrowsAbility = this._abilities.find(ability => ability instanceof FireArrows);
    if (fireArrowsAbility) {
      fireArrowsAbility.use(target, this);
    }
  }
}