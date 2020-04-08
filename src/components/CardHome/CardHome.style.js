import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        height: '50%',
        width: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        top: '50%'
    },
    container__gradient: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 99
    },
    container_tab: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        display: 'flex',
        justifyContent: 'center',
        marginVertical: -5
    },
    view_tab: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button__ubication: {
        width: 40,
        height: 40,
        marginBottom: 20,
        backgroundColor: '#ffff',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tab: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'

    },
    activeTab: {
        borderTopColor: '#044C74',
        borderTopWidth: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: '50%',
        zIndex: 99,
        elevation: 99,
        height: 45,
        backgroundColor: '#ffff',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    activeTab__text: {
        color: '#044C74',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    activeTab__img: {
        width: 0,
        height: 0,
    },
    inactiveTab: {
        backgroundColor: '#F8F9FA',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: '48%',
        height: 36,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    inactiveTab__text: {
        color: '#AEAEAE',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        marginRight: 10

    },
    inactiveTab__img: {
        width: 11,
        height: 7,
        resizeMode: 'contain',
        marginRight: 5

    },
    text__info: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        maxWidth: 300,
        lineHeight: 20,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 26,
    },
    container__card:{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '90%', 
        height: 238, 
        borderRadius: 5
    },
    
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',

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
    buttonAna: {
        minWidth: '0%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'transparent',
        elevation: 0
    },
    buttonAna__text: {
        color: '#FFFF',
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '500',
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
        minWidth: '70%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'transparent',
        elevation: 0
    },
    buttonVinc__text: {
        color: '#FFFF',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        width: '90%'
    },
    listItem: {
        borderColor: 'transparent',
        width: '100%'
    },
    imageList: {
        marginRight: 7,
    },
    viewList: {
        backgroundColor: '#044C74',
        width: 45,
        height: 20,
        borderRadius: 5,
        textAlign: 'center'
    },
    textList__routes: {
        color: '#ffff',
        width: 45,
        height: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 14,
    },
    textList__info: {
        color: '#565656',
        marginLeft: 5,
        textAlign: 'center',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 16,
    },


})