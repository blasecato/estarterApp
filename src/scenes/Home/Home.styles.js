import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        flex: 1,
        position: 'relative',
        display: 'flex'
    },
    menu: {
        height: 39,
        width: 39,
        top: 30,
        backgroundColor: 'transparent',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        zIndex: 1,
        margin: 20
    },
    menú__button: {
        height: 39,
        width: 39,
        backgroundColor: '#FFFF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 99,
        top: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        zIndex: 11,
        elevation: 11,
    },
    route: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        margin: 20,
        top: 30,
        left: '73%'
    },
    route__one: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    route__imgOne: {
        resizeMode: 'cover',
        width: 18,
        height: 18
    },
    route__label: {
        backgroundColor: '#044C74',
        width: 45,
        height: 20,
        borderRadius: 5,
        textAlign: 'center',
    },
    route__text: {
        color: '#ffff',
        width: 45,
        height: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 14,
        textAlign: 'center',
    },
    route__two: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    route__imgTwo: {
        resizeMode: 'contain',
        width: 70,
        height: 28
    },
    whatsapp: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        margin: 20,
        top: 25,
        left: '75%'
    },
    whatsapp__one: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    whatsapp__imgOne: {
        resizeMode: 'cover',
        width: 60,
        height: 60
    },














    containerbg: {
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 0.5,
        display: 'flex',
        zIndex: 99
    },

})