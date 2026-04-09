import {Scene, Context, Sprite, Label} from 'dkwdpil';

export class StartScene extends Scene {
    _title: Label = new Label("Roblox Workshop", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    // setup
    windowsSprite: Sprite = new Sprite("windows.png", -22.5, 8.5, {size: 5.0});
    linuxSprite: Sprite = new Sprite("linux.png", -25, 5.5, {size: 5.0});
    appleSprite: Sprite = new Sprite("apple.png", -20, 5.5, {size: 5.0});
    setupLabel: Label = new Label("1. Installation", -22.6, 1, {fontsize: 1.5, horizAlign: 'center'})

    // getting started
    gettingStarted: Sprite = new Sprite("baseplate.png", 0, 7, {size: 10.0});
    gettingStartedLabel: Label = new Label("2. Erste Schritte", 0, 1, {fontsize: 1.5, horizAlign: 'center'})

    // movement
    movement: Sprite = new Sprite("movement.png", 22.5, 7, {size: 10.0});
    movementLabel: Label = new Label("3. Platzieren", 22.5, 1, {fontsize: 1.5, horizAlign: 'center'})

    // attributes
    attributes: Sprite = new Sprite("attributes.png", -22.5, -8, {size: 10.0});
    attributesLabel: Label = new Label("4. Eigenschaften", -22.5, -14, {fontsize: 1.5, horizAlign: 'center'})

    init(context: Context): void {
        context.imageMode(context.CENTER);
        context.noStroke();
        context.fill(0);
    }

    update(c: Context) {
        c.background(235);

        for (const sprite of [this.windowsSprite, this.linuxSprite, this.appleSprite]) {
            if (sprite.touches(c.mousePos.x, c.mousePos.y, c)) {
                sprite.size = 5.2;
            } else {
                sprite.size = 5.0;
            }
        }
        for (const sprite of [this.gettingStarted, this.movement, this.attributes]) {
            if (sprite.touches(c.mousePos.x, c.mousePos.y, c)) {
                sprite.size = 10.2;
            } else {
                sprite.size = 10.0;
            }
        }
        if (this.windowsSprite.clicked) c.nextScene = "setupWindows";
        if (this.appleSprite.clicked) c.nextScene = "setupApple";
        if (this.linuxSprite.clicked) c.nextScene = "setupLinux";

        if (this.gettingStarted.clicked) c.nextScene = "gettingStarted";

        if (this.movement.clicked) c.nextScene = "movement";

        if (this.attributes.clicked) c.nextScene = "attributes";
    }
}
