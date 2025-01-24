import { Enchantment } from '../abilities/Enchantment';
import { Archer } from '../players/archer';
import { Mage } from '../players/mage';

describe('Enchantment Ability', () => {
  let mage: Mage;
  let archer: Archer;

  beforeEach(() => {
    mage = new Mage('Gandalf', 100, 20);
    archer = new Archer('Legolas', 80, 25);
  });

  test('Enchantment deals reduced damage and stuns target', () => {
    const enchantment = new Enchantment(mage);
    enchantment.use(archer, mage);

    expect(archer.health).toBe(80 - Math.round(mage.atk * 0.7));
    expect(archer.stunnedState).toBe(true);
  });

  test('Enchantment can only be used once per round', () => {
    const enchantment = new Enchantment(mage);
    enchantment.use(archer, mage);
    expect(enchantment.usagetimes).toBe(0);
  });
});
