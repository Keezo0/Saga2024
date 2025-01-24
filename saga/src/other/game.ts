import { Player } from '../players/player';
import { Attack } from '../abilities/attack';
import { FireArrows } from '../abilities/FireArrows'; // Импортируем FireArrows
import { PlayerGen } from './Factory';
import { Logger } from './logger';

export class Game {
    private players: Player[] = [];
  
    constructor() {
      this.initializeGame();
    }
  
    private initializeGame(): void {
      const player1 = PlayerGen.generateRandomPlayer();
      const player2 = PlayerGen.generateRandomPlayer();
  
      this.players.push(player1, player2);
  
      Logger.logPlayerCreation(player1.classid, player1.name, player1.health, player1.atk);
      Logger.logPlayerCreation(player2.classid, player2.name, player2.health, player2.atk);
  
      this.startGame();
    }
  
    private startGame(): void {
      while (this.players.every(player => player.health > 0)) {
        const [attacker, defender] = this.players;
  
        // Сбрасываем флаги использования способностей в начале хода
        attacker.abilities.forEach(ability => ability.resetTurn());
        defender.abilities.forEach(ability => ability.resetTurn());
  
        // Проверяем, должен ли атакующий пропустить ход
        if (attacker.skipTurn()) {
          this.players.reverse();
          continue;
        }
  
        // Решаем, использовать ли особую способность (50% шанс)
        const useSpecialAbility = Math.random() < 0.5;
  
        if (useSpecialAbility) {
          const specialAbility = attacker.abilities.find(ability => ability.canUse());
          if (specialAbility) {
            specialAbility.use(defender, attacker);
            Logger.logAbilityUse(attacker.classid, attacker.name, defender.classid, defender.name, specialAbility.damage);
  
            if (defender.health <= 0) {
              console.log(`${defender.name} побежден!`);
              return;
            }
          }
        } else {
          // Используем обычную атаку
          const damage = attacker.atk;
          defender.useAbility(attacker, new Attack(attacker), damage);
          Logger.logAttack(attacker.classid, attacker.name, defender.classid, defender.name, damage);
  
          // Проверяем, побежден ли защитник
          if (defender.health <= 0) {
            console.log(`${defender.name} побежден!`);
            return;
          }
        }
  
        // Применяем эффект "горения"
        this.applyBurnEffects();
  
        // Проверяем, побежден ли кто-то после эффекта "горения"
        if (this.players.some(player => player.health <= 0)) {
          const defeatedPlayer = this.players.find(player => player.health <= 0);
          console.log(`${defeatedPlayer?.name} побежден!`);
          return;
        }
  
        // Передаем ход другому игроку
        this.players.reverse();
      }
  
      if (this.players.every(player => player.health <= 0)) {
        console.log('Оба игрока побеждены!');
      }
    }
  
    // Метод для применения эффекта "горения"
    private applyBurnEffects(): void {
      this.players.forEach(player => {
        player.abilities.forEach(ability => {
          if (ability instanceof FireArrows) {
            ability.applyBurnEffect();
          }
        });
      });
    }
  }
new Game();