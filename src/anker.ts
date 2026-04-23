import {Label, AutoDrawScene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class Anker extends AutoDrawScene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("title", "Blöcke verankern", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("uiImage", "menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow("arrow1", 13.9, 5.2, -Math.PI / 2);

    navButtonLeft: NavButton = new NavButton('left', 'movement');
    navButtonRight: NavButton = new NavButton('right', 'tasks1');

    explanation1: Label = new Label("exaplanation1", "Normalerweise fallen Blöcke automatisch runter.", -26, 0, {fontsize: 1.2});
    explanation2: Label = new Label("exaplanation2", "Um das zu verhindern, können wir Blöcke verankern.", -24, -2, {fontsize: 1.2});
}
