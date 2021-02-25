import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
});

const RepositoryItemAvatar = ({ uri }) => {
    return <Image style={styles.avatar} source={{ uri: uri }} />;
};

export default RepositoryItemAvatar;
