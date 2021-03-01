import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        padding: 12,
        minWidth: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 5
    },
    text: {
        color: 'white'
    }
});

const Button = ({ children, style, ...props }) => {
    const buttonStyle = [styles.container, style];

    return (
      <TouchableOpacity activeOpacity={0.8} {...props}>
          <View style={buttonStyle}>
              <Text
                style={styles.text}
                fontSize='subheading'
                fontWeight='bold'
              >
                  {children}
              </Text>
          </View>
      </TouchableOpacity>
    );
};

export default Button;
