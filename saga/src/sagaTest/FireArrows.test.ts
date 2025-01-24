import { Archer } from '../players/archer';
import { Mage } from '../players/mage';
import { FrostArrows } from '../abilities/FrostArrows';

describe('FrostArrows Ability', () => {
  let archer: Archer;
  let mage: Mage;

  beforeEach(() => {
    // Создаем игроков перед каждым тестом
    archer = new Archer('Legolas', 100, 20); // Лучник с атакой 20
    mage = new Mage('Gandalf', 100, 15); // Маг с атакой 15
  });

  test('FrostArrows deals damage and stuns the target', () => {
    const frostArrows = new FrostArrows(archer); // Создаем способность FrostArrows

    // Используем способность на цель
    frostArrows.use(mage, archer);

    // Проверяем, что здоровье цели уменьшилось на 20 (атака лучника)
    expect(mage.health).toBe(100 - 20);

    // Проверяем, что цель оглушена
    expect(mage.stunnedState).toBe(true);
  });

  test('FrostArrows can only be used once per round', () => {
    const frostArrows = new FrostArrows(archer); // Создаем способность FrostArrows

    // Используем способность первый раз
    frostArrows.use(mage, archer);

    // Проверяем, что здоровье уменьшилось на 20
    expect(mage.health).toBe(100 - 20);

    // Проверяем, что способность больше нельзя использовать
    expect(frostArrows.usagetime).toBe(0);

    // Пытаемся использовать способность снова
    frostArrows.use(mage, archer);

    // Проверяем, что здоровье не изменилось
    expect(mage.health).toBe(100 - 20);
  });
});
