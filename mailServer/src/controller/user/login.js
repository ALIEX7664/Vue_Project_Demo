const Base = require('../base.js');

module.exports = class extends Base {
  indexAction() {
    return this.json({msg: 'login page'});
  }

  
//   get方法会导致账户密码显示在网址上，应用post方法获取账号密码
 async loginAction(){
    if(this.method == 'POST'){
        // 获取post提交用户名和密码
        let username = this.post('username')
        let password = this.post('password')

        //查询数据库表,where({数据库字段:比较变量})，查询与username相匹配得字段
        let user = await this.model('member').where({username:username}).find()
        //由于数据库密码经过加密，所以需要对用户输入密码进行加密来进行判断
        if(user.password == this.verifyPassword(password))
        {
            //完成登录-更新token，token是类似于密文口令，该口令给予前端，在以后发送请求时可以进行验证，若口令过期则无法访问页面
            return this.json({state: '登陆成功'})
        }
        else
        {
           return  this.json({state: '登录失败'})
        }
  }
};