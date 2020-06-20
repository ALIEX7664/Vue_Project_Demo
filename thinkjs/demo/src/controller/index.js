const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    // this.success({hello:"hello world"}) //json格式数据
    console.log(this.ctx); 
    // console.log("controller");
    return this.display(); //显示主页视图
  }
};
