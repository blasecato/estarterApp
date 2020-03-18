import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    containerbg: {
        height: '100%',
        backgroundColor: '#000000',
    },
    bg: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        display: 'flex',
        position: "relative",

    },
    imageClose: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
        alignItems: 'flex-start',
    },
    container: {
        height: 135,
        width: 315,
        backgroundColor: '#fff',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',

    },
    linearStyle: {
        height: 8,
        width: 315,
        justifyContent: 'center'
    },
});