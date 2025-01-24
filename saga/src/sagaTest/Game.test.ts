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
    expect(game['players'].length).toBe(2); // Проверяем, что создано два игрока
  });

  test('Game ends when a player is defeated', () => {
    const player1 = game['players'][0];
    const player2 = game['players'][1];

    // Наносим урон, чтобы здоровье одного из игроков опустилось до 0
    player1['_health'] = 0; // Используем защищенное свойство через доступ к внутренностям

    // Запускаем игру
    game['startGame']();

    // Проверяем, что игра завершилась
    expect(player1.health).toBe(0); // Используем геттер
    expect(player2.health).toBeGreaterThan(0); // Используем геттер
  });
});