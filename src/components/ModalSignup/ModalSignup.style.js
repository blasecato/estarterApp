import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    container__background: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
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
        textAlign: 'right',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
    },
    imageClose: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        alignItems: 'flex-end',
        marginLeft: 15
    },
    content: {
        height: 690,
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
        paddingRight: 15
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 90,
        marginBottom: 13
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
        borderRadius: 10,
        padding: 11,
        color: '#ffff',
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
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 19,
        lineHeight: 22,
    }
});