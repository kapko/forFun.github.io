import { create } from 'zustand';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthData, LoginProps } from "../pages/signIn/type";

type AuthState = LoginProps &{
  submit: (data: AuthData) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  error: null,
  submit: async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.username, data.password);
      set({ error: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: 'Пароль или логин введены неправильно' });
      } else {
        set({ error: 'Произошла ошибка при авторизации!' });
      }
    }
  },
}));

export const useRegisterStore = create<AuthState>((set) => ({
  error: null,
  submit: async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.username, data.password);
      set({ error: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: 'Пользователь с таким именем уже существует.' });
      } else {
        set({ error: 'Произошла ошибка при регистрации!' });
      }
    }
  },
}));