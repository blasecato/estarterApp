import React, { useState } from 'react';
import { View, Drawer } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { mapStyle } from './constans';
import MapView from 'react-native-maps';
import styles from './Home.styles';
import ModalNuevaRuta from './../../components/ModalNuevaRuta/ModalNuevaRuta';
import ModalCompartirRuta from './../../components/ModalRutaCompartida/ModalRutaCompartida';
import SlidingPanelRutes from '../../components/SlidingPanelRutes/SlidingPanelRutes';

export default function Home({ navigation }) {

    const [modalNuevaRuta, setModalNuevaRuta] = useState(false)
    const [modalCompartirRuta, setModalCompartirRuta] = useState(false)
    const [selected, setSelected] = useState(0)

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.mapStyle}
                customMapStyle={mapStyle}
            />
            <View style={{ height: 39, width: 39, top: 30, backgroundColor: 'transparent', borderRadius: 100, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', position: 'absolute', zIndex: 1, margin: 20 }}>
                <TouchableOpacity style={{
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
                }} onPress={() => navigation.openDrawer()}>
                    <Image style={{ resizeMode: 'cover' }} source={require('./../../../assets/menu.png')} />
                </TouchableOpacity>
            </View>
            <SlidingPanelRutes setModalCompartirRuta={setModalCompartirRuta} setModalNuevaRuta={setModalNuevaRuta} />
            <ModalNuevaRuta hidden={modalNuevaRuta} setHidden={setModalNuevaRuta}></ModalNuevaRuta>
            <ModalCompartirRuta hidden={modalCompartirRuta} setModalCompartirRuta={setModalCompartirRuta} ></ModalCompartirRuta>
        </View >
    )
}




