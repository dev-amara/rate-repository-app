
import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    count: {
        marginBottom: 15,
    },
});

const RepositoryItemStat = ({ title, count }) => {
    const countText =
        count >= 1000 ? `${Math.round((count / 1000) * 10) / 10}k` : `${count}`;

    return (
        <View style={styles.container}>
            <Text fontWeight="bold" style={styles.title}>
                {countText}
            </Text>
            <Text color="textSecondary">{title}</Text>
        </View>
    );
};

export default RepositoryItemStat;
