const Base = require('./base.js');


// 会按照顺序执行 Base中的方法，若有相同的方法对于不同的网页入口，那么显示后面的网页入口
module.exports = class extends Base {

  async indexAction() { //async表示异步函数


    //数据库orm映射(object relation model)
    // let userlist  = await this.model().table('user').select(); //await异步,select空表示查询所有id数据

    let userlist = await this.model('man').getUserlist(); //await异步,select空表示查询所有id数据
    console.log(userlist);

    let user = {
      username: "Aliex",
      msg: "a test"
    }
    this.assign(userlist[1]);  //assign获取数据对象，传给view中调用父层方法的页面

    //也可以直接在display方法中添加要到达的view中的html路径
    // return this.display("index_print"); //此时便展示index_print为默认主页面，而不是默认indexAction的index_index页面
    return this.display();
  }

};
