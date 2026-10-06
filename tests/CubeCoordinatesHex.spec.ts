import { CubeCoordinatesHex } from '../src/hexagons/CubeCoordinatesHex';

describe('CubeCoordinatesHex', () => {
  it('should create a valid hex where q + r + s = 0', () => {
    const hex = new CubeCoordinatesHex(1, -1);
    expect(hex.q).toBe(1);
    expect(hex.r).toBe(-1);
    expect(hex.s).toBe(0);

    const hex2 = new CubeCoordinatesHex(10, -1);
    expect(hex2.q).toBe(10);
    expect(hex2.r).toBe(-1);
    expect(hex2.s).toBe(-9);
  });

  it('can calculate neighbors', () => {
    const hex = new CubeCoordinatesHex(-5, -5);
    expect(hex.northNeighbor()).toEqual(new CubeCoordinatesHex(-5, -6));
    expect(hex.northEastNeighbor()).toEqual(new CubeCoordinatesHex(-4, -6));
    expect(hex.northWestNeighbor()).toEqual(new CubeCoordinatesHex(-6, -5));
    expect(hex.southNeighbor()).toEqual(new CubeCoordinatesHex(-5, -4));
    expect(hex.southEastNeighbor()).toEqual(new CubeCoordinatesHex(-4, -5));
    expect(hex.southWestNeighbor()).toEqual(new CubeCoordinatesHex(-6, -4));
  });

  it('can calculate distance', () => {
    const hex = new CubeCoordinatesHex(0, 0);
    hex.allNeighbors().forEach((neighbor) => {
      expect(hex.distanceFrom(neighbor)).toBe(1);
    });
    expect(hex.distanceFrom(hex)).toBe(0);

    const hex2 = new CubeCoordinatesHex(2, -2);
    expect(hex.distanceFrom(hex2)).toBe(2);
  });
});
