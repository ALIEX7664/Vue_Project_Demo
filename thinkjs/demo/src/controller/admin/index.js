const Base = require('../base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

// //   Action前面的内容可以随意命名，作为view中对应的html文件名————xxx(js名)_xxx(返回方法名).html
//   helloAction(){
//       return this.display();
//   }
  loginAction()
  {
      return this.display();
  }
};
