class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost ,power, res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        target.res -= this.power;
    }

    showStats(){
        console.log(`${this.power} ${this.res}`);
    }

}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
            super(name,cost)
            this.text = text;
            this.stat = stat;
            this.magnitude = magnitude;
    }

    play(target){
        if( target instanceof Unit){
            if(this.stat == "res"){
                target.res += this.magnitude;
            } else if (this.stat == "power"){
                target.power += this.magnitude;
            }
        } else {
            throw new Error ("Target must be a unit!")
        }
    }
}

const redNinja = new Unit("Red Belt Ninja", 3 , 3, 4);
const blackNinja = new Unit("Black Belt Ninja", 4 , 5, 4);


const hardAlgo = new Effect("Hard Algorithm", 2 , "Increases target's resilience by 3", "res" , 3);
const promiseRej = new Effect("Unhandled Promise Rejection", 1 , "reduces target's resilience by 2", "res" , -2);
const pairProgram = new Effect("Pair Programing", 1 , "Increases target's power by 2", "power" , 2);

redNinja.showStats();
hardAlgo.play(redNinja);
redNinja.showStats();
promiseRej.play(redNinja);
redNinja.showStats();
pairProgram.play(redNinja);
redNinja.showStats();
redNinja.attack(blackNinja);
redNinja.showStats();
blackNinja.showStats();