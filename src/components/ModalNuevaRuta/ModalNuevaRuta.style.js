import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({

    bg: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageClose: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: .4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        flex: 1,
        height: 200,
    },
    boxOne: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 50,
        paddingRight: 38,
        paddingTop: 25
    },
    boxTwo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 143,
        width: 315,
        flex: 1
    },
    card: {
        height: 143,
        width: 315,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    form: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginRight: 7,
        flex: 0
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
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    linearStyle: {
        height: 8,
        width: 315,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});