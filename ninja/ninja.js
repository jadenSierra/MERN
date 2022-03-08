class Ninja {

    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake(){
        this.health += 10;
    }
}

const ninja = new Ninja("Naruto",100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();