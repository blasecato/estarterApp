import {
    StyleSheet,
    Dimensions
} from 'react-native';

var { width, height } = Dimensions.get('window');

var box_width = width / 1.3;
var box_height = height;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center'
    },
    box: {
        height: '100%',
        width: '100%'
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
        width: '82%',
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
        maxWidth: 328,
        backgroundColor: 'transparent',
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    logo: {
        marginTop: 29,
        width: 268,
        height: 61,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    text__info: {
        width: 267,
        marginTop: 19,
        marginBottom: 25,
        color: '#282828',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Ubuntu'
    },
    content__info: {
        color: '#282828',
        textAlign: 'center',
        backgroundColor: '#03173A36',
        width: box_width,
        height: 56,
        maxWidth: 280,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#3866A8',
        borderWidth: 1
    },
    lineStyle: {
        borderWidth: 1,
        borderColor: '#FFFFFF6B',
        marginTop: 27,
        marginBottom: 23,
        width: box_width
    },
    form: {
        marginTop: 19,
        paddingRight: 15,
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        width: 270,
        display: 'flex',
        flexDirection: 'row',
    },
    textInput: {
        marginBottom: 20,
        color: '#FFFF',
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        color: '#FFFF',
        borderRadius: 5,
        backgroundColor: '#FFFFFF1A',
        textAlign: 'center',
        paddingRight: 0,
        maxHeight: 50, 
        maxWidth: 288
    },
    buttonPass: {
        backgroundColor: '#417CCA',
        color: '#162CA3',
        borderColor: 'transparent',
        elevation: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 50
    },
    buttonPass__text: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 19,
        lineHeight: 22,
        fontFamily: 'Ubuntu'
    },
    button__send: {
        color: '#FFFFFF',
        marginTop: 16,
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 17,
        fontStyle: 'normal',
        fontFamily: 'Ubuntu'
    },
    text__activation: {
        color: '#FFFFFF',
        marginBottom: 10,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 18,
        fontStyle: 'normal',
        fontFamily: 'Ubuntu'
    },
    text__email: {
        color: '#FFFFFF',
        marginBottom: 10,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 18,
        fontStyle: 'normal',
        fontFamily: 'Ubuntu'
    },
    text__data: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 30,
        fontStyle: 'normal',
        fontFamily: 'Ubuntu'
    }
});