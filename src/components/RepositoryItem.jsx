import React from "react";
import { View, StyleSheet } from "react-native";

import RepositoryItemAvatar from "./RepositoryItemAvatar";
import RepositoryItemDescription from "./RepositoryItemDescription";
import RepositoryItemStats from "./RepositoryItemStats";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 15,
        backgroundColor: "white",
    },
    descriptionContainer: {
        display: "flex",
        flexDirection: "row",
    },
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.descriptionContainer}>
                <RepositoryItemAvatar uri={item.ownerAvatarUrl} />
                <RepositoryItemDescription
                    fullName={item.fullName}
                    description={item.description}
                    language={item.language}
                />
            </View>

            <RepositoryItemStats
                stars={item.stargazersCount}
                forks={item.forksCount}
                reviews={item.reviewCount}
                rating={item.ratingAverage}
            />
        </View>
    );
};

export default RepositoryItem;
