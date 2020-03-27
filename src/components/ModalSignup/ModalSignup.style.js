import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    containerbg: {
        height: '100%',
        backgroundColor: '#000000',
    },
    bg: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center",
        display: 'flex',
        position: "relative",
        flexDirection: 'column'
    },
    touchClose: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 8,
        marginBottom: 8
    },
    viewClose: {
        width: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

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
    container: {
        height: 680,
        width: '90%',
        backgroundColor: 'transparent',
        position: 'relative'
    },
    linearGradient: {
        flex: 1,
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
    textRegister: {
        width: 288,
        marginTop: 24,
        marginBottom: 27,
        color: '#282828',
        textAlign: 'center'
    },
    form: {
        paddingRight: 15
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 98
    },
    label: {
        marginBottom: 15,
        color: '#FFFF'
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        borderRadius: 10,
        padding: 11,
        backgroundColor: '#FFFFFF1A',
        width: 320
    },
    button: {
        backgroundColor: '#417CCA',
        color: '#162CA3',
        borderColor: 'transparent',
        elevation: 0,
        height: 58,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    textButton: {
        color: '#FFFFFF'
    }
});