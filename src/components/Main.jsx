import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import theme from '../theme';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import SignIn from './SignIn';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';
import SignUp from './SignUp';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.backgroundColors.appMain,
        flexGrow: 1,
        flexShrink: 1
    }
});

const Main = () => {
    return (
      <View style={styles.container}>
          <AppBar />
          <Switch>
              <Route path='/sign-in'>
                  <SignIn />
              </Route>
              <Route path='/sign-up'>
                  <SignUp />
              </Route>
              <Route path='/repository/:id'>
                  <SingleRepository />
              </Route>
              <Route path='/create-review'>
                  <CreateReview />
              </Route>
              <Route path='/my-reviews'>
                  <MyReviews />
              </Route>
              <Route path='/' exact>
                  <RepositoryList />
              </Route>
              <Redirect to='/' />
          </Switch>
      </View>
    );
};

export default Main;
