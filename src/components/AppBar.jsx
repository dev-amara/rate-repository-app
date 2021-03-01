import React, { useContext } from 'react';
import { View, ScrollView, TouchableHighlight, StyleSheet} from 'react-native';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import Constants from 'expo-constants';

import theme from '../theme';
import Text from './Text';

import AppBarTab from './AppBarTab';

import useAuthorizedUser from '../hooks/useAuthorizedUser';

import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 4,
        backgroundColor: theme.backgroundColors.appBar
    },
    tabsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    signOutTab: {
        padding: 10,
        color: 'white'
    }
});

const AppBar = () => {
    const { authorizedUser } = useAuthorizedUser();
    const history = useHistory();
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);

    const handleSignOut = async () => {
        await authStorage.clearAccessToken();
        apolloClient.resetStore();
        history.push('/sign-in');
    };

    return (
      <View style={styles.container}>
          <ScrollView horizontal style={styles.tabsContainer}>
              <Link to='/'>
                  <AppBarTab>Repositories</AppBarTab>
              </Link>
              {authorizedUser
                ? <>
                    <Link to='/create-review'>
                        <AppBarTab>Create a review</AppBarTab>
                    </Link>
                    <Link to='/my-reviews'>
                        <AppBarTab>My reviews</AppBarTab>
                    </Link>
                    <TouchableHighlight onPress={handleSignOut}>
                        <Text
                          style={styles.signOutTab}
                          fontWeight='bold'
                          fontSize='subheading'
                        >
                            Sign out
                        </Text>
                    </TouchableHighlight>
                </>
                : <>
                    <Link to='/sign-in'>
                        <AppBarTab>Sign in</AppBarTab>
                    </Link>
                </>
              }
              <Link to='/sign-up'>
                  <AppBarTab>Sign up</AppBarTab>
              </Link>
          </ScrollView>
      </View>
    );
};

export default AppBar;
