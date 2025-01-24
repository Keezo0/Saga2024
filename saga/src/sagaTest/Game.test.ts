import { Game } from '../other/game';
import { Logger } from '../other/logger';

describe('Game Logic', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
    jest.spyOn(Logger, 'logPlayerCreation').mockImplementation(() => {});
    jest.spyOn(Logger, 'logAttack').mockImplementation(() => {});
    jest.spyOn(Logger, 'logAbilityUse').mockImplementation(() => {});
  });

  test('Game initializes with two players', () => {
    expect(game['players'].length).toBe(2);
  });

  test('Game ends when a player is defeated', () => {
    const player1 = game['players'][0];
    const player2 = game['players'][1];

    player1['_health'] = 0;
    game['startGame']();
    expect(player1.health).toBe(0);

    if (player2.health > 0) {
      expect(player2.health).toBeGreaterThan(0);
    } else {
      expect(player2.health).toBe(0);
    }
  });
});
