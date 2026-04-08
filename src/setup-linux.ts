import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";

export class SetupLinux extends Scene {
    _icon: Sprite = new Sprite("linux.png", 10, 15, {size: 3.0, imageMode: 'center'});
    _backButton = new BackButton(-29, 15);
    title: Label;

    instruction1: Label;
    instruction2: Label;
    instruction3: Label;
    instruction4: Label;
    instruction5: Label;
    instruction6: Label;
    instruction7: Label;
    instruction8: Label;
    instruction9: Label;
    instruction10: Label;

    instructionLogin: Label;

    copyInstructionText: string | null = null;
    copyInstruction: Label | null = null;
    copyTimepoint: number = 0;

    constructor() {
        super();
        this.title = new Label("Setup Linux", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
        this.instruction1 = new Label("Terminal öffnen (Windows-Taste drücken + “Terminal” suchen)", -28, 11, {fontsize: 1.5});
        this.instruction2 = new Label("Folgende Befehle eingeben (Anklicken, um Befehl zu kopieren):", -28, 9, {fontsize: 1.5});
        this.instruction3 = new Label("sudo apt install flatpak", -25, 6, {fontsize: 1.2, color: [220, 220, 220]});
        this.instruction4 = new Label("flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo", -25, 4, {fontsize: 1.2, color: [220, 220, 220]});
        this.instruction5 = new Label("flatpak install flathub org.vinegarhq.Vinegar", -25, 2, {fontsize: 1.2, color: [220, 220, 220]});
        this.instruction6 = new Label("Bei Fragen Enter drücken", -22, 0, {fontsize: 1.2});
        this.instruction7 = new Label("flatpak run org.vinegarhq.Vinegar", -25, -2, {fontsize: 1.2, color: [220, 220, 220]});
        this.instruction8 = new Label("Fenster öffnet sich -> Auf Configure drücken", -22, -4, {fontsize: 1.2});
        this.instruction9 = new Label("Renderer auf \"Vulkan\" stellen", -22, -6, {fontsize: 1.2});
        this.instruction10 = new Label("Klicken auf Initialize, kurz warten, dann Starten", -22, -8, {fontsize: 1.2});
        this.instructionLogin = new Label("Die Login-Daten findest du in der Präsentation.", -26, -12, {fontsize: 1.2});
    }

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
    }

    update(context: Context) {
        context.background(235);

        context.fill(20);
        context.rectMode(context.CORNER);
        context.rect(-25.5, 6.5, 54, 1.8);
        context.rect(-25.5, 4.5, 54, 1.8);
        context.rect(-25.5, 2.5, 54, 1.8);
        context.rect(-25.5, -1.5, 54, 1.8);

        let cursor = "default";
        for (const instruction of [this.instruction3, this.instruction4, this.instruction5, this.instruction7]) {
            if (instruction.hovered)
                cursor = "pointer";
            if (instruction.clicked)
                copyToClipboard(instruction.text).then(() => {
                    if (this.copyInstruction === null) {
                        this.copyInstructionText = instruction.text;
                        this.copyInstruction = instruction;
                        this.copyTimepoint = context.globalTime;
                        instruction.text = "Kopiert!";
                    }
                });
        }
        context.cursor(cursor);

        if (this.copyInstruction && context.globalTime - this.copyTimepoint > 1) {
            this.copyInstruction.text = this.copyInstructionText!;
            this.copyInstructionText = null;
            this.copyInstruction = null;
        }
    }
}

async function copyToClipboard(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
