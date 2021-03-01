import React from 'react';
import * as yup from 'yup';
import { View } from 'react-native';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';

import { formStyles as styles } from '../styles';

import FormikTextInput from './FormikTextInput';
import Button from './Button';

import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
};

const SignUpForm = ({ onSubmit }) => {
    return (
      <View style={styles.container}>
          <FormikTextInput
            name='username'
            placeholder='Username'
            style={styles.textInput}
            autoCapitalize='none'
          />
          <FormikTextInput
            name='password'
            placeholder='Password'
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize='none'
          />
          <FormikTextInput
            name='passwordConfirm'
            placeholder='Password confirmation'
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize='none'
          />
          <Button onPress={onSubmit}>Sign up</Button>
      </View>
    );
};

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must be at least 3 characters long')
      .max(30, 'Username cannot be longer than 30 characters')
      .required('Username is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 character long')
      .max(50, 'Password cannot be longer than 50 characters')
      .required('Password is required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .required('Password confirmation is required')
});

const SignUp = () => {
    const [createUser] = useCreateUser();
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const userData = await createUser({ username, password });
            console.log('create user:', userData);
            const signInData = await signIn({ username: userData.createUser.username, password });
            console.log('sign in user:', signInData);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
          {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    );
};

export default SignUp;
