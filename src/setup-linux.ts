import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";

export class SetupLinux extends Scene {
    _icon: Sprite = new Sprite("linux.png", 10, 15, {size: 3.0, imageMode: 'center'});
    _backButton = new BackButton(-29, 15);
    title: Label;

    constructor() {
        super();
        this.title = new Label("Setup Linux", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
    }

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
    }

    update(context: Context) {
        context.background(235);
    }
}
