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
        flex: .19,
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
        height: 500,
        width: 350,
        flex: 1
    },
    card: {
        height: 500,
        width: 350,
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',

    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        paddingHorizontal: 25
    },
    viewButton: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        height: 40,
        paddingRight: 0,
        paddingLeft: 0,
        marginRight: 14
    },
    input: {
        borderWidth: 1,
        borderColor: '#D5D5D5',
        backgroundColor: '#FFFFFF',
        padding: 11,
        width: '100%',
        maxWidth: '100%',
        flex: 0,
    },
    buttonVinc: {
        minWidth: '50%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'transparent',
        elevation: 0
    },
    buttonVinc__text: {
        color: '#FFFF',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    viewLinear: {
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    linearStyle: {
        height: 8,
        width: 350,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});