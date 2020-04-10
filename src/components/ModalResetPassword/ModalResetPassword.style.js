import {
    StyleSheet,
    Dimensions
} from 'react-native';

var { width } = Dimensions.get('window');

var box_width = width / 1.3;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    box: {
        height: '100%',
    },
    box1: {
        backgroundColor: 'transparent',
    },
    container__background: {
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
    touchClose: {
        width: '96%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 8,
        marginBottom: 8
    },
    viewClose: {
        width: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textClose: {
        color: '#FFFFFF',
        textAlign: 'right',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Ubuntu'
    },
    imageClose: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'flex-end',
        marginLeft: 15
    },
    content: {
        width: '90%',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        width: '100%',
        height: 382,
        alignItems: 'center',
        borderRadius: 5,
    },
    logo: {
        marginTop: 29,
        width: 268,
        height: 61,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    textPass: {
        width: '60%',
        marginTop: 19,
        marginBottom: 29,
        color: '#282828',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Ubuntu'
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 39,
        backgroundColor: 'transparent'
    },
    card: {
        backgroundColor: '#103256',
        width: 122,
        height: 170,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCard: {
        marginTop: 7,
        marginBottom: 15,
        color: '#FFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 16,
        width: '90%',
        height: 61,
        marginTop: 20,
        fontFamily: 'Ubuntu'

    },
    textCard__bold: {
        color: '#FFFF',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 10,
        lineHeight: 16,
    }
});