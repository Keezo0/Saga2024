import { FireArrows } from '../abilities/FireArrows';
import { Mage } from '../players/mage';
import { Logger } from '../other/logger';
import { Archer } from '../players/archer';

describe('FireArrows Ability', () => {
  let archer: Archer;
  let mage: Mage;

  beforeEach(() => {
    archer = new Archer('Legolas', 80, 25);
    mage = new Mage('Gandalf', 100, 20);
    jest.spyOn(Logger, 'logAbilityUse').mockImplementation(() => {});
    jest.spyOn(Logger, 'logBurnEffect').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('FireArrows deals initial damage and applies burn effect', () => {
    const fireArrows = new FireArrows(archer);
    fireArrows.use(mage, archer);
    expect(mage.health).toBe(100 - archer.atk);
    fireArrows.applyBurnEffect();
    expect(mage.health).toBe(100 - archer.atk - 5);
    fireArrows.applyBurnEffect();
    expect(mage.health).toBe(100 - archer.atk - 10);
  });

  test('FireArrows can only be used once per round', () => {
    const fireArrows = new FireArrows(archer);

    fireArrows.use(mage, archer);
    expect(fireArrows['_usagetime']).toBe(0);

    fireArrows.use(mage, archer);
    expect(mage.health).toBe(100 - archer.atk);
    expect(fireArrows['_usagetime']).toBe(0);
  });

  test('FireArrows logs burn effect damage', () => {
    const fireArrows = new FireArrows(archer);
    fireArrows.use(mage, archer);
    fireArrows.applyBurnEffect();

    expect(Logger.logBurnEffect).toHaveBeenCalledWith(
      archer.classid,
      archer.name,
      mage.classid,
      mage.name,
      5,
      70,
    );
  });
});