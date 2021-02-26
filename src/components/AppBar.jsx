import React, { useCallback, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBg,
    },
    scrollView: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
});

const AppBar = () => {
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    const history = useHistory();
    const { authorizedUser } = useAuthorizedUser();

    const routeTabPress = useCallback((path) => {
        history.push(path);
    }, []);

    const signOut = useCallback(async (path) => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
        history.push(path);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} horizontal>
                <Link
                    to="/"
                    title="Repositories"
                    path="/"
                    cb={routeTabPress}
                    component={AppBarTab}
                />
                <>
                    {authorizedUser === null && (
                        <Link
                            to="/signin"
                            title="Sign in"
                            path="/signin"
                            cb={routeTabPress}
                            component={AppBarTab}
                        />
                    )}
                    {authorizedUser && (
                        <AppBarTab title="Sign out" path="/" cb={signOut} />
                    )}
                </>
            </ScrollView>
        </View>
    );
};

export default AppBar;
