import {Scene, Context, Sprite, Label} from 'dkwdpil';

export class StartScene extends Scene {
    _title: Label = new Label("Roblox Workshop", 0, 16, {fontsize: 3, horizAlign: 'center'});

    // setup
    windowsSprite: Sprite = new Sprite("windows.png", -22.5, 10, {size: 5.0});
    linuxSprite: Sprite = new Sprite("linux.png", -25, 7, {size: 5.0});
    appleSprite: Sprite = new Sprite("apple.png", -20, 7, {size: 5.0});
    _setupLabel: Label = new Label("1. Installation", -22.6, 4, {fontsize: 1.5, horizAlign: 'center'})


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
        if (this.windowsSprite.clicked) c.nextScene = "setupWindows";
        if (this.appleSprite.clicked) c.nextScene = "setupApple";
        if (this.linuxSprite.clicked) c.nextScene = "setupLinux";
    }

    duration(): number {
        return -1;
    }
}
