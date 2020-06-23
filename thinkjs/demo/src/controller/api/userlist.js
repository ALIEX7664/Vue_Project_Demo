const Base = require('../base.js');

module.exports = class extends Base {
    async userlistAction() {

        let userlist = await this.model().table('user').select()
        this.json(userlist) //返回json格式数据

        // this.success(userlist); //返回成功和信息
        // this.fail({msg:"falied"}); //返回失败

    }

};
