import { FrostArrows } from '../abilities/FrostArrows';
import { Archer } from '../players/archer';
import { Mage } from '../players/mage';

describe('FrostArrows Ability', () => {
  let archer: Archer;
  let mage: Mage;

  beforeEach(() => {
    archer = new Archer('Legolas', 80, 25);
    mage = new Mage('Gandalf', 100, 20);
  });

  test('FrostArrows can only be used once per round', () => {
    const frostArrows = new FrostArrows(archer);
    frostArrows.use(mage, archer);
    expect(frostArrows['_usagetime']).toBe(0);

    frostArrows.use(mage, archer);

    expect(mage.health).toBe(100 - archer.atk);
    expect(frostArrows['_usagetime']).toBe(0);
  });
});