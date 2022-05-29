interface INewUser {
  name: string;
  email: string;
  age: number;
  password: string;
}

interface IUpdateUser {
  name: string;
  email: string;
  age: number;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export { INewUser, IUpdateUser };
