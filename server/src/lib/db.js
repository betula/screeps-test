const
  deepAssign = require('deep-assign')
;

module.exports = ({ filename }) => {
  const rows = require(filename);

  return {
    async findAll() {
      return rows;
    },

    async findOne(id) {
      return rows.filter(row => row._id === id)[ 0 ];
    },

    async updateOne(id, data) {
      const row = this.findOne(id);
      if (row) {
        deepAssign(row, data);
      }
    }
  }

};