import { FireArrows } from '../abilities/FireArrows';
import { Logger } from '../other/logger';
import { Archer } from '../players/archer';
import { Knight } from '../players/knight';

describe('FireArrows Ability', () => {
  let archer: Archer;
  let knight: Knight;

  beforeEach(() => {
    jest.useFakeTimers(); // Включаем фейковые таймеры
    archer = new Archer('Legolas', 80, 25);
    knight = new Knight('Aragorn', 120, 18);

    // Мокаем Logger, чтобы не загрязнять вывод в консоль
    jest.spyOn(Logger, 'logAbilityUse').mockImplementation(() => {});
    jest.spyOn(Logger, 'logBurnEffect').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllTimers(); // Очищаем все таймеры
    jest.clearAllMocks(); // Очищаем моки
    jest.useRealTimers(); // Возвращаем реальные таймеры
  });

  test('FireArrows deals initial damage and applies burn effect', () => {
    const fireArrows = new FireArrows(archer);

    // Используем способность
    fireArrows.use(knight, archer);

    // Проверяем, что основной урон нанесен
    expect(knight.health).toBe(120 - archer.atk); // Основной урон

    // Проверяем, что эффект "горения" наносит урон в течение 2 ходов
    jest.advanceTimersByTime(1000); // Прошел 1 ход
    expect(knight.health).toBe(120 - archer.atk - 5); // Урон от первого "горения"

    jest.advanceTimersByTime(1000); // Прошел 2 ход
    expect(knight.health).toBe(120 - archer.atk - 10); // Урон от второго "горения"

    // Проверяем, что эффект "горения" больше не наносит урон
    jest.advanceTimersByTime(1000); // Прошел 3 ход
    expect(knight.health).toBe(120 - archer.atk - 10); // Урон не изменился
  });

  test('FireArrows logs burn effect damage', () => {
    const fireArrows = new FireArrows(archer);

    // Используем способность
    fireArrows.use(knight, archer);

    // Проверяем, что логирование урона от эффекта "горения" произошло
    jest.advanceTimersByTime(1000); // Прошел 1 ход
    expect(Logger.logBurnEffect).toHaveBeenCalledWith(
      archer.classid,
      archer.name,
      knight.classid,
      knight.name,
      5,
    );

    jest.advanceTimersByTime(1000); // Прошел 2 ход
    expect(Logger.logBurnEffect).toHaveBeenCalledWith(
      archer.classid,
      archer.name,
      knight.classid,
      knight.name,
      5,
    );
  });

  test('FireArrows can only be used once per round', () => {
    const fireArrows = new FireArrows(archer);

    // Используем способность первый раз
    fireArrows.use(knight, archer);
    expect(fireArrows.usagetimes).toBe(0); // Проверяем, что способность использована

    // Пытаемся использовать способность второй раз
    fireArrows.use(knight, archer);

    // Проверяем, что урон не нанесен повторно
    expect(knight.health).toBe(120 - archer.atk); // Урон остается прежним
    expect(fireArrows.usagetimes).toBe(0); // Способность все еще блокирована
  });
});