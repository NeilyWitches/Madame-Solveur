// import Ball from './ball'

import Konva from "konva";
import Ball from "./ball";

// class Level1Proper {
//     constructor () {
//         this.canvas = document.createElement('canvas');
//         document.getElementById('body').appendChild(this.canvas);
//         this.canvas.setAttribute('id', 'level-1-proper');
//         this.ctx = this.draw();
//         this.renderLevel();
//     }

//     draw() {
//         this.canvas.setAttribute('width', '600');
//         this.canvas.setAttribute('height', '700');
//         return this.canvas.getContext('2d');
//     }

//     renderLevel() {
//         this.renderTitles();
//         this.renderBalls();
//         this.renderImages();
//     }

//     renderTitles() {
//         const text_h1 = "Level 1:";
//         this.ctx.fillStyle = "black";
//         this.ctx.font = "bold 45px Arial";
//         this.ctx.textBaseline = "top";
//         this.ctx.textAlign = "center";
//         this.ctx.fillText(text_h1, this.canvas.width / 2, 25);

//         const text_h2 = "Find the heavier ball bearing!";
//         this.ctx.fillStyle = "purple";
//         this.ctx.font = "bold 25px Arial";
//         this.ctx.textBaseLine = "top";
//         this.ctx.textAlign = "center";
//         this.ctx.fillText(text_h2, this.canvas.width / 2, 80);
//     }

//     renderBalls() {
//         // const balls = [];
//         // for (let i = 0; i < 9; i++) {
//         //     balls.push(new Ball(i));
//         // }
//         // balls[Math.floor(Math.random() * 9)].heavy = true;
//         new Ball(0);
//     }

//     renderImages() {
//         const that = this;
//         const student = new Image();
//         student.src = 'assets/student_lvl_1.jpg';
//         const student_scale_factor = 1 / 8;
//         student.addEventListener('load', function() {
//             that.ctx.drawImage(student, 450, 150, student.width * student_scale_factor, student.height * student_scale_factor);
//         }, false);
//         const student_cite = new Image();
//         student_cite.src = 'assets/student_cite.jpg';
//         const student_cite_scale_factor = 1 / 4;
//         student.addEventListener('load', function () {
//             that.ctx.drawImage(student_cite, 395, 375, student_cite.width * student_cite_scale_factor, student_cite.height * student_cite_scale_factor);
//         }, false);
//     }

// }

// export default Level1Proper;


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
        })
        for (let i = 0; i < 9; i++) {
            balls.push(new Ball(group, i));
        }
        layer.add(group);
        this.stage.add(layer);
        balls[Math.floor(Math.random() * 9)].heavy = true;
    }

}

export default Level1Proper;