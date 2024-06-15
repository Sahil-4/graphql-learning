/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype.js" />
/// <reference types="mongoose/types/inferrawdoctype.js" />
import { UserModelType } from "../model/user.model.js";
export declare const getAllUsers: () => Promise<(import("mongoose").Document<unknown, {}, UserModelType> & UserModelType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>)[]>;
export declare const getUserByID: (_: any, args: {
    _id: string;
}) => Promise<(import("mongoose").Document<unknown, {}, UserModelType> & UserModelType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>) | null>;
export declare const getUsersNotes: (parent: UserModelType) => Promise<(import("mongoose").Document<unknown, {}, import("../model/note.model.js").NoteModelType> & import("../model/note.model.js").NoteModelType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>)[]>;
export declare const createNewUser: (_: any, args: {
    name: string;
    email: string;
    passkey: string;
}) => Promise<import("mongoose").Document<unknown, {}, UserModelType> & UserModelType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
