import { StyleSheet, Dimensions } from "react-native";

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;
export default styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imageClose: {
        height: 32,
        width: 32,
        margin: 25,
        resizeMode: 'contain',
    },
    qualification: {
        height: 42,
        width: 42,
        resizeMode: 'contain',
        marginRight: 19
    },
    box: {
        height: box_height,
    },
    boxOne: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flex: .8,
    },
    boxTwo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,

    },
    boxTwo__textBold: {
        fontSize: 24,
        lineHeight: 28,
        color: '#FFFF',
        textAlign: 'center',
        marginBottom: 27,
        fontWeight: 'bold'
    },
    boxTwo__textNormal: {
        fontSize: 18,
        lineHeight: 21,
        color: '#FFFF',
        textAlign: 'center',
        fontWeight: 'normal',
        width: 212
    },
    boxThree: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

});