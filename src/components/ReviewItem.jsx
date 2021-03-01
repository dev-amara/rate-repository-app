import React from 'react';
import { View } from 'react-native';
import { format, parseISO } from 'date-fns';

import Text from './Text';
import Button from './Button';

import { reviewItemStyles as styles } from '../styles';

const ReviewItem = ({ review, ...props }) => {
    return (
      <View style={styles.container}>
          <View style={styles.reviewInfo}>
              <View style={styles.rating}>
                  <Text
                    style={styles.ratingText}
                    fontSize='subheading'
                  >
                      {review.rating}
                  </Text>
              </View>
              <View style={styles.details}>
                  <Text
                    fontSize='subheading'
                    fontWeight='bold'
                    color='textPrimary'
                  >
                      {props.isUserReview ? review.repository.fullName : review.user.username}
                  </Text>
                  <Text
                    color='textSecondary'
                  >
                      {format(parseISO(review.createdAt), 'dd.MM.yyyy')}
                  </Text>
                  <Text
                    color='textPrimary'
                  >
                      {review.text}
                  </Text>
              </View>
          </View>
          {props.isUserReview
            ? <View style={styles.reviewActions}>
                <Button
                  style={styles.viewButton}
                  onPress={() => props.viewRepository(review.repository.id)}
                >
                    View repository
                </Button>
                <Button
                  style={styles.deleteButton}
                  onPress={() => props.deleteReview(review.id)}
                >
                    Delete review
                </Button>
            </View>
            : null
          }
      </View>
    );
};

export default ReviewItem;
