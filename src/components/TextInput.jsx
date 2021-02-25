import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    inputStyle: {
        marginBottom: 10,
        borderColor: theme.colors.mainBackground,
        borderWidth: 2,
        borderRadius: 3,
        padding: 10,
    },
    errorInput: {
        borderColor: "#d73a4a",
    },
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, styles.inputStyle, error && styles.errorInput];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
