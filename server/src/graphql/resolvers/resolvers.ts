import {
  createNewUser,
  getAllUsers,
  getUserByID,
  getUsersNotes,
} from "../../controllers/user.controllers.js";
import {
  findNoteUser,
  getAllNotes,
  getUnknownAttribute,
} from "../../controllers/note.controllers.js";

export const GraphQLResolvers = {
  Query: {
    users: getAllUsers,
    notes: getAllNotes,
    user: getUserByID,
  },
  Note: {
    userId: findNoteUser,
    someUnknownAttribute: getUnknownAttribute,
  },
  User: {
    notes: getUsersNotes,
  },
  Mutation: {
    User: createNewUser,
  },
};
