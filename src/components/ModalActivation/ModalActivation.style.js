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
        height: '60%',
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
    linearGradient: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    logo: {
        marginTop: 32,
        width: 300,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    lineStyle: {
        borderWidth: 1,
        borderColor: '#FFFFFF6B',
        marginTop: 27,
        marginBottom: 23,
        width: 288
    },
    form: {
        marginTop: 19

    },
    item: {
        borderWidth: 0,
        borderColor: 'transparent',
        width: 270,
        display: 'flex',
        flexDirection: 'row',
    },
    textInput: {
        marginBottom: 20,
        color: '#FFFF',
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFF',
        borderRadius: 5,
        paddingRight: 0,
        backgroundColor: '#FFFFFF1A',
    },
    buttonPass: {
        backgroundColor: '#417CCA',
        color: '#162CA3',
        borderColor: 'transparent',
        elevation: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }

});