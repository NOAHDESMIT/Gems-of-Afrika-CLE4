import * as PIXI from 'pixi.js'
export class GAMECARD3 extends PIXI.Graphics {

    speed: number


    constructor() {

        super();

        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.cardClicked())

        this.beginFill(0xC462A5);

        // (x, y, width, height, radius)
        this.drawRoundedRect(600, 400, 200, 210, 20);



        this.endFill()
    }

    update(delta: number) {


    }

    cardClicked() {
        console.log("click!")
        this.rotation = 0
        this.tint = 0x333333;


    }

}
