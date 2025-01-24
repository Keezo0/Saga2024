import { PlayerClasses } from '../players/player';

export class Logger {
  private static _abilityNames = ['Зачарование', 'Огненные стрелы', 'Удар возмездия'];
  private static _classNames = ['Маг', 'Рыцарь', 'Лучник'];

  public static logAttack(
    casterClass: PlayerClasses,
    casterName: string,
    targetClass: PlayerClasses,
    targetName: string,
    damage: number,
  ): void {
    const casterClassName = this._classNames[casterClass];
    const targetClassName = this._classNames[targetClass];
    console.log(`${casterClassName} ${casterName} атаковал ${targetClassName} ${targetName} и нанес ${damage} урона.`);
  }

  public static logAbilityUse(
    casterClass: PlayerClasses,
    casterName: string,
    targetClass: PlayerClasses,
    targetName: string,
    damage: number,
  ): void {
    const casterClassName = this._classNames[casterClass];
    const targetClassName = this._classNames[targetClass];
    const abilityName = this._abilityNames[casterClass];
    console.log(
      `${casterClassName} ${casterName} использовал способность "${abilityName}" на ${targetClassName} ${targetName} и нанес ${damage} урона.`,
    );
  }

  public static logBurnEffect(
    casterClass: PlayerClasses,
    casterName: string,
    targetClass: PlayerClasses,
    targetName: string,
    damage: number,
    targetHealth: number,
  ): void {
    const casterClassName = this._classNames[casterClass];
    const targetClassName = this._classNames[targetClass];
    console.log(
      `${targetClassName} ${targetName} получает ${damage} урона от эффекта "горения" после способности "${this._abilityNames[casterClass]}" от ${casterClassName} ${casterName}. Текущее здоровье: ${targetHealth}.`,
    );
  }

  public static logPlayerCreation(playerClass: PlayerClasses, playerName: string, health: number, atk: number): void {
    const className = this._classNames[playerClass];
    console.log(`Создан новый игрок: ${className} ${playerName} с ${health} здоровья и ${atk} атаки.`);
    console.log('--------------------------');
  }

  public static logSkipTurn(playerClass: PlayerClasses, playerName: string): void {
    const className = this._classNames[playerClass];
    console.log(`${className} ${playerName} пропускает ход из-за оглушения.`);
  }
}