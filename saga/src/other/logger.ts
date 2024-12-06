import { Ability, abilityClasses } from '../abilities/ability';
import { Attack } from '../abilities/attack';
import { playerClasses } from '../players/player';

abstract class Logger {
  public static _names_array = ['Артур', 'Уильям', 'Кэтрин', 'Элизабет', 'Эльдар'];

  public static _ability_names = ['Зачарование', 'Огненные стрелы', 'Удар возмездия'];

  public static _class_names = ['Маг', 'Рыцарь', 'Лучник'];

  public static attack(caster: playerClasses, casterName: string, target: playerClasses, damage: number) {
    //
  }
}
