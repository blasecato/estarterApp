
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    containerbg: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: 0,
        width: 300,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    form: {
        paddingRight: 15
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 90
    },
    label: {
        marginBottom: 15,
        color: '#FFFF'
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        borderRadius: 10,
        backgroundColor: '#FFFFFF1A'
    },
    buttonSignin: {
        marginTop: 20,
        width: 336,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSignup: {
        color: '#162CA3'
    }
})