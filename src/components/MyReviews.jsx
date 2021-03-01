import React from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';
import { useHistory } from 'react-router-native';

import ReviewItem from './ReviewItem';

import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    const { authorizedUser, refetch } = useAuthorizedUser({ includeReviews: true });
    const [deleteReview] = useDeleteReview();
    const history = useHistory();

    const reviews = authorizedUser
      ? authorizedUser.reviews.edges.map(edge => edge.node)
      : [];

    const viewRepository = id => {
        history.push(`/repository/${id}`);
    };

    const handleDeleteReview = async (id) => {
        try {
            const data = await deleteReview({ id });
            console.log(data);
            refetch();
        } catch (e) {
            console.log('error', e);
        }
    };

    const confirmDeleteReview = id => {
        Alert.alert(
          'Delete review',
          'Are you sure you want to delete this review?',
          [
              {
                  text: 'CANCEL',
                  onPress: () => console.log('Cancelled'),
                  style: 'cancel'
              },
              {
                  text: 'DELETE',
                  onPress: () => handleDeleteReview(id)
              }
          ],
          { cancelable: false }
        );
    };

    return (
      <>
          {!authorizedUser
            ? null
            : <>
                <FlatList
                  data={reviews}
                  renderItem={({ item }) =>
                    <ReviewItem
                      review={item}
                      isUserReview={true}
                      viewRepository={viewRepository}
                      deleteReview={confirmDeleteReview}
                    />}
                  keyExtractor={({ id }) => id}
                  ItemSeparatorComponent={ItemSeparator}
                />
            </>
          }
      </>
    );
};

export default MyReviews;
