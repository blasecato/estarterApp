import React, { useState } from 'react';
import { View, Drawer, Container } from 'native-base';
import { Image, TouchableOpacity, Text, Modal } from 'react-native';
import { mapStyle } from './constans';
import MapView from 'react-native-maps';
import styles from './Home.styles';
import ModalNuevaRuta from './../../components/ModalNuevaRuta/ModalNuevaRuta';
import ModalCompartirRuta from './../../components/ModalRutaCompartida/ModalRutaCompartida';
import SlidingPanelRutes from '../../components/SlidingPanelRutes/SlidingPanelRutes';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {

    const [modalNuevaRuta, setModalNuevaRuta] = useState(false)
    const [modalCompartirRuta, setModalCompartirRuta] = useState(false)
    const [routeActive, setModalrouteActive] = useState(false)
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
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menú__button} onPress={() => navigation.openDrawer()}>
                    <Image style={{ resizeMode: 'cover' }} source={require('./../../../assets/menu.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => { setModalrouteActive(true) }} style={styles.route}>
                <View style={styles.route__one}>
                    <View style={{ marginRight: 5 }}>
                        <Image style={styles.route__imgOne} source={require('./../../../assets/disponible.png')} />
                        {/* <Image style={styles.route__imgOne} source={require('./../../../assets/finished.png')} /> */}
                    </View>
                    <View style={styles.route__label}>
                        <Text style={styles.route__text}>RE1</Text>
                    </View>
                </View>
                <View style={styles.route__two}>
                    <Image style={styles.route__imgTwo} source={require('./../../../assets/activa.png')} />
                </View>
            </TouchableOpacity>
            {/* <View style={styles.whatsapp}>
                <View style={styles.whatsapp__one}>
                    <View style={{ marginRight: 5 }}>
                        <Image style={styles.route__imgOne} source={require('./../../../assets/wa.png')} />
                    </View>
                </View>
            </View> */}



            <SlidingPanelRutes setModalCompartirRuta={setModalCompartirRuta} setModalNuevaRuta={setModalNuevaRuta} />
            <ModalNuevaRuta hidden={modalNuevaRuta} setHidden={setModalNuevaRuta}></ModalNuevaRuta>
            <ModalCompartirRuta hidden={modalCompartirRuta} setModalCompartirRuta={setModalCompartirRuta} ></ModalCompartirRuta>

            < Modal
                animationType="fade"
                transparent={true}
                visible={routeActive} >
                <Container style={styles.containerbg}>
                    <View
                        style={{ width: 370, height: 100, backgroundColor: '#044C74', borderRadius: 5, display: 'flex', flexDirection: 'row' }}>
                        <View
                            style={{ width: 104, height: 100, backgroundColor: '#ffff', borderBottomLeftRadius: 5, borderTopLeftRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ width: 102, height: 53 }} source={require('./../../../assets/30.png')} />

                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text style={{
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: 11,
                                lineHeight: 13,
                                textAlign: 'center'
                            }}>
                                <Image style={{ width: 36, height: 36 }} source={require('./../../../assets/profile.png')} />
                                        Yeison Jimenez</Text>
                            <Text>Conductor</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <View style={{
                                    borderWidth: 1,
                                    width: 141,
                                    height: 0,
                                    borderColor: '#c4c4c44F',
                                }} />
                                <View style={{
                                    backgroundColor: '#082249',
                                    width: 63,
                                    height: 29,
                                    borderRadius: 5,
                                    textAlign: 'center',
                                }}>
                                    <Text style={{
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        fontSize: 11,
                                        lineHeight: 13,
                                        textAlign: 'center',
                                        color: '#ffff',
                                    }}>DHM-170</Text>
                                    <Text style={{
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        fontSize: 9,
                                        lineHeight: 13,
                                        textAlign: 'center',
                                        color: '#ffff',
                                    }}>Bogotá</Text>
                                </View>
                            </View>


                            <Text> <Image style={{ width: 11, height: 12, marginRight: 5 }} source={require('./../../../assets/barras.png')} />Hace 5 minutos</Text>
                        </View>

                    </View>


                </Container>
            </Modal >
        </View >
    )
}


