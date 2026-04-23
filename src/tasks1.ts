import {Label, AutoDrawScene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {NavButton} from "./nav-button";

export class Tasks1 extends AutoDrawScene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("title", "Zeit zum Arbeiten", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    workTime: Sprite = new Sprite("workTimeSprite", "worktime.png", 20, 0, {size: 14});

    navButton: NavButton = new NavButton('left', 'anker');

    explanation1: Label = new Label("explanation1", "- Ein Haus bauen", -22, 4, {fontsize: 1.5});
    explanation2: Label = new Label("explanation2", "- Ein Jump & Run Gelände bauen", -22, 1, {fontsize: 1.5});
    explanation3: Label = new Label("explanation3", "- Einen Baum erstellen", -22, -2, {fontsize: 1.5});
    explanation4: Label = new Label("explanation4", "- Etwas eigenes erfinden", -22, -5, {fontsize: 1.5});
}
