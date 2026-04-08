import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";

export class SetupWinAppleScene extends Scene {
    icon: Sprite;
    _backButton = new BackButton(-29, 15);
    title: Label;

    constructor(icon: string) {
        super();
        this.icon = new Sprite(icon + ".png", 12, 15, {size: 3.0, imageMode: 'center'});
        this.title = new Label("Setup " + icon.charAt(0).toUpperCase() + icon.slice(1), 0, 16, {fontsize: 2.5, horizAlign: 'center'});
    }

    update(context: Context) {
        context.background(235);
    }
}
