import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    containerbg: {
        display: 'flex',
     
        flexDirection: 'column',
        position: "relative",
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        backgroundColor: 'transparent',

        width: '100%',
        flex: 1,
        position: 'relative'
    },
    text__info: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 29,
        marginBottom: 15
    },
    form: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        padding: 25
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
        minWidth: '80%',
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
    list: {
        display: 'flex',
        alignItems: 'center'
    },
    listItem: {
        borderColor: 'transparent',
    },
    imageList: {
        marginRight: 14,
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
        marginLeft: 10,
        textAlign: 'center',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 16,
    },
    tab: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    activeTab: {
        backgroundColor: '',
        borderTopColor: '#044C74',
        borderTopWidth: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: 127,
        height: 46,
        backgroundColor: '#ffffffF5',
        marginLeft: 20
    },
    activeTab__text: {
        color: '#044C74',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
    },
    inactiveTab: {
        backgroundColor: '#ffffffF6',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: 127,
        height: 36,
        marginTop: 10,

    },
    inactiveTab__text: {
        color: '#AEAEAE',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
    },
})