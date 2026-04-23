import {Context, InteractiveElement, InteractiveElementDump, Sprite} from "dkwdpil";
import {Rect} from "dkwdpil/dist/element-helpers/rect";

export class BackButton extends InteractiveElement {
    target: string;
    sprite: Sprite;

    constructor(x: number, y: number, target: string = "startScene") {
        super("back_button", x, y);
        this.target = target;
        this.sprite = new Sprite("back_button_sprite", "back_button.png", x, y, {size: 2});
    }

    getBoundingBox(): Rect {
        return this.sprite.getBoundingBox();
    }

    dump(): InteractiveElementDump {
        throw new Error("Method not implemented.");
    }

    getSourceCode(): string {
        throw new Error("Method not implemented.");
    }

    load(data: InteractiveElementDump): void {
        throw new Error("Method not implemented.");
    }


    draw() {
        this.sprite.draw();
    }

    update(c: Context) {
        this.sprite.update(c);
        if (this.sprite.clicked)
            c.nextScene = this.target;
    }
}
