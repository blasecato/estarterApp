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
        height: 45,
        width: 45,
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
    route__whatsapp: {
        resizeMode: 'cover',
        width: 48,
        height: 48
    },
    route__label: {
        backgroundColor: '#044C74',
        width: 45,
        height: 20,
        borderRadius: 5,
        textAlign: 'center',
        fontFamily: 'Ubuntu'
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
        fontFamily: 'Ubuntu'
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
        left: '78%'
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
    notification: {
        width: 370,
        height: 100,
        backgroundColor: '#044C74',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20%'
    },
    notification__img: {
        width: 104,
        height: 100,
        backgroundColor: '#ffff',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewProfile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewProfile__img: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        marginLeft: 5
    },
    viewProfile__text: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        color: '#ffff',
        fontFamily: 'Ubuntu'
    },
    viewProfile__rol: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 14,
        textAlign: 'left',
        color: '#0FE6F3',
        marginLeft: '18%',
        fontFamily: 'Ubuntu'
    },
    linearStyle: {
        borderWidth: 1,
        width: 141,
        height: 0,
        borderColor: '#c4c4c44F',
        marginLeft: '18%'
    },
    viewLabel: {
        backgroundColor: '#082249',
        width: 63,
        height: 29,
        borderRadius: 5,
        textAlign: 'center',
    },
    viewLabel__placa: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 11,
        lineHeight: 13,
        textAlign: 'center',
        color: '#ffff',
        fontFamily: 'Ubuntu'
    },
    viewLabel__city: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 9,
        lineHeight: 13,
        textAlign: 'center',
        color: '#ffff',
        fontFamily: 'Ubuntu'
    },
    viewTime: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: -9,
        marginLeft: 10
    },
    viewTime__img: {
        width: 11,
        height: 12,
        resizeMode: 'cover'
    },
    viewTime__text: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 11,
        lineHeight: 13,
        textAlign: 'left',
        color: '#ffff',
        alignItems: 'center',
        marginLeft: 5,
        fontFamily: 'Ubuntu'
    },
    routeInactive: {
        width: 370,
        height: 100,
        backgroundColor: '#f3f3f3',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20%'
    },
    routeInactive__img: {
        width: 104,
        height: 100,
        backgroundColor: '#ffff',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    routeInactive__text: {
        textAlign: 'left',
        width: 230,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        color: '#4E4E4E',
        marginBottom: 10,
        fontFamily: 'Ubuntu'
    },
    routeInactive__info: {
        textAlign: 'left',
        width: 230,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 11,
        lineHeight: 13,
        display: 'flex',
        alignItems: 'center',
        color: '#4E4E4E',
        fontFamily: 'Ubuntu'
    },
    marker: {
        height: 50,
        width: 50,
        top: '40%',
        left: '42%',
        backgroundColor: 'transparent',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
    },
    marker__button: {
        height: 39,
        width: 39,
        justifyContent: 'center',
    },
    routes: {
        height: 50,
        width: 50,
        top: '30%',
        left: '45%',
        backgroundColor: 'transparent',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
    },
    routes__button: {
        height: 15,
        width: 33,
        justifyContent: 'center',
    },
    containerShared: {
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flex: 0.55,
        display: 'flex',
        zIndex: 99,
        marginHorizontal: 0
    },
    routeShared: {
        width: 280,
        height: 47,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    routeShared__img: {
        width: 40,
        height: 47,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    routeShared__text: {
        textAlign: 'left',
        width: 134,
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 11,
        display: 'flex',
        alignItems: 'center',
        color: '#4E4E4E',
        fontFamily: 'Ubuntu'
    },
    routeShared__info: {
        textAlign: 'left',
        width: 134,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        color: '#4E4E4E',
        fontFamily: 'Ubuntu'
    }
})