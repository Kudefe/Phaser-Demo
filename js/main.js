
var demo = demo || {};

demo.game = new Phaser.Game(600, 400, Phaser.AUTO);


demo.game.state.add('state1', demo.state1);




demo.game.state.start('state1');
