const
  deepAssign = require('deep-assign')
;

module.exports = ({ api, db }) => {
  Object.assign(api, {

    async getUsers() {
      return await db.findAll();
    },

    async getUserById(id) {
      return await db.findOne(id);
    },

    async replaceUserAdditionalInfo(id, additionalInfo) {
      const user = await this.getUserById(id);

      const updatedUser = deepAssign({}, user);
      updatedUser.additionalInfo = additionalInfo;

      return ( await db.replaceOne(id, updatedUser) ).additionalInfo;
    }
  })
};