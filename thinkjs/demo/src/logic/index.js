module.exports = class extends think.Logic {
  indexAction() {

    //对象，输出上下文语境，返回所有信息
    console.log(this.ctx); 


    // console.log("logic"); //执行顺序先于controller
  }
};
