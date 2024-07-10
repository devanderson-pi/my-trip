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

export interface FirebaseSignUpError extends FirebaseAuthError {
  code:
    | 'auth/email-already-in-use'
    | 'auth/invalid-email'
    | 'auth/operation-not-allowed'
    | 'auth/weak-password';
}
