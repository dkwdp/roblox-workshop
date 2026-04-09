import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class ChangeProperties extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Eigenschaften ändern", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'referenceObjects');
    navButtonRight: NavButton = new NavButton('right', 'disappearingPlattform');

    sprite: Sprite = new Sprite("exampleChangeAttribute.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("Das können wir auch verwenden, um", -26, 6, {fontsize: 1.2});
    explanation2: Label = new Label("Objekte zu manipulieren.", -26, 4, {fontsize: 1.2});
    explanation3: Label = new Label("In diesem Beispiel verändern wir", -26, 0, {fontsize: 1.2});
    explanation4: Label = new Label("die Transparenz des Objektes.", -26, -2, {fontsize: 1.2});

    init(context: Context): void {
        this.navButtonLeft.init(context);
        this.navButtonRight.init(context);
    }

    update(c: Context) {
        c.background(235);
    }
}
