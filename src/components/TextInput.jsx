
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    errorStyle: {
        borderColor: '#d73a4a'
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        style,
        error ? styles.errorStyle : null
    ];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
