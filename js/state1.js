var demo = demo || {};

demo.state1 = function() {};

demo.state1.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#fb6904";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
