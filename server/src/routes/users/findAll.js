
module.exports = ({ route, api }) => {

  route('GET', '/users', async () => {
    return api.getUsers();
  });

};