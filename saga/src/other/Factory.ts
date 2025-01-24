import { Archer } from '../players/archer';
import { Knight } from '../players/knight';
import { Mage } from '../players/mage';
import { Player, PlayerClasses } from '../players/player';

export abstract class PlayerGen {
  public static generateRandomPlayer(): Player {
    const names = ['Джейс', 'Уильям', 'Кэтрин', 'Элизабет', 'Виктор'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomHealth = Math.floor(Math.random() * (50 - 35 + 1)) + 35;
    const randomAtk = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
    const randomClassId = Math.floor(Math.random() * 3);

    // Создаем экземпляр игрока в зависимости от выбранного класса
    switch (randomClassId) {
      case PlayerClasses.Mage:
        return new Mage(randomName, randomHealth, randomAtk);
      case PlayerClasses.Archer:
        return new Archer(randomName, randomHealth, randomAtk);
      case PlayerClasses.Knight:
        return new Knight(randomName, randomHealth, randomAtk);
      default:
        throw new Error('Неизвестный класс игрока');
    }
  }
}

// const randomPlayer = PlayerGen.generateRandomPlayer();
// console.log(randomPlayer.name, randomPlayer.health, randomPlayer.atk, randomPlayer.class);
