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
    },
    imageClose: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'flex-end',
        marginLeft: 15
    },
    content: {
        height: '90%',
        width: '90%',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
    textRegister: {
        width: '80%',
        marginTop: 14,
        marginBottom: 17,
        color: '#282828',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
    },
    form: {
        paddingRight: 15,
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 85,
        marginBottom: 10
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
        width: box_width
    },
    button: {
        backgroundColor: '#417CCA',
        color: '#162CA3',
        borderColor: 'transparent',
        elevation: 0,
        height: 58,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 40,
    },
    textButton: {
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 19,
        lineHeight: 22,
    }
});