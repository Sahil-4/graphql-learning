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
export declare const GraphQLResolvers: {
    Query: {
        users: () => Promise<(import("mongoose").Document<unknown, {}, import("../../model/user.model.js").UserModelType> & import("../../model/user.model.js").UserModelType & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[]>;
        notes: () => Promise<(import("mongoose").Document<unknown, {}, import("../../model/note.model.js").NoteModelType> & import("../../model/note.model.js").NoteModelType & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[]>;
        user: (_: any, args: {
            _id: string;
        }) => Promise<(import("mongoose").Document<unknown, {}, import("../../model/user.model.js").UserModelType> & import("../../model/user.model.js").UserModelType & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>) | null>;
    };
    Note: {
        userId: (parent: import("../../model/note.model.js").NoteModelType) => Promise<(import("mongoose").Document<unknown, {}, import("../../model/user.model.js").UserModelType> & import("../../model/user.model.js").UserModelType & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>) | null>;
        someUnknownAttribute: (parent: import("../../model/note.model.js").NoteModelType) => Promise<string>;
    };
    User: {
        notes: (parent: import("../../model/user.model.js").UserModelType) => Promise<(import("mongoose").Document<unknown, {}, import("../../model/note.model.js").NoteModelType> & import("../../model/note.model.js").NoteModelType & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[]>;
    };
    Mutation: {
        User: (_: any, args: {
            name: string;
            email: string;
            passkey: string;
        }) => Promise<import("mongoose").Document<unknown, {}, import("../../model/user.model.js").UserModelType> & import("../../model/user.model.js").UserModelType & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>>;
    };
};
