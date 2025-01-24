import { Player } from '../players/player';
import { Attack } from '../abilities/attack';

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
      if (attacker.skipTurn()) {
        this.players.reverse();
        continue;
      }

      const useSpecialAbility = Math.random() < 0.5;

      if (useSpecialAbility) {
        const specialAbility = attacker.abilities.find(ability => ability.usagetimes === 1);
        if (specialAbility) {
          const { damage } = specialAbility;
          specialAbility.use(defender, attacker);
          Logger.logAbilityUse(attacker.classid, attacker.name, defender.classid, defender.name, damage);
          if (defender.health <= 0) {
            console.log(`${defender.name} побежден!`);
            return;
          }
        } else {
          console.log(`${attacker.name} не может использовать способность в этом раунде.`);
        }
      } else {
        const damage = attacker.atk;
        defender.useAbility(attacker, new Attack(attacker), damage);
        Logger.logAttack(attacker.classid, attacker.name, defender.classid, defender.name, damage);

        if (defender.health <= 0) {
          console.log(`${defender.name} побежден!`);
          return;
        }
      }

      this.players.forEach(player => {
        player.abilities.forEach(ability => {
          ability.usagetimes = 1;
        });
      });

      this.players.reverse();
    }

    if (this.players.every(player => player.health <= 0)) {
      console.log('Оба игрока побеждены!');
    }
  }
}

new Game();
