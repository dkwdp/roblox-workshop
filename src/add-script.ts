import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class AddScript extends AutoDrawScene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("add_script_label", "Script hinzufügen", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonRight: NavButton = new NavButton('right', 'printing');

    sprite: Sprite = new Sprite("add_script_sprite", "addScript.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("explanation1", "Um ein Script hinzuzufügen:", -28, -2, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "Im Explorer neben \"Workspace\" auf + drücken.", -28, -4, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "Dann \"Script\" auswählen.", -28, -6, {fontsize: 1.2});
}
