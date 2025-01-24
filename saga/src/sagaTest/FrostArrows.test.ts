import { FrostArrows } from "../abilities/FrostArrows";
import { Archer } from "../players/archer";
import { Mage } from "../players/mage";

describe('FrostArrows Ability', () => {
  let archer: Archer;
  let mage: Mage;

  beforeEach(() => {
    archer = new Archer('Legolas', 80, 25);
    mage = new Mage('Gandalf', 100, 20);
  });

  test('FrostArrows deals damage and stuns target', () => {
    const frostArrows = new FrostArrows(archer);

    // Используем способность
    frostArrows.use(mage, archer);

    // Проверяем, что урон нанесен
    expect(mage.health).toBe(100 - archer.atk);

    // Проверяем, что цель оглушена
    expect(mage.stunnedState).toBe(true);
  });

  test('FrostArrows can only be used once per round', () => {
    const frostArrows = new FrostArrows(archer);

    // Используем способность первый раз
    frostArrows.use(mage, archer);
    expect(frostArrows['_usagetime']).toBe(0); // Проверяем, что способность использована

    // Пытаемся использовать способность второй раз
    frostArrows.use(mage, archer);

    // Проверяем, что урон не нанесен повторно
    expect(mage.health).toBe(100 - archer.atk); // Урон остается прежним
    expect(frostArrows['_usagetime']).toBe(0); // Способность все еще блокирована
  });

  test('FrostArrows logs a message when used more than once per round', () => {
    const frostArrows = new FrostArrows(archer);
    const consoleSpy = jest.spyOn(console, 'log');

    // Используем способность первый раз
    frostArrows.use(mage, archer);

    // Пытаемся использовать способность второй раз
    frostArrows.use(mage, archer);

    // Проверяем, что сообщение выведено в консоль
    expect(consoleSpy).toHaveBeenCalledWith(
      `${archer.name} не может использовать "Ледяные стрелы" в этом раунде.`
    );

    // Очищаем мок
    consoleSpy.mockRestore();
  });
});