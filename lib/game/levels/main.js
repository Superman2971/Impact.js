ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.paddle-cpu','game.entities.paddle-player','game.entities.puck' )
.defines(function(){
LevelMain=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPaddleCpu",
			"x": 16,
			"y": 176
		},
		{
			"type": "EntityPaddlePlayer",
			"x": 688,
			"y": 176
		},
		{
			"type": "EntityPuck",
			"x": 360,
			"y": 212
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "main",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tileset.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
				[4,4,5,5,5,5,5,5,5,5,5,5,5,5,4,4],
				[6,6,5,1,3,3,3,1,3,3,3,1,5,5,2,2],
				[6,6,5,5,5,3,3,3,3,5,5,3,3,5,2,2],
				[6,6,3,3,3,5,5,1,5,3,3,3,3,3,2,2],
				[6,6,3,1,3,3,3,5,5,5,5,1,5,3,2,2],
				[6,6,5,3,3,3,3,3,1,1,5,5,3,5,2,2],
				[6,6,5,1,3,3,3,1,3,3,3,1,3,5,2,2],
				[4,4,5,5,5,5,5,5,5,5,5,5,5,5,4,4],
				[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
			]
		}
	]
}/*]JSON*/;
LevelMainResources=[new ig.Image('media/tileset.png')];
});