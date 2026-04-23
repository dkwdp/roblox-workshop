import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";

export class StartScene extends AutoDrawScene {
    _title: Label = new Label("title", "Roblox Workshop", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
    navButton: NavButton = new NavButton('right', 'startScripting');

    // setup
    windowsSprite: Sprite = new Sprite("spriteWindows", "windows.png", -20.5, 8.5, {size: 5.0});
    linuxSprite: Sprite = new Sprite("spriteLinux", "linux.png", -23, 5.5, {size: 5.0});
    appleSprite: Sprite = new Sprite("spriteApply", "apple.png", -18, 5.5, {size: 5.0});
    setupLabel: Label = new Label("setupLabel", "1. Installation", -21.6, 1, {fontsize: 1.5, horizAlign: 'center'})

    // getting started
    gettingStarted: Sprite = new Sprite("gettingStartedSprite", "baseplate.png", 0, 7, {size: 10.0});
    gettingStartedLabel: Label = new Label("gettingStartedLabel", "2. Erste Schritte", 0, 1, {fontsize: 1.5, horizAlign: 'center'})

    // movement
    movement: Sprite = new Sprite("movementSprite", "movement.png", 20, 7, {size: 10.0});
    movementLabel: Label = new Label("movementLabel", "3. Platzieren", 20, 1, {fontsize: 1.5, horizAlign: 'center'})

    // attributes
    attributes: Sprite = new Sprite("attributesSprite", "attributes.png", -10, -8, {size: 10.0});
    attributesLabel: Label = new Label("attributesLabel", "4. Eigenschaften", -10, -14, {fontsize: 1.5, horizAlign: 'center'})

    // terrain
    terrain: Sprite = new Sprite("terrainSprite", "terrain.png", 10, -8, {size: 10.0});
    terrainLabel: Label = new Label("terrainLabel", "4. Terrain", 10, -14, {fontsize: 1.5, horizAlign: 'center'})

    init(context: Context): void {
        super.init(context);
        context.imageMode(context.CENTER);
        context.noStroke();
        context.fill(0);
        this.navButton.init(context);
    }

    update(c: Context) {
        for (const sprite of [this.windowsSprite, this.linuxSprite, this.appleSprite]) {
            if (sprite.hovered) {
                sprite.size = 5.2;
            } else {
                sprite.size = 5.0;
            }
        }
        for (const sprite of [this.gettingStarted, this.movement, this.attributes, this.terrain]) {
            if (sprite.hovered) {
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

        if (this.terrain.clicked) c.nextScene = "terrain1";
    }
}
