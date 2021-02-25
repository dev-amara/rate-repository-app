import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useLocation } from "react-router-native";
import theme from "../theme";

import Text from "./Text";

const styles = StyleSheet.create({
    container: { marginRight: 15 },
    activeTab: {
        color: "#ffffff",
    },
    inactiveTab: {
        color: theme.colors.mainBackground,
        opacity: 0.7,
    },
});

const AppBarTab = ({ title, path, cb }) => {
    const location = useLocation();

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => cb(path)}>
                <Text
                    fontWeight="bold"
                    style={
                        location.pathname === path ? styles.activeTab : styles.inactiveTab
                    }
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AppBarTab;
