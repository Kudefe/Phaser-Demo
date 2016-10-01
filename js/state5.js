var demo = demo || {};

demo.state5 = function() {};

demo.state5.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#8124de";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
