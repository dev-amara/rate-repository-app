import React, {useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from "./AppBarTab";
import theme from "../theme";
import {Link, useHistory} from "react-router-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBg,
    },
    scrollView: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
});

const AppBar = () => {
    const history = useHistory();

    const routeTabPress = useCallback((path) => {
        history.push(path);
    }, []);

    return <View style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal>
            <Link
                to="/"
                title="Repositories"
                path="/"
                cb={routeTabPress}
                component={AppBarTab}
            />
            <Link
                to="/signin"
                title="Sign in"
                path="/signin"
                cb={routeTabPress}
                component={AppBarTab}
            />
        </ScrollView>
    </View>
};

export default AppBar;
