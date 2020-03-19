import { StyleSheet, Dimensions } from "react-native";

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default styles = StyleSheet.create({
    // containerbg: {
    //     height: box_height,
    //     backgroundColor: '#000000',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flex: 1,
    // },
    bg: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // viewClose: {
    //     flex: 0.5,
    //     backgroundColor: '#2196F3',
    //     width: 315,
    //     alignItems: 'flex-end',
    //     justifyContent: 'flex-start',
    // },
    imageClose: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
       
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
        flex:1
    },
});