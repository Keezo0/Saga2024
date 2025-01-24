import { Archer } from '../players/archer';
import { Knight } from '../players/knight';
import { Mage } from '../players/mage';
import { PlayerClasses } from '../players/player';

describe('Player Classes', () => {
  test('Mage creation', () => {
    const mage = new Mage('Gandalf', 100, 20);
    expect(mage.name).toBe('Gandalf');
    expect(mage.health).toBe(100);
    expect(mage.atk).toBe(20);
    expect(mage.classid).toBe(PlayerClasses.Mage);
  });

  test('Archer creation', () => {
    const archer = new Archer('Legolas', 80, 25);
    expect(archer.name).toBe('Legolas');
    expect(archer.health).toBe(80);
    expect(archer.atk).toBe(25);
    expect(archer.classid).toBe(PlayerClasses.Archer);
  });

  test('Knight creation', () => {
    const knight = new Knight('Aragorn', 120, 18);
    expect(knight.name).toBe('Aragorn');
    expect(knight.health).toBe(120);
    expect(knight.atk).toBe(18);
    expect(knight.classid).toBe(PlayerClasses.Knight);
  });
});
