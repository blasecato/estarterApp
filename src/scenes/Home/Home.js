import React, { useState } from 'react';
import { Container, Button, Text, View, Form, Item, Input, Label, Segment, Header, Left, Body, Right, Icon, Title, Content, List, ListItem, } from 'native-base';
import { Image, Modal, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { mapStyle } from './constans';
import { LinearGradient } from 'expo-linear-gradient';
import MapView from 'react-native-maps';
import styles from './Home.styles';
import SlidingUpPanel from 'rn-sliding-up-panel';
import ModalNuevaRuta from './../../components/ModalNuevaRuta/ModalNuevaRuta';
import ModalCompartirRuta from './../../components/ModalRutaCompartida/ModalRutaCompartida';

const { height, width } = Dimensions.get('window')

export default class App extends React.Component {

    state = {
        activeTab: 1,
        modalNuevaRuta: false,
        modalCompartirRuta: false,
        selected: 0
    }

    static defaultProps = {
        draggableRange: {
            top: height - 50,
            bottom: 52,
            start: 0,
            end: 0,
        }
    }

    _draggedValue = new Animated.Value(300)



    render() {
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
                <View style={{ height: 39, width: 39, backgroundColor: 'transparent', borderRadius: 100, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', position: 'absolute', zIndex: 1, margin: 20 }}>
                    <TouchableOpacity style={{ height: 39, width: 39, backgroundColor: '#FFFF', borderRadius: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 99 }}>
                        <Image style={{ resizeMode: 'cover' }} source={require('./../../../assets/menu.png')} />
                    </TouchableOpacity>
                </View>
                <SlidingUpPanel
                    style
                    visible
                    startCollapsed
                    toValue
                    showBackdrop={false}
                    allowMomentum={false}
                    onDragStart={c => {
                        this.props.draggableRange.start = c;
                    }}
                    onDragEnd={c => {
                        let positio = (this.props.draggableRange.start + height / 8 < c) ? height : (this.props.draggableRange.start > c + height / 8) ? 300 : height;
                        this.setState.panel = this._panel;
                        this._panel.show(positio)
                    }}
                    draggableRange={this.props.draggableRange}
                    ref={c => this._panel = c}>
                    <LinearGradient
                        colors={['#f5f5f500', '#1b7bd7E8', '#03325F']}
                        style={{ height: '100%', width: '100%' }}>
                        <Segment style={styles.tab} >
                            <TouchableOpacity
                                style={styles.activeTab}
                                first onPress={() => this.setState({ activeTab: 1 })}>
                                <Text style={styles.activeTab__text} >Mis rutas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inactiveTab}
                                onPress={() => this.setState({ activeTab: 2 })}>
                                <Text style={styles.inactiveTab__text}>Compartidas
                                <Image source={require('./../../../assets/down.png')}></Image>
                                </Text>
                            </TouchableOpacity>
                        </Segment>
                        <View style={{
                            backgroundColor: '#ffff', flex: 1,
                            position: 'relative',
                            marginHorizontal: 20,
                            textAlign: 'center',
                            borderRadius: 5
                        }}>
                            {this.state.activeTab == 1 &&
                                < View >
                                    <Text style={styles.text__info}> Ingresa el código que te han asignado en tu empresa.</Text>
                                    <Form style={styles.form}>
                                        <Item regular style={styles.item} last>
                                            <Input
                                                style={styles.input}
                                                placeholderTextColor="#BEBEBE"
                                                placeholder='Ejemplo: EST4RT3' />
                                        </Item>
                                        <LinearGradient
                                            colors={['#044C74', '#348AC7']}
                                            style={{ marginLeft: 7 }}>
                                            <Button style={styles.buttonVinc}>
                                                <Text uppercase={false} style={styles.buttonVinc__text}> VINCULAR </Text>
                                            </Button>
                                        </LinearGradient>
                                    </Form>
                                    <Button title='Hide' onPress={() => this._panel.hide()} />
                                </View>
                            }
                            {this.state.activeTab == 2 &&
                                <List style={styles.list} >
                                    <ListItem onPress={() => this.setState({ modalNuevaRuta: true })} style={styles.listItem}>
                                        <Image
                                            style={styles.imageList} source={require('./../../../assets/red.png')}></Image>
                                        <View style={styles.viewList}>
                                            <Text style={styles.textList__routes}>RE1</Text>
                                        </View>
                                        <Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
                                    </ListItem>
                                    <ListItem style={styles.listItem}>
                                        <Image
                                            style={styles.imageList} source={require('./../../../assets/yellow.png')}></Image>
                                        <View style={styles.viewList}>
                                            <Text style={styles.textList__routes}>RE1</Text>
                                        </View>
                                        <Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
                                    </ListItem>
                                    <ListItem style={styles.listItem}>
                                        <Image
                                            style={styles.imageList} source={require('./../../../assets/green.png')}></Image>
                                        <View style={styles.viewList}>
                                            <Text style={styles.textList__routes}>RE1</Text>
                                        </View>
                                        <Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
                                    </ListItem>
                                </List>
                                // <View>
                                //     <Text style={styles.text__info}>Utiliza esta sección para compartir tu vehículo con tus compañeros de trabajo.</Text>
                                //     <View style={styles.viewButton}>
                                //         <LinearGradient
                                //             colors={['#044C74', '#348AC7']}>
                                //             <Button style={styles.buttonAna}>
                                //                 <Text uppercase={false} onPress={() => this.setState({ modalCompartirRuta: true })} style={styles.buttonAna__text}> AÑADIR RUTA </Text>
                                //             </Button>
                                //         </LinearGradient>
                                //     </View>
                                //     <Button title='Hide' onPress={() => this._panel.hide()} />
                                // </View>
                            }
                        </View>
                    </LinearGradient>
                </SlidingUpPanel>
                <ModalNuevaRuta hidden={this.state.modalNuevaRuta}></ModalNuevaRuta>
                <ModalCompartirRuta hidden={this.state.modalCompartirRuta}></ModalCompartirRuta>
            </View >

        )
    }
}



