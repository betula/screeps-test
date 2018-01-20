

module.exports = ({ route, api }) => {

  route('GET', '/user/:id', async ({ id }) => {
    const user = await api.getUserById(id);
    if (!user) return 404;

    return user;
  });

};