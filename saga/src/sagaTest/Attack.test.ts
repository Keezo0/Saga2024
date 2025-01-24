import { Attack } from '../abilities/attack';
import { Archer } from '../players/archer';
import { Mage } from '../players/mage';

describe('Attack Ability', () => {
  let mage: Mage;
  let archer: Archer;

  beforeEach(() => {
    mage = new Mage('Gandalf', 100, 20);
    archer = new Archer('Legolas', 80, 25);
  });

  test('Attack deals damage to target', () => {
    const attack = new Attack(mage);
    attack.use(archer, mage);
    expect(archer.health).toBe(80 - mage.atk);
  });
});
