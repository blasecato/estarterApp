import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    container_background: {
        height: '100%',
        width: '100%',
    },
    container: {
        flex: 4,
        flexDirection: 'column',
    },
    viewClose: {
        width: '95%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: '10%'
    },
    imageClose: {
        marginRight: 20,
        marginBottom: 24,
        height: 32,
        width: 32,
        resizeMode: 'contain',
    },
    box: {
        height: '100%',

    },
    boxOne: {
        backgroundColor: 'transparent',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    card: {
        height: 490,
        width: '90%',
        flexDirection: 'column',
        backgroundColor: '#ffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },
    cardBox: {
        flexDirection: 'column',
    },
    cardBoxOne: {
        width: '90%',
    },
    cardBoxTwo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        padding: 25,
        marginVertical: -5
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 40,
        maxWidth: '100%',
        width: '100%',
        paddingRight: 0,
        paddingLeft: 0
    },
    input: {
        borderWidth: 1,
        borderColor: '#D5D5D5',
        backgroundColor: '#FFFFFF',
        padding: 11,
        maxWidth: '100%',
        width: '98%',
        flex: 0,
        fontSize: 20,
        fontStyle: 'normal',
        lineHeight: 20,
        fontWeight: 'normal',
        fontFamily: 'Ubuntu'
    },
    buttonVinc: {
        minWidth: '40%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'transparent',
        elevation: 0
    },
    buttonVinc__text: {
        color: '#FFFF',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        fontFamily: 'Ubuntu'
    },
    cardBoxThree: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    linearStyle: {
        height: 8,
        width: '90%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});