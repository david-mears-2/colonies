// I don't mind assuming that the world is a big hexagon. This page implies that hexagon world maps are
// easier than rectangular ones given cube-coordinate hexes:
// https://www.redblobgames.com/grids/hexagons/implementation.html#shape-hexagon

import { CubeCoordinatesHex } from "./CubeCoordinatesHex";

// He also writes:
// "In practice, I rarely use array storage
// for hex maps, except when the maps are large, and my code is written in C++. Although it’s more compact,
// it almost never makes a difference in practice in my projects. For most of my projects, I use a hash
// table and/or graph representation. It gives me the most flexibility and reusability. I only need the
// more compact storage when storage size matters."

// Hash where the first key is the q coordinate and the second key is the r coordinate.
type TileMap = Record<number, Record<number, CubeCoordinatesHex>>;

export class WorldMap {
  public tiles: TileMap = {}; // Hashmap of hexes in the world.

  constructor(
    public radius: number, // A world of radius 1 has 1 hex, 2 has 7, 3 has 19, etc.
    public tileSize: number, // Size of the hexes in pixels.
  ) {
    // Note that because the world is a hexagon, each row may have a different number of hexes
    // starting at a different horizontal place. This means that the index of a hex within its row
    // does not directly correspond to a coordinate value.
    this.tiles = this.generateTiles();
  }

  private generateTiles(): TileMap {
    const hexes: TileMap = {};

    // Top row of hexes is designated r = 0.
    // Leftmost hex of world is designated q = 0.
    // It falls out that the top left hex is at q = radius, r = 0 (and center is (radius, radius))
    // r ranges from 0 to radius * 2.
    for (let r = 0; r <= this.radius * 2; r++) {
      // Within these rows, the range of q varies its start and end values.
      // Start is never less than 0.
      // End is never more than 2*radius.
      const startingQ = Math.max(this.radius - r, 0)
      const endingQ = Math.min(
        ((this.radius * 3) - r),
        this.radius * 2
      );
      for (let q = startingQ; q <= endingQ; q++) {
        console.log(`hex[q][r]: hex[${q}][${r}]`);
        const hex = new CubeCoordinatesHex(q, r);
        if (!hexes[q]) {
          hexes[q] = {};
        }
        hexes[q][r] = hex;
      }
    }

    return hexes;
  }

  public centerTile(): CubeCoordinatesHex {
    return this.tiles[this.radius][this.radius];
  }
}
