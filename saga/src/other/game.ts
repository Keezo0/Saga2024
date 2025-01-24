import { Player, playerClasses } from '../players/player';
import { PlayerGen } from './Factory';
import { Logger } from './logger';
import { Attack } from '../abilities/attack';

export class Game {
  private players: Player[] = [];

  constructor() {
    this.initializeGame();
  }

  private initializeGame(): void {
    // Создаем двух случайных игроков
    const player1 = PlayerGen.generateRandomPlayer();
    const player2 = PlayerGen.generateRandomPlayer();

    this.players.push(player1, player2);

    // Логируем создание игроков
    Logger.logPlayerCreation(player1.classid, player1.name, player1.health, player1.atk);
    Logger.logPlayerCreation(player2.classid, player2.name, player2.health, player2.atk);

    // Начинаем игру
    this.startGame();
  }

  private startGame(): void {
    while (this.players.every(player => player.health > 0)) {
      const [attacker, defender] = this.players;

      // Проверяем, должен ли атакующий пропустить ход
      if (attacker.skipTurn()) {
        this.players.reverse(); // Передаем ход следующему игроку
        continue;
      }

      // Решаем, использовать ли особую способность (50% шанс)
      const useSpecialAbility = Math.random() < 0.5;

      if (useSpecialAbility) {
        // Используем особую способность
        attacker.useSpecialAbility(defender);
        Logger.logAbilityUse(attacker.classid, attacker.name, defender.classid, defender.name, defender.health);
      } else {
        // Используем обычную атаку
        const damage = attacker.atk;
        defender.useAbility(attacker, new Attack(attacker), damage);
        Logger.logAttack(attacker.classid, attacker.name, defender.classid, defender.name, damage);
      }

      // Проверяем, жив ли защитник
      if (defender.health <= 0) {
        console.log(`${defender.name} побежден!`);
        break;
      }

      // Меняем местами атакующего и защитника
      this.players.reverse();
    }
  }
}

// Пример использования
const game = new Game();