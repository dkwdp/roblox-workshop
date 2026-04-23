import {Label, AutoDrawScene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class PlacePart extends AutoDrawScene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("title", "Teile platzieren", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("sprite", "menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow("arrow", -9.8, 6.8, -Math.PI / 4);

    navButtonLeft: NavButton = new NavButton('left', 'camera');
    navButtonRight: NavButton = new NavButton('right', 'runGame');
}
