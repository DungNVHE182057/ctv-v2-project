(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Level2a",
{ "compressionlevel":-1,
 "height":9,
 "infinite":false,
 "layers":[
        {
         "data":[41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
         "height":9,
         "id":2,
         "name":"Bg",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[296, 294, 294, 294, 294, 294, 297, 0, 41, 41, 41, 41, 41, 41, 41, 41,
            295, 300, 300, 300, 300, 300, 295, 0, 41, 41, 41, 41, 41, 41, 41, 41,
            295, 300, 300, 300, 300, 300, 295, 0, 0, 0, 0, 0, 0, 0, 0, 41,
            303, 294, 294, 297, 300, 300, 295, 0, 0, 0, 0, 0, 0, 0, 0, 41,
            41, 0, 0, 295, 300, 300, 295, 0, 0, 296, 294, 294, 294, 294, 297, 0,
            41, 296, 294, 304, 300, 300, 303, 294, 294, 304, 300, 311, 311, 311, 295, 0,
            41, 295, 300, 300, 300, 300, 300, 300, 300, 300, 300, 311, 311, 311, 295, 0,
            41, 295, 300, 300, 300, 300, 300, 300, 300, 300, 300, 296, 294, 294, 304, 41,
            41, 303, 294, 294, 294, 294, 294, 294, 294, 294, 294, 304, 0, 0, 41, 41],
         "height":9,
         "id":1,
         "name":"Tiles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0,
            0, 292, 292, 292, 0, 0, 292, 292, 292, 292, 0, 292, 292, 292, 292, 0,
            0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 0,
            0, 292, 0, 292, 292, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 0,
            0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0],
         "height":9,
         "id":4,
         "name":"Collisions",
         "opacity":0.22,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":3,
         "name":"Boxes and Door",
         "objects":[],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 308, 309, 308, 309, 308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 300, 300, 0, 0, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2147483973, 0, 0, 0, 0,
            0, 0, 300, 0, 300, 300, 300, 300, 300, 300, 0, 2147483973, 0, 0, 0, 0,
            0, 0, 300, 323, 322, 300, 300, 300, 300, 300, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":5,
         "name":"Decorations",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":11,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/Assets\/Chris Courses - Multiroom Platformer\/tiled\/tilesets\/Main.tsx"
        }, 
        {
         "firstgid":248,
         "source":"..\/..\/..\/Assets\/Chris Courses - Multiroom Platformer\/tiled\/tilesets\/Decorations.tsx"
        }, 
        {
         "firstgid":290,
         "source":"..\/..\/..\/Assets\/Chris Courses - Multiroom Platformer\/tiled\/tilesets\/Misc.tsx"
        }, 
        {
         "firstgid":293,
         "source":"..\/..\/..\/Mapping\/Pillar.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.9",
 "width":16
});