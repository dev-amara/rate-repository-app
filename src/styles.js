import { StyleSheet, Dimensions } from 'react-native';
import theme from './theme';

const { width } = Dimensions.get('window');

export const formStyles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: theme.backgroundColors.mainContainer,
        padding: 15
    },
    textInput: {
        borderColor: '#999999',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        marginBottom: 10,
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.subheading
    }
});

export const reviewItemStyles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: theme.backgroundColors.mainContainer,
        padding: 15
    },
    reviewInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    rating: {
        display: 'flex',
        flex: 0,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingText: {
        color: theme.colors.primary
    },
    details: {
        flexGrow: 1,
        flex: 1,
        marginLeft: 15
    },
    reviewActions: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'
    },
    viewButton: {
        width: width * 0.44
    },
    deleteButton: {
        width: width * 0.44,
        backgroundColor: theme.colors.warning
    }
});
