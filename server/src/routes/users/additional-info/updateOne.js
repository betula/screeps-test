const
  deepAssign = require('deep-assign'),
  deepExclude = require('extend_exclude')._exclude
;

module.exports = ({ route, api }) => {

  route('POST', '/user/:id/additional-info', async ({ id, body }) => {
    const user = await api.getUserById(id);
    if (!user) return 403;

    body = body || {};

    let updatedUserAdditionalInfo = {};
    deepAssign(updatedUserAdditionalInfo, user.additionalInfo, body.$upsert || {});
    deepExclude(updatedUserAdditionalInfo, body.$delete || {});

    return await api.replaceUserAdditionalInfo(id, updatedUserAdditionalInfo);
  });

};