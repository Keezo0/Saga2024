import { Mage } from '../players/mage';
import { Archer } from '../players/archer';
import { Enchantment } from '../abilities/Enchantment';

describe('Enchantment Ability', () => {
  let mage: Mage;
  let archer: Archer;

  beforeEach(() => {
    mage = new Mage('Gandalf', 100, 20);
    archer = new Archer('Legolas', 80, 15);
  });

  test('Enchantment deals reduced damage and stuns target', () => {
    const enchantment = new Enchantment(mage);
    enchantment.use(archer, mage);

    const reducedDamage = Math.round(mage.atk * 0.7);
    expect(archer.health).toBe(80 - reducedDamage); // Проверяем урон
    expect(archer.stunnedState).toBe(true); // Проверяем оглушение
  });
});
