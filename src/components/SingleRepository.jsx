import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
    let { id } = useParams();
    const { repository, fetchMore } = useRepository({ first: 6, id });

    const reviews = repository
      ? repository.reviews.edges.map(edge => edge.node)
      : [];

    const onEndReach = () => {
        fetchMore();
    };

    return (
      <>
          {!repository
            ? null
            : <>
                <FlatList
                  data={reviews}
                  onEndReached={onEndReach}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item }) => <ReviewItem review={item} isUserReview={false} />}
                  keyExtractor={({ id }) => id}
                  ListHeaderComponent={() => <RepositoryItem item={repository} singleRepo='true' />}
                  ItemSeparatorComponent={ItemSeparator}
                />
            </>
          }
      </>
    );
};

export default SingleRepository;
