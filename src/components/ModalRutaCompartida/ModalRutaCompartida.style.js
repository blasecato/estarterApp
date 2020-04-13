import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    container_background: {
        height: '100%',
        width: '100%',
        justifyContent: 'center'
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
        marginTop: 20,
    },
    imageClose: {
        margin: 20,
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
        marginBottom: 0
    },
    card: {
        height: 550,
        width: '90%',
        maxWidth: 315,
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
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        marginTop: 20,
    },
    cardBoxTwo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '88%',
        marginTop: 20
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
        paddingRight: 0,
        marginBottom: 0
    },
    label: {
        marginBottom: 7,
        color: '#454545',
        fontSize: 14,
        maxWidth: '100%',
        lineHeight: 16,
        fontFamily: 'Ubuntu'
    },
    input: {
        borderWidth: 1,
        borderColor: '#D5D5D5',
        backgroundColor: '#FFFFFF',
        padding: 11,
        maxWidth: '102%',
        flex: 0,
        color: '#BEBEBE',
        fontSize: 14,
        lineHeight: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
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
        maxWidth: 315,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});