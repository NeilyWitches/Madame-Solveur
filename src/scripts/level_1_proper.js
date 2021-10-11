import Konva from "konva";
import Ball from "./ball";

class Level1Proper {
    constructor() {
        this.stage = new Konva.Stage({
            container: 'body',
            width: 600,
            height: 700
        });
        this.renderLevel();
    }

    renderLevel() {
        this.renderTitles();
        this.renderImages();
        this.renderBalls();
    }

    renderTitles() {
        const layer = new Konva.Layer();

        const title = new Konva.Text({
            x: this.stage.width() / 2,
            y: 25,
            text: 'Level 1:',
            fontSize: 45,
            fontFamily: 'Arial',
            fill: 'black',
            fontStyle: 'bold',
        });
        title.offsetX(title.width() / 2);
        layer.add(title);

        const subTitle = new Konva.Text({
            x: this.stage.width() / 2,
            y: 80,
            text: 'Find the heavier ball bearing!',
            fontSize: 25,
            fill: 'purple',
            fontStyle: 'bold'
        });
        subTitle.offsetX(subTitle.width() / 2);
        layer.add(subTitle);
        this.stage.add(layer);
    }

    renderBalls() {
        const balls = [];
        const layer = new Konva.Layer();
        const group = new Konva.Group({
            x: 100,
            y: 150
        });
        for (let i = 0; i < 9; i++) {
            balls.push(new Ball(group, i));
        }
        layer.add(group);
        this.stage.add(layer);
        const randomNum = Math.floor(Math.random() * 9);
        group.children[randomNum].attrs.name = 'heavy';
        this.guessingBall(group);
    }

    renderImages() {
        const layer = new Konva.Layer();
        this.stage.add(layer);
        const studentImg = new Image();
        const studentScaleFactor = 1 / 8;
        studentImg.onload = function () {
            const student = new Konva.Image({
                x: 450,
                y: 150,
                image: studentImg,
                width: studentImg.width * studentScaleFactor,
                height: studentImg.height * studentScaleFactor
            });
            layer.add(student);
        };
        studentImg.src = 'assets/student_lvl_1.jpg';

        const studentCiteImg = new Image();
        const studentCiteScaleFactor = 1 / 4;
        studentCiteImg.onload = function () {
            const studentCite = new Konva.Image({
                x: 395,
                y: 375,
                image: studentCiteImg,
                width: studentCiteImg.width * studentCiteScaleFactor,
                height: studentCiteImg.height * studentCiteScaleFactor,
            });
            layer.add(studentCite);
        };
        studentCiteImg.src = 'assets/student_cite.jpg';
    }

    guessingBall(group) {
        const that = this;
        this.stage.on('dragend', function (e) {
            let pos = that.stage.getPointerPosition();
            const studentX = that.stage.children[1].children[1].attrs.x
            const studentWidth = that.stage.children[1].children[1].attrs.width
            const studentY = that.stage.children[1].children[1].attrs.y
            const studentHeight = that.stage.children[1].children[1].attrs.height
            console.log(pos);
            if (pos.x >= studentX && pos.x <= studentX + studentWidth 
                && pos.y >= studentY && pos.y <= studentY + studentHeight) {
                    console.log("ur mom")
                }
        })
    }

}

export default Level1Proper;