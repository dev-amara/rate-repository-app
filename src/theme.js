import { Platform } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0399d6',
        secondary: '#8899aa',
        warning: '#d73a4a'
    },
    backgroundColors: {
        appMain: '#e1e4e8',
        appBar: '#24292e',
        mainContainer: '#ffffff'
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
};

export default theme;
