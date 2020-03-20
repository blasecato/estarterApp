import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    containerbg: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: "relative",
    },
    bg: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
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
        /* backgroundColor: '#333' */
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 98,
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
        fontSize: 14,
        maxWidth: '100%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        borderRadius: 5,
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
        height: 60
    },
    buttonSignin__text: {
        color: '#19439F',
        fontWeight: '500',
        fontSize: 19
    },
    buttonSignup: {
        color: '#162CA3',
        fontSize: 15
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})