import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";

export class SetupWinAppleScene extends Scene {
    icon: Sprite;
    _backButton = new BackButton(-29, 15);
    title: Label;
    instruction1: Label;
    instruction2: Label;
    instruction3: Label;

    constructor(icon: string) {
        super();
        this.icon = new Sprite(icon + ".png", 12, 15, {size: 3.0, imageMode: 'center'});
        this.title = new Label("Setup " + icon.charAt(0).toUpperCase() + icon.slice(1), 0, 16, {fontsize: 2.5, horizAlign: 'center'});
        this.instruction1 = new Label("Öffne ", -28, 3, {fontsize: 1.5});
        this.instruction2 = new Label("https://create.roblox.com/docs/studio/setup", -28, 0, {fontsize: 1.5});
        this.instruction3 = new Label("und folge den Anweisungen.", -28, -3, {fontsize: 1.5});
    }

    update(context: Context) {
        context.background(235);

        if (this.instruction2.hovered) {
            context.cursor("pointer");
        } else {
            context.cursor("default");
        }
        if (this.instruction2.clicked)
            window.open("https://create.roblox.com/docs/studio/setup", '_blank', 'noopener,noreferrer');
    }
}
