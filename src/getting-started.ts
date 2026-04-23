import {Label, AutoDrawScene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class GettingStarted extends AutoDrawScene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("title", "Loslegen!", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("sprite", "home.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow("arrow", -14, 0, Math.PI * 3 / 4);

    navButton: NavButton = new NavButton('right', 'camera');
}
