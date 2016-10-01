var demo = demo || {};

demo.state3 = function() {};

demo.state3.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#458B00";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
