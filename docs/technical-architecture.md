# MDN guide to web game development

https://developer.mozilla.org/en-US/docs/Games/Introduction

Use the [Full-Screen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) to go full screen

Use Scalable Vector Graphics (svg) so the graphics can scale smoothly

# Canvas vs WebGL

This sentence makes me think that canvas and webgl are alternatives not complementary:
> One simple technique consists of pre-rendering the map in a canvas on its own (when using the Canvas API) or on a texture (when using WebGL)

# WebAssembly? (WASM)

Could use this easily if I use AssemblyScript which compiles to WASM but looks like TS.

One difference between JS/TS and WASM is that JS is compiled while it's executed ('just-in-time' compilation) and WASM is compiled at compile-time.

I'm attracted to WASM because of potential performance improvements, but not sure how those would be achieved without me actually optimizing code at a low-level myself (so I'd have to learn about low-level things). Unless a lot of the performance improvement comes from doing the compilation ahead of time. [This commenter](https://news.ycombinator.com/item?id=32595102) suggests that one benefit, even when WASM doesn't improve performance, is that the performance is predictable, less variable.

!
Thing is, I don't have to use WASM for the whole thing, but could just use it for a few pieces here and there - for "*hot* game logic" (emphasis mine) as the WASM site says. [Commenter](https://news.ycombinator.com/item?id=32592021): "AssemblyScript is nice for small units of code that you might want to accelerate in a larger TypeScript project."

One reason for using WASM for the whole thing could be that it enables the game to be run outside a browser.

"The only real difference with assembly script [vs C++ and Rust] is that it's a garbage collected language [I think this means that it benefits from the feature of an automatic garbage collector?]. Otherwise, it uses llvm and the same set of optimizations you'd be getting with C++ and Rust."

# Tile maps

See 'Map and space' in game-design.md for some future ideas of functionality that I want to be possible.

Helpful from MDN:
- https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps
- https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
- https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps

Some reasons to prefer 'horizontal' orientation over 'vertical': https://gamedev.stackexchange.com/questions/49718/vertical-vs-horizontal-hex-grids-pros-and-cons
One reason for horizontal is that bees use it.
A reason for vertical over horizontal is that I think the 'skew' idea might be easier that way.
I should write the code so it's trivial to switch between these, so I can choose in the future.

## Atlas indexing

Could either use a coordinate to identify a tile, or just assign each tile a number (this is how I think square-atlases work).

```
Columns:
 0  1  2  3  4  5  6  7  8  9
 __    __    __    __    __    Rows (wiggle up and down):
/0 \__/2 \__/4 \__/6 \__/8 \__  
\__/1 \__/3 \__/5 \__/7 \__/9 \ 0
/10\__/12\__/14\__/16\__/18\__/
\__/11\__/13\__/15\__/17\__/19\ 1
/20\__/22\__/24\__/26\__/28\__/
\__/21\__/23\__/25\__/27\__/29\ 2
/  \__/  \__/  \__/  \__/  \__/ 
\__/  \__/  \__/  \__/  \__/  \ 3
/  \__/  \__/  \__/  \__/  \__/
\__/  \__/  \__/  \__/  \__/  \
```

Or, this thoughtful person recommends either the cube or the axial system: https://www.redblobgames.com/grids/hexagons/ because of their relative simplicity when it comes to algorithms that calculate neighboring tiles, distances etc. The 'cube' system imagines that each hex on the map is a corner-view of a cube.

## Should we use hex pixels, triangle pixels, or normal pixels within each tile?

Hex or tri might make extracting a tile cleanly from an atlas simpler - no need to calculate angles and stuff for finding the edge of a tile.

I would effectively be creating my own file format then... implemented as a mapping from coordinate to colour (in an analogous way to [bitmaps](https://en.wikipedia.org/wiki/Bitmap)).
