import React from 'react';
import { StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
    appBarTab: {
        padding: 10,
        color: 'white'
    }
});

const AppBarTab = props => {
    return (
      <Text
        style={styles.appBarTab}
        fontWeight='bold'
        fontSize='subheading'
      >
          {props.children}
      </Text>
    );
};

export default AppBarTab;
