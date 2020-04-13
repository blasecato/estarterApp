import {
    StyleSheet,
    Dimensions
} from 'react-native';

var { width } = Dimensions.get('window');

var box_width = width / 1.3;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    box: {
        height: '100%'
    },
    box1: {
        backgroundColor: 'transparent'
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
        marginBottom: 8,
        marginTop: 10,
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        height: 635,
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    logo: {
        marginTop: 29,
        width: 267,
        height: 61,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    textRegister: {
        width: '90%',
        margin: 24,
        color: '#282828',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Ubuntu'
    },
    form: {
        paddingRight: 15,
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 85,
        marginBottom: 22
    },
    label: {
        marginBottom: 15,
        color: '#FFFF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        borderRadius: 5,
        padding: 11,
        color: '#ffff',
        backgroundColor: '#FFFFFF1A',
        width: box_width,
        maxHeight: 50,
        maxWidth: 288
    },
    button: {
        backgroundColor: '#417CCA',
        color: '#162CA3',
        borderColor: 'transparent',
        elevation: 0,
        height: 50,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 20,
    },
    textButton: {
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 19,
        lineHeight: 22,
        fontFamily: 'Ubuntu'
    },
    text__warning: {
        color: "#160F6B",
        marginLeft: 10,
        marginBottom: 0,
        fontFamily: 'Ubuntu',
        position: 'absolute',
        bottom: -25,
        left: 4,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 13
    },
});