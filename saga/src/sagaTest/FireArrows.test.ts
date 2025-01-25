import { Archer } from '../players/archer';
import { Mage } from '../players/mage';
import { FireArrows } from '../abilities/FireArrows';

describe('FireArrows Ability', () => {
  let archer: Archer;
  let mage: Mage;

  beforeEach(() => {
    archer = new Archer('Legolas', 100, 20);
    mage = new Mage('Gandalf', 100, 15);
  });

  test('FireArrows deals damage and applies burn effect', () => {
    const fireArrows = new FireArrows(archer);

    fireArrows.use(mage, archer);
    expect(mage.health).toBe(100 - 20);

    expect(fireArrows['_burnTurns']).toBe(2);
    expect(fireArrows['_burnTarget']).toBe(mage);
    expect(fireArrows['_burnCaster']).toBe(archer);
  });

  test('FireArrows can only be used once per round', () => {
    const fireArrows = new FireArrows(archer);

    fireArrows.use(mage, archer);
    expect(mage.health).toBe(100 - 20);
    expect(fireArrows['_usagetime']).toBe(0);

    fireArrows.use(mage, archer);
    expect(mage.health).toBe(100 - 20);
  });

  test('Burn effect deals damage over two turns', () => {
    const fireArrows = new FireArrows(archer);

    fireArrows.use(mage, archer);

    fireArrows.applyBurnEffect();
    expect(mage.health).toBe(100 - 20 - 5);
    expect(fireArrows['_burnTurns']).toBe(1);
    fireArrows.applyBurnEffect();
    expect(mage.health).toBe(100 - 20 - 5 - 5);
    expect(fireArrows['_burnTurns']).toBe(0);

    fireArrows.applyBurnEffect();
    expect(mage.health).toBe(100 - 20 - 5 - 5);
  });
});