const { Book, User } = require('../models');

const resolvers = {
Query: {
    //retrieve user by id
    user: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return User.find(params);
},
},
Mutation: {
createUser: async (parent, {_id, }) => {

},

},


};

module.exports = resolvers;