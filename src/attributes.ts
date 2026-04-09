import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class Attributes extends Scene {
    _backButton = new BackButton(-29, 15);
    title: Label;

    uiImage: Sprite = new Sprite("menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow(19, 5, -Math.PI / 2);

    navButton: NavButton = new NavButton('right', 'tasks2');

    explanation1: Label = new Label("Klickt man rechts auf \"Properties\" können Eigenschaften der Blöcke verändert werden.", -26, 0, {fontsize: 1.2});
    explanation2: Label = new Label("Einige lustige Eigenschaften:", -26, -2, {fontsize: 1.2});
    explanation3: Label = new Label("BrickColor: Die Farbe des Blockes", -24, -4, {fontsize: 1.2});
    explanation4: Label = new Label("Material: Das Material des Blockes", -24, -6, {fontsize: 1.2});
    explanation5: Label = new Label("Transparency: Wie Durchsichtig der Block ist", -24, -8, {fontsize: 1.2});
    explanation6: Label = new Label("CanCollide: Spieler kann mit Block kollidieren", -24, -10, {fontsize: 1.2});

    constructor() {
        super();
        this.title = new Label("Eigenschaften", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
    }

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        this.navButton.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
