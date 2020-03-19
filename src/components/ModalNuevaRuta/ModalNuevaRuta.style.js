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
        paddingRight: 38,
        paddingTop: 30
    },
    boxTwo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 135,
        width: 315,
        flex: 1
    },
    card: {
        height: 135,
        width: 315,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    linearStyle: {
        height: 8,
        width: 315,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});