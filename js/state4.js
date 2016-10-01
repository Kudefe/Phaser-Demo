var demo = demo || {};

demo.state4 = function() {};

demo.state4.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#c87710";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
