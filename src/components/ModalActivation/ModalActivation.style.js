import {
    StyleSheet,
    Dimensions
} from 'react-native';

var { width, height } = Dimensions.get('window');

var box_width = width / 1.3;
var box_height = height ;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center'
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
        width: '86%',
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
        lineHeight: 17,
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
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    logo: {
        marginTop: 10,
        width: '90%',
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    text__info: {
        width: '100%',
        marginTop: 14,
        marginBottom: 17,
        color: '#282828',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
    },
    content__info: {
        color: '#282828',
        textAlign: 'center',
        backgroundColor: '#03173A36',
        width: box_width,
        height: 56,
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
    },
    buttonPass: {
        backgroundColor: '#417CCA',
        color: '#162CA3',
        borderColor: 'transparent',
        elevation: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});