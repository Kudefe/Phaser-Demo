var demo = demo || {};

demo.state9 = function() {};

demo.state9.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#d9eadc";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
