import React, { useState } from 'react';
import { FormValues } from "../../components/auth/type";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Registration from "../../components/registration/registration";

const RegistrationContainers = () => {
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    try {
      await createUserWithEmailAndPassword(auth, data.username, data.password);
      setError(null)
    } catch (error) {
    }
  }
  return (
    <div>
      <Registration onSubmit={onSubmit} error={error}/>
    </div>
  );
};

export default RegistrationContainers;