import React, { useState } from 'react';
import { auth } from "../../firebase";
import { AuthData } from "../../components/auth/type";
import Authorization from "../../components/auth/authorization";
import { signInWithEmailAndPassword } from 'firebase/auth';
const LoginContainer = () => {
  const [error, setError] = useState<string | null>(null);

  const onLoginSubmit = async (data: AuthData) => {
    console.log(data, 'data')
    try {
      await signInWithEmailAndPassword(auth, data.username, data.password);
      setError(null);
    } catch (error) {
      if(error){
        setError('Пароль или логин введены неправильно');
      }
    }
  };

  return (
    <div>
      <Authorization error={error} onSubmit={onLoginSubmit}/>
    </div>
  );
};

export default LoginContainer;