import React from 'react';
import * as yup from 'yup';
import { View } from 'react-native';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';

import { formStyles as styles } from '../styles';

import FormikTextInput from './FormikTextInput';
import Button from './Button';

import useCreateReview from '../hooks/useCreateReview';

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: ''
};

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name='ownerName'
        placeholder='Repository owner name'
        style={styles.textInput}
        autoCapitalize='none'
      />
      <FormikTextInput
        name='repositoryName'
        placeholder='Repository name'
        style={styles.textInput}
        autoCapitalize='none'
      />
      <FormikTextInput
        name='rating'
        placeholder='Rating between 0 and 100'
        style={styles.textInput}
      />
      <FormikTextInput
        name='text'
        placeholder='Review'
        style={styles.textInput}
        multiline={true}
        textAlignVertical='top'
      />
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  );
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(3, 'Repository owner name must be at least 3 characters long')
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .min(2, 'Repository name must be at least 2 characters long')
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Rating cannot be less than 0')
    .max(100, 'Rating cannot be higher than 100')
    .integer('Rating must be an integer')
    .required('Rating is required'),
  text: yup
    .string()
});

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text} = values;

    try {
      const data = await createReview({ ownerName, repositoryName, rating: Number(rating), text });
      console.log(data);
      history.push(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview;
