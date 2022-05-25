import * as PIXI from 'pixi.js'
export class Fish extends PIXI.Sprite {

    speed: number

    constructor(texture: PIXI.Texture) {
        super(texture)

        this.speed = Math.random() * 3
        console.log("I am a cool fish")
        this.x = Math.random() * 800
        this.y = Math.random() * 500
        this.anchor.set(0.5)
        this.tint = ((Math.random() * 0.001) + 0.999) * 0xFFFFFF;
        this.scale.set(0.4 + (Math.random() * 0.6))

        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.fishClicked())

    }




    update(delta:number) {
        this.rotation += 0.01
        
    

    }



    fishClicked() {
        console.log("click!")
        this.rotation = 0

        


    }

    swim() {

        this.x -= this.speed


        // TODO IF STATEMENT CHECK X POSITIE
        // console.log(this.x)

        if (this.x <= 15) {

            this.x = 800

        }

    }
}
