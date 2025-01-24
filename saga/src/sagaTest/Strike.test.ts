import { Strike } from '../abilities/Strike';
import { Knight } from '../players/knight';
import { Mage } from '../players/mage';

describe('Strike Ability', () => {
  let knight: Knight;
  let mage: Mage;

  beforeEach(() => {
    knight = new Knight('Aragorn', 120, 18);
    mage = new Mage('Gandalf', 100, 20);
  });

  test('Strike deals bonus damage to target', () => {
    const strike = new Strike(knight);
    strike.use(mage, knight);

    const bonusDamage = Math.round(knight.atk * 0.3);
    const totalDamage = knight.atk + bonusDamage;

    expect(mage.health).toBe(100 - totalDamage);
  });

  test('Strike can only be used once per round', () => {
    const strike = new Strike(knight);
    strike.use(mage, knight);
    expect(strike.usagetimes).toBe(0);
  });
});
