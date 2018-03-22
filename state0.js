var demo = {};
demo.state0 = function(){}
demo.state0.prototype = {
    preload: function(){},
    create:function(){
        game.stage.backgroundColor ='#dddd00';
        console.log('state0');
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState,null,null,1);
        
        addKeyCallback(Phaser.keyboard.ZERO,changeState,0);
    },
    update:function(){}
}
function changeState(i,stateNum){
    console.log(i);
    game.state.start('state'+ stateNum);
}
function addKeyCallback(key,fn,args){
     game.input.keyborad.addKey(key).onDown.add(fn,null,null,args);
    
}