function Person (){};

Person.prototype = {

    organic:true,
    species:"human",
    abilities:{
        breed:true,
        repair:false,
        employable:true

    },
    occupation:"Unemployed",
    speak:function(){

     this.makeLine();
     this.saySpecies();
     this.showAbilities();
     this.sayEmployment();
     this.makeLine();

    },
    saySpecies: function(){
        console.log("I am a " + this.species);
    },
    showAbilities:function(){

        for (var key in this.abilities) {
            if (this.abilities.hasOwnProperty(key)) {

                console.log(key + " -> " + this.abilities[key]);
            }
        }
    },
    sayEmployment:function(){
        console.log("My Current occupation is: " + this.occupation);

    },
    makeLine: function(){
        console.log("------------------------------------------");
    }
}

person = new Person();
person.speak();

function Android () {
    this.species = "android";

    this.abilities.breed = false;
    this.abilities.repair = true;
    this.abilities.employable = false;
    this.damaged = true;

    this.repair = function () {
        console.log("I am being fixed");

        this.damaged = false;
    }

    this.currentState = function(){
        var _currentState = this.damaged ? "damaged" : "repaired";
        console.log("I am " + _currentState);

    }

}

Android.prototype = new Person();

android = new Android();
android.speak();
android.currentState();
android.repair();
android.currentState();


function Doctor(){

    this.occupation = "Doctor";
}

Doctor.prototype = new Person();


doctor = new Doctor();

doctor.speak();
