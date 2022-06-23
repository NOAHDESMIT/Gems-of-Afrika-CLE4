
import * as PIXI from "pixi.js"
import backgroundImage from "./images/egyptebg2.png"
import wolk1Image from "./images/wolk1.png"
import wolk2Image from "./images/wolk2.png"
import wolk3Image from "./images/wolk3.png"


// import soundTrackEgypt from "url:./audio/soundtrack-ancient-egypt.mp3"

import { GAMECARD } from "./gameCard"
import { GAMECARD2 } from "./gameCard2"
import { GAMECARD3 } from "./gameCard3"
import { GAMECARD4 } from "./gameCard4"


import { WOLKEN } from "./wolk"
import { WOLKEN2 } from "./wolk2"
import { WOLKEN3 } from "./wolk3"



class Game {

    private pixi: PIXI.Application
    public loader: PIXI.Loader
    public gameCardes: GAMECARD
    public gameCardes2: GAMECARD2
    public gameCardes3: GAMECARD3
    public gameCardes4: GAMECARD4


    private wolk: WOLKEN
    private wolk2: WOLKEN2
    private wolk3: WOLKEN3

    round: number = 0;
    index: number = 0;
    steps: Array<string> = [];
    buttons: Array<string> = ["gameCardes", "gameCardes2", "gameCardes3", "gameCardes4"];





    // background variable 
    background = backgroundImage






    constructor() {
        //  ipad resolutie 
        this.pixi = new PIXI.Application({ width: 1112, height: 834 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()
        this.loader
            // objecten toevoegen 
            .add("backgroundTexture", backgroundImage)
            .add('wolkTexture', wolk1Image)
            .add('wolk2Texture', wolk2Image)
            .add('wolk3Texture', wolk3Image)
        // .add('egypteBgAudio', soundTrackEgypt)
        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")
        // Add background to screen 
        this.background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!)
        this.pixi.stage.addChild(this.background)

        // animated clouds 
        // wolk 1  class call
        this.wolk = new WOLKEN(this.loader.resources["wolkTexture"].texture!)
        this.pixi.stage.addChild(this.wolk)

        // wolk2 class call
        this.wolk2 = new WOLKEN2(this.loader.resources["wolk2Texture"].texture!)
        this.pixi.stage.addChild(this.wolk2)

        // wolk3 class call
        this.wolk3 = new WOLKEN3(this.loader.resources["wolk3Texture"].texture!)
        this.pixi.stage.addChild(this.wolk3)


        // let soundtrack = this.loader.resources["egypteBgAudio"].data!
        // soundtrack.play()

        // rectangle call
        var graphics = new PIXI.Graphics();







        let gameCardes = new GAMECARD()
        this.pixi.stage.addChild(gameCardes)

        let gameCardes2 = new GAMECARD2()
        this.pixi.stage.addChild(gameCardes2)

        let gameCardes3 = new GAMECARD3()
        this.pixi.stage.addChild(gameCardes3)

        let gameCardes4 = new GAMECARD4()
        this.pixi.stage.addChild(gameCardes4)


        this.pixi.ticker.add((delta) => this.updateTheStage(delta))
    }
    updateTheStage(delta: number) {
        // calling animated cloud 
        this.wolk.update(delta)
        this.wolk2.update(delta)
        this.wolk3.update(delta)




    }
}

new Game()





  // simon says voorbeeld














