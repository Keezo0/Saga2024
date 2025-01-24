import { Attack } from "../abilities/attack";
import { Enchantment } from "../abilities/Enchantment";
import { FireArrows } from "../abilities/FireArrows";
import { Strike } from "../abilities/Strike";
import { Archer } from "../players/archer";
import { Knight } from "../players/knight";
import { Mage } from "../players/mage";

describe('Abilities', () => {
  let mage: Mage;
  let archer: Archer;
  let knight: Knight;

  beforeEach(() => {
    mage = new Mage('Gandalf', 100, 20);
    archer = new Archer('Legolas', 80, 25);
    knight = new Knight('Aragorn', 120, 18);
  });

  test('Attack ability', () => {
    const attack = new Attack(mage);
    attack.use(archer, mage);
    expect(archer.health).toBe(80 - mage.atk); // Проверяем, что урон нанесен
  });

  test('Enchantment ability', () => {
    const enchantment = new Enchantment(mage);
    enchantment.use(archer, mage);
    expect(archer.health).toBe(80 - Math.round(mage.atk * 0.7)); // Проверяем уменьшенный урон
    expect(archer.stunnedState).toBe(true); // Проверяем, что цель оглушена
  });

  test('FireArrows ability', () => {
    const fireArrows = new FireArrows(archer);
    fireArrows.use(knight, archer);
    expect(knight.health).toBe(120 - archer.atk); // Проверяем урон
  });

  test('Strike ability', () => {
    const strike = new Strike(knight);
    strike.use(mage, knight);
    const bonusDamage = Math.round(knight.atk * 0.3);
    expect(mage.health).toBe(100 - (knight.atk + bonusDamage)); // Проверяем урон с бонусом
  });
});