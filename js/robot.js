function InfiniteLine (len) {
    this.lineLength = len;
    this.anArray = new Array(this.lineLength);
};
InfiniteLine.prototype ={

    lineLength: 2,

    anArray: [],
    collision:false,

    setRobots: function() {

        var _num1 = _num2 = Math.floor((Math.random()*this.lineLength));
        while(_num1 === _num2){
            _num2 = Math.floor((Math.random()*this.lineLength));

        }
        this.anArray[_num1] = "robot1";
        this.anArray[_num2] = "robot2";

    },


    getPos:function(robot){
        this.robotPos = this.anArray.indexOf(robot);

        return(this.robotPos);
    },

    moveLeft: function(robot){
       var _pos = this.getPos(robot);

       if(_pos === 0){
            if(this.anArray[_pos +1] !== undefined){
                console.log("BOOM");

                this.collision = true;
            }else{
             this.anArray[_pos +1] = robot;
            this.anArray[_pos] = undefined;
            }
       }else{
            if(this.anArray[_pos -1] !== undefined){

                console.log("BOOM");
                 this.collision = true;
            }else{
            this.anArray[_pos -1] = robot;
            this.anArray[_pos] = undefined;
            }

       }
    },
     moveRight: function(robot){
       var _pos = this.getPos(robot);

       if(_pos === this.anArray.length -1){

        if(this.anArray[_pos -1] !== undefined){
                console.log("BOOM");

                this.anArray[_pos -1] ="BOOM";
            }else{
            this.anArray[_pos -1] = robot;
            this.anArray[_pos] = undefined;
            }
       }else{

        if(this.anArray[_pos +1] !== undefined){
                console.log("BOOM");
                this.anArray[_pos +1] = "BOOM";
            }else{
            this.anArray[_pos +1] = robot;

            this.anArray[_pos] = undefined;
            }
       }

    }
}


line = new InfiniteLine(10);

line.setRobots();




while(line.collision !== true){
    console.log(line.anArray);

    line.moveRight("robot1");
     line.moveLeft("robot2");

}