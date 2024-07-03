export interface UserCredential {
  email: string;
  password: string;
}

export interface UserRegistration extends UserCredential {
  name: string;
}
