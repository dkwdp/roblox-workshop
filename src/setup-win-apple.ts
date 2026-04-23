import {Context, Label, AutoDrawScene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";

export class SetupWinAppleScene extends AutoDrawScene {
    _backButton = new BackButton(-29, 15);
    title: Label;
    icon: Sprite;
    instruction1: Label = new Label("instruction1", "Öffne ", -28, 3, {fontsize: 1.5});
    instruction2: Label = new Label("instruction2", "https://create.roblox.com/docs/studio/setup", -28, 0, {fontsize: 1.5});
    instruction3: Label = new Label("instruction3", "und folge den Anweisungen.", -28, -3, {fontsize: 1.5});

    constructor(icon: string) {
        super();
        this.title = new Label("title", "Setup " + icon.charAt(0).toUpperCase() + icon.slice(1), 0, 16, {fontsize: 2.5, horizAlign: 'center'});
        this.icon = new Sprite("icon", icon + ".png", 12, 15, {size: 3.0, imageMode: 'center'});
    }

    update(context: Context) {
        super.update(context);
        if (this.instruction2.hovered) {
            context.cursor("pointer");
        } else {
            context.cursor("default");
        }
        if (this.instruction2.clicked)
            window.open("https://create.roblox.com/docs/studio/setup", '_blank', 'noopener,noreferrer');
    }
}
