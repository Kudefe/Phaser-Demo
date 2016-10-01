var demo = demo || {};

demo.state8 = function() {};

demo.state8.prototype = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = "#61643c";
        addChangeStateEventListeners();
    },
    update: function() {

    }
};
