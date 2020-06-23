module.exports = class extends think.Model {
      getUserlist(){
          return this.table('user').select();
      }
};
