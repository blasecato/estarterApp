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
import ModalAviso from '../../components/ModalAviso/ModalAviso';

export default function Home({ navigation }) {

    const [modalNuevaRuta, setModalNuevaRuta] = useState(false)
    const [modalCompartirRuta, setModalCompartirRuta] = useState(false)
    const [modalAviso, setModalAviso] = useState(true);
    const [routeActive, setModalrouteActive] = useState(false)
    const [routeInactive, setModalrouteInactive] = useState(false)
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
            <TouchableOpacity onPress={() => { setModalrouteInactive(true) }} style={styles.route}>
                <View style={styles.route__one}>
                    <View style={{ marginRight: 5 }}>
                        {/* <Image style={styles.route__imgOne} source={require('./../../../assets/disponible.png')} /> */}
                        <Image style={styles.route__imgOne} source={require('./../../../assets/finished.png')} />
                    </View>
                    <View style={styles.route__label}>
                        <Text style={styles.route__text}>RE1</Text>
                    </View>
                </View>
                <View style={styles.route__two}>
                    {/* <Image style={styles.route__imgTwo} source={require('./../../../assets/activa.png')} /> */}
                    <Image style={styles.route__imgTwo} source={require('./../../../assets/inactiva.png')} />
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
            <ModalAviso hidden={modalAviso} setHidden={setModalAviso}></ModalAviso>
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={routeActive} >
                <Container style={styles.containerbg}>
                    <View
                        style={styles.notification}>
                        <View
                            style={styles.notification__img}>
                            <Image style={{ width: 102, height: 53 }} source={require('./../../../assets/30.png')} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <View style={styles.viewProfile}>
                                <Image style={styles.viewProfile__img} source={require('./../../../assets/profile.png')} />
                                <Text style={styles.viewProfile__text}> Yeison Jimenez</Text>
                            </View>
                            <Text
                                style={styles.viewProfile__rol}>Conductor</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <View style={styles.linearStyle} />
                                <View style={styles.viewLabel}>
                                    <Text style={styles.viewLabel__placa}>DHM-170</Text>
                                    <Text style={styles.viewLabel__city}>Bogotá</Text>
                                </View>
                            </View>
                            <View style={styles.viewTime}>
                                <Image style={styles.viewTime__img} source={require('./../../../assets/barras.png')} />
                                <Text style={styles.viewTime__text}> Hace 5 minutos</Text>
                            </View>
                        </View>
                    </View>
                </Container>
            </Modal>

            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={routeInactive} >
                <Container style={styles.containerbg}>
                    <View
                        style={styles.routeInactive}>
                        <View
                            style={styles.routeInactive__img}>
                            <Image style={{ width: 102, height: 53 }} source={require('./../../../assets/black.png')} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', display: 'flex', justifyContent: 'center', marginLeft: 17 }}>
                            <Text style={styles.routeInactive__text}>Ruta Inactiva</Text>
                            <Text style={styles.routeInactive__info}>Solo podras ver la información de tu ruta cuando este disponible.</Text>
                        </View>
                    </View>
                </Container>
            </Modal> */}

            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={true} >
                <Container style={styles.containerShared}>
                    <View
                        style={styles.routeShared}>
                        <View style={styles.routeShared__img}>
                            <Image style={{ width: 32, height: 32 }} source={require('./../../../assets/carro.png')} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column',  justifyContent: 'center', marginLeft: 17 }}>
                            <Text style={styles.routeShared__text}>Tienes una ruta compartida</Text>
                            <Text style={styles.routeShared__info}>Usme - Convergys 127</Text>
                        </View>
                        <View style={{ width: 70, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                            <Image style={{ width: 16, height: 16 }} source={require('./../../../assets/editar.png')} />
                            <Image style={{ width: 12, height: 16 }} source={require('./../../../assets/delete.png')} />
                        </View>
                    </View>
                </Container>
            </Modal> */}


        </View >
    )
}


