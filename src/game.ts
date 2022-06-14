
import * as PIXI from "pixi.js"
import backgroundImage from "./images/egyptebg2.png"
import wolk1Image from "./images/wolk1.png"
import wolk2Image from "./images/wolk2.png"
import wolk3Image from "./images/wolk3.png"




// import soundTrackEgypt from "url:./audio/soundtrack-ancient-egypt.mp3"

import { GAMECARD } from "./gameCard"
import { WOLKEN } from "./wolk"
import { WOLKEN2 } from "./wolk2"
import { WOLKEN3 } from "./wolk3"


class Game {

    pixi: PIXI.Application
    loader: PIXI.Loader
    gameCardes: GAMECARD
    wolk: WOLKEN
    wolk2: WOLKEN2
    wolk3: WOLKEN3



    // background variable 
    background = backgroundImage



    // Nieuwe branche


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

        graphics.beginFill(0xEE4723);
        graphics.drawRoundedRect(600, 130, 200, 210, 20);

        // (x, y, width, height, radius)
        this.pixi.stage.addChild(graphics);
        graphics.endFill()

        graphics.beginFill(0xC462A5);
        graphics.drawRoundedRect(600, 400, 200, 210, 20);

        // (x, y, width, height, radius)
        this.pixi.stage.addChild(graphics);
        graphics.endFill()

        graphics.beginFill(0x86B240);
        graphics.drawRoundedRect(300, 400, 200, 210, 20);

        // (x, y, width, height, radius)
        this.pixi.stage.addChild(graphics);
        graphics.endFill()

        let gameCardes = new GAMECARD()
        this.pixi.stage.addChild(gameCardes)
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














