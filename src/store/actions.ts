import { create } from 'zustand';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

type AuthState = {
  error: string | null;
  email: (data: {username: string, password: string}) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  error: null,
  email: async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.password, data.username);
      set({ error: null });
    } catch (error) {
      if(error instanceof  Error) {
        set({ error: 'Пароль или логин введены неправильно' });
      }else {
        set({ error: 'Произошла ошибка при авторизации!' });
      }
    }
  },
}));

export const useRegisterStore = create<AuthState>((set) => ({
  error: null,
  email: async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.password, data.username);
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

