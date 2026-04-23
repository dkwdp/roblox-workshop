import {Label, AutoDrawScene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class Movement extends AutoDrawScene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("title", "Blöcke platzieren", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("sprite", "menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow("arrow", -23, 5, -Math.PI / 2);

    navButton: NavButton = new NavButton('right', 'anker');

    explanation1: Label = new Label("explanation1", "Mit diesen Werkzeugen können Blöcke verändert werden.", -26, 0, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "Move: Blöcke bewegen", -24, -2, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "Scale: Blöcke größer / kleiner machen", -24, -4, {fontsize: 1.2});
    explanation4: Label = new Label("explanation4", "Rotate: Blöcke drehen", -24, -6, {fontsize: 1.2});
    explanation5: Label = new Label("explanation5", "Transform: Alles zusammen", -24, -8, {fontsize: 1.2});
}
