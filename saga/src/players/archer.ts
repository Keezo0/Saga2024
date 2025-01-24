import { FireArrows } from '../abilities/FireArrows';
import { FrostArrows } from '../abilities/FrostArrows';
import { Player, playerClasses } from './player';

export class Archer extends Player {
  constructor(playerName: string, playerHealth: number, playerAtk: number) {
    super(playerName, playerHealth, playerAtk);
    this._classid = playerClasses.Archer;
    this._class = "Лучник";
    this._abilities.push(new FireArrows(this));
  }

  public useSpecialAbility(target: Player): void {
    const ability = this._abilities.find(ability => ability instanceof FireArrows);
    if (ability) {
      ability.use(target, this);
    }
  }
}