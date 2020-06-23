const Base = require('../base.js');

module.exports = class extends Base {
  indexAction() {
    
    //简写，找到username为Aliex的表项，更新对应的msg
    this.model("user").where({username:"Aliex"}).update({msg:"a update Aliex exp"});
    this.success({msg:"更新成功"});
  }

};
