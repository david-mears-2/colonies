// Defining a hex in terms of the three axes that run from the centre of a hex to each corner.
// We're calling these axes 'q', 'r', and 's'.
// I think 'q' and 'r' map to 'column' and 'row' in a 2D grid, and 's' just continues the pattern alphabetically for 3D.

// Using 'flat-topped' hexagons entails:
// - The 'q' axis is left-to-right horizontal (going rightwards increases q).
// - The 'r' axis is top-right to bottom-left (going down and left increases r).
// - The 's' axis is bottom-right to top-left (going up and left increases s).

// Using 'pointy-topped' hexagons entails:
// - The 'q' axis is bottom-left to top-right (going up and right increases q).
// - The 'r' axis is top-to-bottom vertical (going downwards increases r).
// - The 's' axis is bottom-right to top-left (going up and left increases s).

// For commensurability between the two orientations, I am defining 'North' as the direction
// in which the 'q' coordinate stays constant (i.e. North is perpendicular to q) and 'r' decreases.
// This means that in the flat-topped orientation, 'North' is directly up the screen, and in the pointy-topped
// orientation, 'North' is up and to the left.

export class CubeCoordinatesHex {
  public s: number;

  // TODO: check how TS fares with accessor vs calculator for s.
  // "Whether you want to store the third one as a field or compute it in an accessor is primarily a code style decision. If performance is the main concern, the cost of the accessor vs the cost of the computation will matter most. In languages like C++ where accessors are inlined away, save the memory (accessing RAM is expensive) and use an accessor. In languages like Python where accessors are expensive, save the function call (function calls are expensive) and store the third coordinate in a field."

  // Constructor takes two arguments ('axial coordinates') to simplify caller code.
  // The third coordinate is calculated from the first two, since we only need two axes to uniquely identify a hex.
  // NB we can rewrite this code later to take a single argument (an array), since the guide at
  // https://www.redblobgames.com/grids/hexagons/implementation.html#hex says that using "an array instead of
  // named fields" allows us to take advantage of CPU/GPU for "performance".
  constructor(public q: number, public r: number) {
    this.s = -q - r;
    // Check that q + r + s = 0 since we are defining hexes in a cube coordinate system by
    // taking a diagonal slice through the cube, which passes through two corners of it.
    // In the future, if we elevate any hexes above the 'ground', this equality will no longer hold.
    if (Math.round(this.q + this.r + this.s) !== 0) throw new Error("q + r + s must be 0");
  }

  public northNeighbor(): CubeCoordinatesHex {
    return new CubeCoordinatesHex(this.q, this.r - 1);
  }

  public northEastNeighbor(): CubeCoordinatesHex {
    return new CubeCoordinatesHex(this.q + 1, this.r - 1);
  }

  public northWestNeighbor(): CubeCoordinatesHex {
    return new CubeCoordinatesHex(this.q - 1, this.r);
  }

  public southNeighbor(): CubeCoordinatesHex {
    return new CubeCoordinatesHex(this.q, this.r + 1);
  }

  public southEastNeighbor(): CubeCoordinatesHex {
    return new CubeCoordinatesHex(this.q + 1, this.r);
  }

  public southWestNeighbor(): CubeCoordinatesHex {
    return new CubeCoordinatesHex(this.q - 1, this.r + 1);
  }

  public allNeighbors(): CubeCoordinatesHex[] {
    return [
      this.northNeighbor(),
      this.northEastNeighbor(),
      this.northWestNeighbor(),
      this.southNeighbor(),
      this.southEastNeighbor(),
      this.southWestNeighbor(),
    ];
  }

  // Adjacent hexagons are distance 1 apart in the hex grid but distance 2 apart in the cube grid.
  // In the 3D cube grid, Manhattan distances are abs(dx) + abs(dy) + abs(dz).
  // The distance on the hex grid is half that.
  public distanceFrom(other: CubeCoordinatesHex): number {
    return (Math.abs(this.q - other.q) + Math.abs(this.r - other.r) + Math.abs(this.s - other.s)) / 2;
  }
}
