# MDN guide to web game development

https://developer.mozilla.org/en-US/docs/Games/Introduction

Use the [Full-Screen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) to go full screen

Use Scalable Vector Graphics (svg) so the graphics can scale smoothly

# WebAssembly? (WASM)

Could use this easily if I use AssemblyScript which compiles to WASM but looks like TS.

One difference between JS/TS and WASM is that JS is compiled while it's executed ('just-in-time' compilation) and WASM is compiled at compile-time.

I'm attracted to WASM because of potential performance improvements, but not sure how those would be achieved without me actually optimizing code at a low-level myself (so I'd have to learn about low-level things). Unless a lot of the performance improvement comes from doing the compilation ahead of time. [This commenter](https://news.ycombinator.com/item?id=32595102) suggests that one benefit, even when WASM doesn't improve performance, is that the performance is predictable, less variable.

Thing is, I don't have to use WASM for the whole thing, but could just use it for a few pieces here and there - for "*hot* game logic" (emphasis mine) as the WASM site says. [Commenter](https://news.ycombinator.com/item?id=32592021): "AssemblyScript is nice for small units of code that you might want to accelerate in a larger TypeScript project."

One reason for using WASM for the whole thing could be that it enables the game to be run outside a browser.

"The only real difference with assembly script [vs TS] is that it's a garbage collected language. Otherwise, it uses llvm and the same set of optimizations you'd be getting with C++ and Rust."
