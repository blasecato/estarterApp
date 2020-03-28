import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container__Background: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    content: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200
    },
    logo: {
        marginTop: 0,
        width: 300,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    logo__slogan: {
        color: '#FFFFFF80',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
    },
    footer: {
        width: 300,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30
    },
    footerText: {
        color: '#162CA3',
        textAlign: 'center',
        fontStyle: 'normal',
        lineHeight: 10,
        fontSize: 8
    },
    footerText__bold: {
        color: '#162CA3',
        fontWeight: 'bold',
        fontSize: 9,
        lineHeight: 11,
        paddingTop: 5
    }
})