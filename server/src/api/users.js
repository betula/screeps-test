

module.exports = ({ api, db }) => {
  Object.assign(api, {

    async getUsers() {
      return await db.findAll();
    },

    async getUserById(id) {
      return await db.findOne(id);
    }

  })
};