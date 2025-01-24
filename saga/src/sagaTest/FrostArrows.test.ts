import { Archer } from '../players/archer';
import { Mage } from '../players/mage';
import { FrostArrows } from '../abilities/FrostArrows';

describe('FrostArrows Ability', () => {
  let archer: Archer;
  let mage: Mage;

  beforeEach(() => {
    archer = new Archer('Legolas', 100, 20);
    mage = new Mage('Gandalf', 100, 15);
  });

  test('FrostArrows can only be used once per round', () => {
    const frostArrows = new FrostArrows(archer);
    frostArrows.use(mage, archer);

    expect(mage.health).toBe(100 - 20);
    expect(frostArrows.usagetime).toBe(0);
    frostArrows.use(mage, archer);
    expect(mage.health).toBe(100 - 20);
  });
});
