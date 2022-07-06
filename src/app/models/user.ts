export interface IUser {
  gender: Gender;
  name: Name;
  email: string;
  login: Login;
  picture: Picture;
  dob: Dob;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export type Gender = 'female' | 'male' | 'Divers';
