// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003070707070707070707070707070701080909080908090809090809090909060809090809080908090908090909090608090908090809080909090809090906080909080808090809090908080809060809090909090909090909090909090608090808080809090909090909090906080909090908080809090808090908060809090909090809090908090908090608090909080908080809080909080906080909090809090908090809090809060809090808090909080908090908090608090908090908080808080908080906080909080909080909090909080909060809090809090909090909090809090604050505050505050505050505050502`, img`
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
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorLight0], TileScale.Sixteen);
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
