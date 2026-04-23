import {Context, Label, AutoDrawScene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {NavButton} from "./nav-button";

export class Camera extends AutoDrawScene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("title", "Kamera bewegen", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("uiImage", "menu.png", 0, -2, {size: 28.0});

    navButtonLeft: NavButton = new NavButton('left', 'gettingStarted');
    navButtonRight: NavButton = new NavButton('right', 'placePart');

    explanation1: Label = new Label("explanation1", "Kamera drehen: Rechts-Klick + Maus bewegen.", -26, -2, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "Kamera bewegen: WASD", -26, -4, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "Nach unten / oben: Q / E", -26, -6, {fontsize: 1.2});
    explanation4: Label = new Label("explanation4", "Schnell bewegen: Mausrad scrollen", -26, -8, {fontsize: 1.2});
}
