import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";

export class StartSceneScripting extends Scene {
    _title: Label = new Label("Roblox Workshop", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
    navButton: NavButton = new NavButton('left', 'startScene');

    // scripting
    scripting: Sprite = new Sprite("helloWorld.png", -11, 7, {size: 10.0});
    scriptingLabel: Label = new Label("1. Scripten", -11, 1, {fontsize: 1.5, horizAlign: 'center'})

    // changing objects
    changingObjects: Sprite = new Sprite("properties.png", 11, 7, {size: 10.0});
    changingObjectsLabel: Label = new Label("2. Objekte ändern", 11, 1, {fontsize: 1.5, horizAlign: 'center'})

    // events
    events: Sprite = new Sprite("events.png", 0, -8, {size: 10.0});
    eventsLabel: Label = new Label("3. Events", 0, -14, {fontsize: 1.5, horizAlign: 'center'})

    init(context: Context): void {
        context.imageMode(context.CENTER);
        context.noStroke();
        context.fill(0);

        this.navButton.init(context);
    }

    update(c: Context) {
        c.background(235);

        for (const sprite of [this.events, this.scripting, this.changingObjects]) {
            if (sprite.touches(c.mousePos.x, c.mousePos.y, c)) {
                sprite.size = 10.2;
            } else {
                sprite.size = 10.0;
            }
        }
        if (this.scripting.clicked) c.nextScene = "addScript";
        if (this.changingObjects.clicked) c.nextScene = "referenceObjects";
        if (this.events.clicked) c.nextScene = "events";

    }
}
