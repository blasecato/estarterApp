
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    containerbg: {
        height: '100%',
        backgroundColor: '#000000'
    },
    bg: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        height: '55%',
        width: '90%',
        backgroundColor: 'transparent'
    },
    touchClose: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 8
    },
    textClose: {
        color: '#FFFFFF',
        textAlign: 'right'
    },
    imageClose: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'flex-end',
        marginLeft: 15
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    logo: {
        marginTop: 32,
        width: 300,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    cardCircle: {
        marginTop: 12,
        width: 119,
        height: 119,
        backgroundColor: '#103256',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageCardCircle: {
        width: 47,
        height: 75,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    form: {
        paddingRight: 15,
        marginTop: 19,
        marginBottom: 36,

    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 28,
    },
    label: {
        marginBottom: 10,
        marginTop: 15,
        color: '#FFFF',
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        borderRadius: 10,
        backgroundColor: '#FFFFFF1A',
        height: 38,
        width: 288,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 0
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