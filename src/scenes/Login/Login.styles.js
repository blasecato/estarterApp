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
        minHeight: 600,
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
        minWidth: '100%',
        maxWidth: '100%',
        width: '100%',
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 0,
        marginBottom: 20
    },
    label: {
        marginBottom: 18,
        color: '#FFFF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        maxWidth: '100%',
        fontFamily: 'Ubuntu'
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        borderRadius: 5,
        padding: 11,
        color: '#ffff',
        backgroundColor: '#FFFFFF1A',
        maxWidth: '100%',
        marginBottom: 0,
        fontFamily: 'Ubuntu'
    },
    text__warning: {
        color: "#160F6B",
        marginLeft: 10,
        marginBottom: 0,
        fontFamily: 'Ubuntu',
        position: 'absolute',
        bottom: -20,
        left: 4,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 13
    },
    buttonSignin: {
        marginTop: 20,
        marginBottom: 23,
        minWidth: '100%',
        position: 'relative',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Ubuntu_medium',
        height: 60,
        
    },
    buttonSignin__text: {
        color: '#19439F',
        fontWeight: '500',
        fontSize: 19,
        fontStyle: 'normal',
        lineHeight: 22
    },
    buttonForgot__text: {
        fontStyle: 'normal',
        color: '#162CA3',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 17
    },
    buttonSignup: {
        backgroundColor: '#FFFFFF4D',
        color: '#162CA3',
        borderColor: 'transparent',
        elevation: 0,
        height: 60,
    },
    buttonSignup__text: {
        color: '#162CA3',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 17
    }
})