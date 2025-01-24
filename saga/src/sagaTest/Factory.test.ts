
import { PlayerGen } from "../other/Factory";
import { PlayerClasses } from "../players/player";

describe('Player Factory', () => {
  test('Generate random player', () => {
    const player = PlayerGen.generateRandomPlayer();
    expect(player).toBeDefined();
    expect(player.name).toBeDefined();
    expect(player.health).toBeGreaterThanOrEqual(35);
    expect(player.health).toBeLessThanOrEqual(50);
    expect(player.atk).toBeGreaterThanOrEqual(15);
    expect(player.atk).toBeLessThanOrEqual(25);
    expect([PlayerClasses.Mage, PlayerClasses.Archer, PlayerClasses.Knight]).toContain(player.classid);
  });
});