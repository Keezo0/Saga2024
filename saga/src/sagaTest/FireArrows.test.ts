import { FireArrows } from "../abilities/FireArrows";
import { Archer } from "../players/archer";
import { Knight } from "../players/knight";

describe('FireArrows Ability', () => {
  let archer: Archer;
  let knight: Knight;

  beforeEach(() => {
    archer = new Archer('Legolas', 80, 25);
    knight = new Knight('Aragorn', 120, 18);
  });

  test('FireArrows deals damage to target', () => {
    const fireArrows = new FireArrows(archer);
    fireArrows.use(knight, archer);
    expect(knight.health).toBe(120 - archer.atk); // Проверяем урон
  });

  test('FireArrows can only be used once per round', () => {
    const fireArrows = new FireArrows(archer);
    fireArrows.use(knight, archer); // Используем способность
    expect(fireArrows.usagetimes).toBe(0); // Проверяем, что способность использована
  });
});