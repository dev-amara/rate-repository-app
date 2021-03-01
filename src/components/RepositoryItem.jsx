import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import theme from '../theme';
import Text from './Text';
import Button from './Button';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: theme.backgroundColors.mainContainer,
        padding: 15
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    stats: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 5,
        flexGrow: 0
    },
    info: {
        flexGrow: 1,
        marginLeft: 15,
        flex: 1
    },
    languageTagContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8
    },
    languageTag: {
        flex: 0,
        padding: 8,
        borderRadius: 5,
        color: '#ffffff',
        backgroundColor: theme.colors.secondary,
        flexShrink: 1
    },
    statsElement: {
        display: 'flex',
        flex: 0,
        flexShrink: 1,
        alignItems: 'center'
    },
    urlButton: {
        marginTop: 10
    },
    separator: {
        height: 10
    }
});

export const formatStatNumber = (statNumber) => {
    return statNumber < 1000 ? statNumber : Number(statNumber/1000).toFixed(1).concat('k');
};

const openUrlInBrowser = url => {
    Linking.openURL(url);
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryItem = ({ item, singleRepo }) => {
    return (
      <>
          <View style={styles.container}>
              <View style={styles.details}>
                  <Image
                    style={styles.avatar}
                    source={{
                        uri: item.ownerAvatarUrl
                    }}
                  />
                  <View style={styles.info}>
                      <Text
                        testID='repoFullName'
                        fontSize='subheading'
                        fontWeight='bold'
                        color='textPrimary'
                      >
                          {item.fullName}
                      </Text>
                      <Text
                        testID='repoDescription'
                        color='textSecondary'
                      >
                          {item.description}
                      </Text>
                      <View style={styles.languageTagContainer}>
                          <Text
                            testID='repoLanguage'
                            style={styles.languageTag}
                          >
                              {item.language}
                          </Text>
                      </View>
                  </View>
              </View>
              <View style={styles.stats}>
                  <View style={styles.statsElement}>
                      <Text
                        testID='repoStargazersCount'
                        fontSize='subheading'
                        fontWeight='bold'
                        color='textPrimary'
                      >
                          {formatStatNumber(item.stargazersCount)}
                      </Text>
                      <Text color='textSecondary'>Stars</Text>
                  </View>
                  <View style={styles.statsElement}>
                      <Text
                        testID='repoForksCount'
                        fontSize='subheading'
                        fontWeight='bold'
                        color='textPrimary'
                      >
                          {formatStatNumber(item.forksCount)}
                      </Text>
                      <Text color='textSecondary'>Forks</Text>
                  </View>
                  <View style={styles.statsElement}>
                      <Text
                        testID='repoReviewCount'
                        fontSize='subheading'
                        fontWeight='bold'
                        color='textPrimary'
                      >
                          {formatStatNumber(item.reviewCount)}
                      </Text>
                      <Text color='textSecondary'>Reviews</Text>
                  </View>
                  <View style={styles.statsElement}>
                      <Text
                        testID='repoRatingAverage'
                        fontSize='subheading'
                        fontWeight='bold'
                        color='textPrimary'
                      >
                          {formatStatNumber(item.ratingAverage)}
                      </Text>
                      <Text color='textSecondary'>Rating</Text>
                  </View>
              </View>
              {singleRepo
                ? <Button
                  style={styles.urlButton}
                  onPress={() => openUrlInBrowser(item.url)}
                >
                    Open in GitHub
                </Button>
                : null}
          </View>
          {singleRepo ? <ItemSeparator /> : null}
      </>
    );
};

export default RepositoryItem;
