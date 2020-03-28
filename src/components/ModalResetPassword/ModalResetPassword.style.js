import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000000'
    },
    container__background: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center",
        display: 'flex',
        position: "relative",
        flexDirection: 'column'
    },
    content: {
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
        textAlign: 'right',
        textAlign: 'center',
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
    linearGradient: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        borderRadius: 5
    },
    logo: {
        marginTop: 32,
        width: 300,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    textPass: {
        width: 252,
        height: 40,
        marginTop: 10,
        marginBottom: 13,
        color: '#282828',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 8,
        backgroundColor: 'transparent'
    },
    card: {
        backgroundColor: '#103256',
        width: 122,
        height: 170,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCard: {
        marginTop: 7,
        marginBottom: 13,
        color: '#FFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 16,
        width: 105,
        height: 61,
        marginTop: 20

    },
    textCard__bold: {
        color: '#FFFF',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 16,
    }

});