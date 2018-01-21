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

    async replaceOne(id, data) {
      const row = await this.findOne(id);
      if (row) {
        for (let key in row) {
          if (row.hasOwnProperty(key)) {
            delete row[key];
          }
        }
        deepAssign(row, data);
      }
      return row;
    }
  }

};