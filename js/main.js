var demo = demo || {};

demo.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

demo.game.state.add('state0', demo.state0);
demo.game.state.add('state1', demo.state1);
demo.game.state.add('state2', demo.state2);
demo.game.state.add('state3', demo.state3);
demo.game.state.add('state4', demo.state4);
demo.game.state.add('state5', demo.state5);
demo.game.state.add('state6', demo.state6);
demo.game.state.add('state7', demo.state7);
demo.game.state.add('state8', demo.state8);
demo.game.state.add('state9', demo.state9);



demo.game.state.start('state0');
