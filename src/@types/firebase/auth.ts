export interface FirebaseAuthError {
  code: string;
  message: string;
}

export interface FirebaseSignInError extends FirebaseAuthError {
  code:
    | 'auth/invalid-email'
    | 'auth/user-disabled'
    | 'auth/user-not-found'
    | 'auth/wrong-password';
}
