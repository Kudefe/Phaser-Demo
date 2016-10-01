var demo = demo || {};

demo.state0 = function() {};

demo.state0.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#4488AA";
        addChangeStateEventListeners();
    },
    update: function() {}
};
