import { WorldMap } from "../src/hexagons/WorldMap";

describe("WorldMap", () => {
  it("should create a valid world map with the correct number of tiles", () => {
    const worldMap = new WorldMap(3, 10);
    const numberOfTiles = Object.keys(worldMap.tiles).reduce((acc, q) => {
      return acc + Object.keys(worldMap.tiles[Number(q)]).length;
    }, 0);
    expect(numberOfTiles).toBe(19); // 1 + 6 + 12 = 19
    // TODO, work out why this is doing 19 (as for 3 radius) instead of 7 (as for 2 radius)
  });
});
