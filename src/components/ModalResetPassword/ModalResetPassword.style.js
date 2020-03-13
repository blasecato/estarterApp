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
        flexDirection: 'row',
        justifyContent: "center",
        display: 'flex',
        position: "relative",
        flexDirection: 'column'
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
    linerGradient: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10
    },
    logo: {
        marginTop: 32,
        width: 300,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    textPass: {
        marginTop: 24,
        marginBottom: 13,
        color: '#282828',
        textAlign: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 8,
        backgroundColor: 'transparent'
    },
    cards: {
        backgroundColor: '#103256',
        width: 122,
        height: 170,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textNormal: {
        marginTop: 7,
        marginBottom: 13,
        color: '#FFFF',
        textAlign: 'center'
    },
    textBold: {
        color: '#FFFF',
        fontWeight: 'bold'
    }

});