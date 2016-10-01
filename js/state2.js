var demo = demo || {};

demo.state2 = function() {};

demo.state2.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#856363";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
