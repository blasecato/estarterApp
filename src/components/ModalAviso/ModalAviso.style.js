import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
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
        paddingRight: 38,
        paddingTop: 30,
    },
    boxTwo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 135,
        width: '90%',
        flex: 1
    },
    card: {
        height: 135,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text__info: {
        textAlign: 'center', marginBottom: 20,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        color: '#3F3F3F',
        width: '96%'
    },
    text__infoBold: {
        textAlign: 'center', marginBottom: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        color: '#3F3F3F',

    },
    linearStyle: {
        height: 8,
        width: '100%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});