import {Context, InteractiveElement, Sprite} from "dkwdpil";

export class BackButton implements InteractiveElement {
    _interactiveElementMarker: "interactiveElement" = "interactiveElement";

    x: number;
    y: number;
    target: string;

    visible: boolean = true;

    sprite: Sprite;

    constructor(x: number, y: number, target: string = "startScene") {
        this.x = x;
        this.y = y;
        this.target = target;
        this.sprite = new Sprite("back_button.png", this.x, this.y, {size: 2});
    }


    draw(c: Context) {
        this.sprite.draw(c);
    }

    update(c: Context) {
        this.sprite.update(c);
        if (this.sprite.clicked)
            c.nextScene = this.target;
    }
}
