import { playerClasses } from '../players/player';

export class Logger {
  private static _abilityNames = ['Зачарование', 'Огненные стрелы', 'Удар возмездия'];
  private static _classNames = ['Маг', 'Рыцарь', 'Лучник'];

  public static logAttack(casterClass: playerClasses, casterName: string, targetClass: playerClasses, targetName: string, damage: number): void {
    const casterClassName = this._classNames[casterClass];
    const targetClassName = this._classNames[targetClass];
    console.log(`${casterClassName} ${casterName} атаковал ${targetClassName} ${targetName} и нанес ${damage} урона.`);
  }

  public static logAbilityUse(casterClass: playerClasses, casterName: string, abilityId: number, targetClass: playerClasses, targetName: string, damage: number): void {
    const casterClassName = this._classNames[casterClass];
    const targetClassName = this._classNames[targetClass];
    const abilityName = this._abilityNames[abilityId];
    console.log(`${casterClassName} ${casterName} использовал способность "${abilityName}" на ${targetClassName} ${targetName} и нанес ${damage} урона.`);
  }

  public static logPlayerCreation(playerClass: playerClasses, playerName: string, health: number, atk: number): void {
    const className = this._classNames[playerClass];
    console.log(`Создан новый игрок: ${className} ${playerName} с ${health} здоровья и ${atk} атаки.`);
  }

  public static logStunnedState(playerClass: playerClasses, playerName: string, isStunned: boolean): void {
    const className = this._classNames[playerClass];
    const state = isStunned ? 'оглушен' : 'не оглушен';
    console.log(`${className} ${playerName} теперь ${state}.`);
  }
}