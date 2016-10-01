var demo = demo || {};

demo.state7 = function() {};

demo.state7.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#3d1c2f";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
