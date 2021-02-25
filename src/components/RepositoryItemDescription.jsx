import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexShrink: 1,
        marginBottom: 10,
    },
    fullName: {
        marginBottom: 5,
    },
    description: {
        marginBottom: 10,
    },
    languageTag: {
        backgroundColor: "#0366d6",
        alignSelf: "flex-start",
        padding: 5,
        borderRadius: 4,
    },
    languageTagText: {
        color: "#ffffff",
    },
});

const RepositoryItemDescription = ({ fullName, description, language }) => {
    return (
        <View style={styles.container}>
            <Text fontWeight="bold" style={styles.fullName}>
                {fullName}
            </Text>
            <Text color="textSecondary" style={styles.description}>
                {description}
            </Text>
            <View style={styles.languageTag}>
                <Text style={styles.languageTagText}>{language}</Text>
            </View>
        </View>
    );
};

export default RepositoryItemDescription;
