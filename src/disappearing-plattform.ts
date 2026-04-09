import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";
import {copyToClipboard} from "./printing";

const COPY_TEXT = `wait(2)
game.Workspace.Part.Transparency = 0
wait(2)
game.Workspace.Part.Transparency = 1
wait(2)
game.Workspace.Part.Transparency = 0
wait(2)
game.Workspace.Part.Transparency = 1
`

export class DisappearingPlattform extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Verschwindende Plattform", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'changeProperties');

    sprite: Sprite = new Sprite("disappearingPartExample.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("Hier lassen wir eine Plattform", -26, 6, {fontsize: 1.2});
    explanation2: Label = new Label("verschwinden und wieder auftauchen.", -26, 4, {fontsize: 1.2});
    explanation3: Label = new Label("Du kannst wieder auf das Bild klicken,", -26, -2, {fontsize: 1.2});
    explanation4: Label = new Label("um den Quelltext zu kopieren.", -26, -4, {fontsize: 1.2});
    explanation5: Label = new Label("Für Pros: Google \"Lua while loops\",", -26, -8, {fontsize: 1.2});
    explanation6: Label = new Label("um das Ganze ewig fortzuführen ;)", -26, -10, {fontsize: 1.2});

    copiedTimepoint: number | null = null;

    init(context: Context): void {
        this.navButtonLeft.init(context);
    }

    update(c: Context) {
        c.background(235);

        if (this.sprite.clicked) {
            copyToClipboard(COPY_TEXT).then(() => {
                this.explanation3.text = "Kopiert!";
                this.explanation4.visible = false;
                this.copiedTimepoint = c.globalTime;
            })
        }

        if (this.copiedTimepoint !== null && c.globalTime - this.copiedTimepoint > 1) {
            this.copiedTimepoint = null;
            this.explanation3.text = "Du kannst wieder auf das Bild klicken,";
            this.explanation4.visible = true;
        }
    }
}
