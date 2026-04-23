import {Context, Sprite, Label, AutoDrawScene} from 'dkwdpil';
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

export class DisappearingPlattform extends AutoDrawScene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("title", "Verschwindende Plattform", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'changeProperties');

    sprite: Sprite = new Sprite("sprite", "disappearingPartExample.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("explanation1", "Hier lassen wir eine Plattform", -26, 6, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "verschwinden und wieder auftauchen.", -26, 4, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "Du kannst wieder auf das Bild klicken,", -26, -2, {fontsize: 1.2});
    explanation4: Label = new Label("explanation4", "um den Quelltext zu kopieren.", -26, -4, {fontsize: 1.2});
    explanation5: Label = new Label("explanation5", "Für Pros: Google \"Lua while loops\",", -26, -8, {fontsize: 1.2});
    explanation6: Label = new Label("explanation6", "um das Ganze ewig fortzuführen ;)", -26, -10, {fontsize: 1.2});

    copiedTimepoint: number | null = null;

    update(c: Context) {
        super.update(c);

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
