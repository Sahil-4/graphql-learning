interface UserType {
  _id?: string;
  name?: string;
  email?: string;
  passkey?: string;
  createdAt?: string;
  updatedAt?: string;
  notes?: [NoteType];
}

interface NoteType {
  _id?: string;
  title?: string;
  body?: string;
  userId?: UserType;
  createdAt?: string;
  updatedAt?: string;
  someUnknownAttribute?: string;
}

export type { UserType, NoteType };
