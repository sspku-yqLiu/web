import React, { Component } from 'react'

export default class ExtensionUniverse extends Component {
    render() {
        return (
            <div>
                <canvas id = 'canvas'></canvas>  
            </div>
        )
    }
    componentDidMount(){
        const canvas = document.querySelector('#canvas');
        const content = canvas.getContext('2d');
        const cw,ch;
        const stars = [];
        function star(){};
        function line(){};
        
       //星星
       star.prototype={
           init:function(){
               this.w = Math.random()*cw;
               this.h = Math.random()*cw;
               this.r = Math.random()*cw;
               this.speedX = rand(-1,1);
               this.speedY = rand(-1,1);
           },
           draw: function(){
               context.fillStyle = 'white';
               context.beginPath();
               context.arc(this.w,this.h,this.r,0,Math.PI*2);
               context.fill();
           },
           move: function(){
               this.w += this.speedX;
               this.h += this.speedY;
               if(this.w < 0 || this.w > cw){
                   this.speedX *= -1;
               }
               if(this.h < 0 || this.h > ch){
                   this.speedY *= -1;
               }
               this.draw();
           }
       }

       //line
       
    }
}
