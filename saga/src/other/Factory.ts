import { Player, playerClasses } from "../players/player";

export abstract class PlayerGen {
  public static generateRandomPlayer(): Player {
      const names = ['Джейс', 'Уильям', 'Кэтрин', 'Элизабет', 'Виктор'];
      const randomName = names[Math.floor(Math.random() * names.length)];
      
      // Генерация здоровья в диапазоне от 35 до 50
      const randomHealth = Math.floor(Math.random() * (50 - 35 + 1)) + 35;
      
      // Генерация атаки в диапазоне от 15 до 25
      const randomAtk = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
  
      // Возвращаем экземпляр игрока с случайными значениями
      return new (class extends Player {
        constructor() {
          super(randomName, randomHealth, randomAtk);
          this._classid = Math.floor(Math.random() * 3); // случайный класс
          this._class = playerClasses[this._classid];
        }
      })();
    }
}

const randomPlayer = PlayerGen.generateRandomPlayer();
console.log(randomPlayer.name, randomPlayer.health, randomPlayer.atk, randomPlayer.class);