// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000102020c02020203020202020c020203050a0a0a0a0a0a040a0a0a0a0a0a0a040b0a0a0a0e0a0a040a0a0a0a0e0a0a0c050a0a0a0a0a0a040a0a0a0a0a0a0a04050a0a0a0a0a0a040a0a0a0707070708050a0a07070707080a0e0a0a0a0a0a04050a0a0a0a0a0a090a0a0a0a0a0a0a04050a0e0a0a0e0a090a0a0a0a0a0a0a0c0c0a0a0a0a0a0a090a0a0a0707070708050a0a0a0a0a0a0a0a0a0a0a0a0a0a04050a0a0a0a090a0a0a0a040a0a0a0a04050a0a0a0a090a0a0e0a040a0a0e0a0c050a0e0a0a090a0a0a0a040a0a0a0a040c0a0a0a0a090a0e0a0a040a0a0a0a04050a0a0a0a090a0a0a0a040a0a0a0a04060707070708070707070807070d0708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . . . . . . . 2 
. . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . 2 2 2 2 2 
2 . . 2 2 2 2 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorLight2,sprites.dungeon.stairWest,sprites.dungeon.greenOuterNorth2,sprites.dungeon.stairLadder,sprites.dungeon.floorLight3], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
