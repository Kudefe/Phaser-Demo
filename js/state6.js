var demo = demo || {};

demo.state6 = function() {};

demo.state6.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#cd24de";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
