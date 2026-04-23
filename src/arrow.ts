import {Context, InteractiveElement, InteractiveElementDump, Sprite} from "dkwdpil";
import {Rect} from "dkwdpil/dist/element-helpers/rect";

export class Arrow extends InteractiveElement {
    sprite: Sprite;

    constructor(identifier: string, x: number, y: number, rotation: number = 0) {
        super(identifier, x, y);
        this.sprite = new Sprite(identifier + "_sprite", "arrow.png", this.x, this.y, {size: 2, rotation});
    }

    draw() {
        this.sprite.draw();
    }

    update(c: Context) {
        this.sprite.update(c);
        super.update(c);
        this.sprite.size = 2 + Math.sin(c.globalTime * Math.PI * 2 * 0.6) * 0.1;
    }

    touches(x?: number, y?: number): boolean {
        return this.sprite.touches(x, y);
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
}
