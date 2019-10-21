import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

// 地板图

export class Land extends Sprite{
  constructor(){
    const img = Sprite.getImage('land');
    const height=DataStore.getInstance().canvas.height;
    const h=height-img.height; // 实际所在的高度
    super(img,0,0,img.width,img.height,0,h,img.width,img.height);
    this.landx=0; //地板实际x坐标

  }

  //重写父类Sprite的draw方法,实现地板的移动
  draw(){
    this.landx-=2;
    //图片出界,重置
    const width=DataStore.getInstance().canvas.width;
    if(this.landx<width-this.srcW){
      this.landx=0;
    }
    //重写父类draw
    super.draw(this.img,this.srcX,this.srcY,
      this.srcW,this.srcH,
      this.landx,
      this.y,this.width,this.height);
  }
}