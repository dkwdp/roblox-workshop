import {AutoDrawScene, Label, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class Attributes extends AutoDrawScene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("title", "Eigenschaften", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("uiImage", "menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow("arrow1", 19, 5, -Math.PI / 2);

    navButton: NavButton = new NavButton('right', 'tasks2');

    explanation1: Label = new Label("explanation1", "Klickt man rechts auf \"Properties\" können Eigenschaften der Blöcke verändert werden.", -26, 0, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "Einige lustige Eigenschaften:", -26, -2, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "BrickColor: Die Farbe des Blockes", -24, -4, {fontsize: 1.2});
    explanation4: Label = new Label("explanation4", "Material: Das Material des Blockes", -24, -6, {fontsize: 1.2});
    explanation5: Label = new Label("explanation5", "Transparency: Wie Durchsichtig der Block ist", -24, -8, {fontsize: 1.2});
    explanation6: Label = new Label("explanation6", "CanCollide: Spieler kann mit Block kollidieren", -24, -10, {fontsize: 1.2});
}
