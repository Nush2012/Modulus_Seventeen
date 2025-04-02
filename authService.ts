import auth from '@react-native-firebase/auth';

export const signUp = async (email: string, password: string) => {
  return await auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = async (email: string, password: string) => {
  return await auth().signInWithEmailAndPassword(email, password);
};

export const signOut = async () => {
  return await auth().signOut();
};