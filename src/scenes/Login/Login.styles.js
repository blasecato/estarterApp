import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: "relative",
    },
    container__Background: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    content: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 330,
        width: '100%',
        position: 'relative'
    },
    logo: {
        marginTop: 100,
        minWidth: '100%',
        position: "relative",
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
        marginBottom: 60
    },
    form: {
        width: '100%'
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 90,
        maxWidth: '100%',
        width: '100%',
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 0,
        marginBottom: 13
    },
    label: {
        marginBottom: 18,
        color: '#FFFF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        maxWidth: '100%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        borderRadius: 5,
        padding: 11,
        color: '#ffff',
        backgroundColor: '#FFFFFF1A',
        maxWidth: '100%'
    },
    buttonSignin: {
        marginTop: 20,
        marginBottom: 23,
        minWidth: '100%',
        position: 'relative',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    buttonSignin__text: {
        color: '#19439F',
        fontWeight: '500',
        fontSize: 19
    },
    buttonForgot__text: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 17
    },
    buttonSignup: {
        backgroundColor: '#FFFFFF4D',
        color: '#162CA3',
        borderColor: 'transparent',
        elevation: 0,
        height: 60
    },
    buttonSignup__text: {
        color: '#162CA3',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 17
    }
})