import React from "react";
import { View, StyleSheet } from "react-native";

import RepositoryItemStat from "./RepositoryItemStat";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});

const RepositoryItemStats = ({ stars, forks, reviews, rating }) => {
    return (
        <View style={styles.container}>
            <RepositoryItemStat title="Stars" count={stars} />
            <RepositoryItemStat title="Forks" count={forks} />
            <RepositoryItemStat title="Reviews" count={reviews} />
            <RepositoryItemStat title="Rating" count={rating} />
        </View>
    );
};

export default RepositoryItemStats;
