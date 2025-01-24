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

  test('FrostArrows logs a message when used more than once per round', () => {
    const frostArrows = new FrostArrows(archer);
    const consoleSpy = jest.spyOn(console, 'log');

    frostArrows.use(mage, archer);
    frostArrows.use(mage, archer);

    expect(consoleSpy).toHaveBeenCalledWith(
      `${archer.name} не может использовать "Ледяные стрелы" в этом раунде.`
    );

    consoleSpy.mockRestore();
  });
});