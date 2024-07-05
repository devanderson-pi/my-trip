import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';

interface AuthContext {
  user: FirebaseAuthTypes.User | null;
}

export const AuthContext = createContext({} as AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);

      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, [initializing]);

  if (initializing) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
