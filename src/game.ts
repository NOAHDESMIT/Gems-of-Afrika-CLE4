
import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import backgroundImage from "./images/background.png"
import bubblesImage from "./images/bubble.png"
import { Fish } from "./fish"
import { Bubble} from "./bubble"


class Game {

    pixi: PIXI.Application
    loader: PIXI.Loader
    fishes: Fish[] = []
    bubbles: Bubble[] = []

// KAAAAAS
   
    background = backgroundImage
    





 




    constructor() {


        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)



        this.loader = new PIXI.Loader()
        this.loader
        .add("backgroundTexture", backgroundImage)
        .add('fishTexture', fishImage)
        .add('bubbleTexture', bubblesImage)
        




        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")

        this.background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!)
        this.pixi.stage.addChild(this.background)


        


        for (let i = 0; i < 50; i++) {
            let lonelyFish = new Fish(this.loader.resources["fishTexture"].texture!)
            this.pixi.stage.addChild(lonelyFish)
            this.fishes.push(lonelyFish)

            let manyBubbles = new Bubble(this.loader.resources["bubbleTexture"].texture!)
            this.pixi.stage.addChild(manyBubbles)
            this.bubbles.push(manyBubbles)

        }


        






    this.pixi.ticker.add((delta) => this.updateTheStage(delta))

    }

    updateTheStage(delta: number) {

        
        console.log(`Dit is de Game Loop!`)
        for(let myfish of this.fishes){
            myfish.swim()
        }

    }
}

new Game()
