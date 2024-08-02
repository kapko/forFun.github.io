import { create } from 'zustand';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/firebase";
import { AuthData, LoginProps } from "@/store/auth/auth.type";

type signInType = (data: AuthData) => Promise<void>;
type AuthState = LoginProps & {
  signIn: signInType;
  signUp: signInType;
  signInError: string | null;
  signUpError: string | null;
}

export const useAuthStore = create<AuthState>((set) => ({
  signInError: null,
  signUpError: null,

  signUp: async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.username, data.password);
      set({ signUpError: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ signUpError: 'Пользователь с таким именем уже существует.' });
      } else {
        set({ signUpError: 'Произошла ошибка при регистрации!' });
      }
    }
  },

  signIn: async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.username, data.password);
      set({ signInError: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ signInError: 'Пароль или логин введены неправильно' });
      } else {
        set({ signInError: 'Произошла ошибка при авторизации!' });
      }
    }
  },
}));
