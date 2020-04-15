import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../scenes/Login/Login';
import Splash from '../scenes/Splash/Splash';
import Onboarding from '../scenes/Onboarding/Onboarding';
import Home from '../scenes/Home/Home';
import ModalCodeQr from '../components/ModalCodeQr/ModalCodeQr';
import ModalQualification from './../components/ModalQualification/ModalQualification';
/* import ModalAviso from './../components/ModalAviso/ModalAviso'; */
import ModalNuevaRuta from '../components/ModalNuevaRuta/ModalNuevaRuta';
import ModalCompartirRuta from '../components/ModalRutaCompartida/ModalRutaCompartida';


import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { Button, Text, Form, Item, Input, View, } from 'native-base';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const tab = 1

export default function navigator() {

	const [modalCodeQr, setModalCodeQr] = useState(false)
	const [profile, setProfile] = useState(false)
	const [editProfile, setEditProfile] = useState(false)
	const [modalNuevaRuta, setModalNuevaRuta] = useState(false)
	const [modalCompartirRuta, setModalCompartirRuta] = useState(false)
	const [newRuta, setNewRuta] = useState(false)


	return (
		<NavigationContainer >

			<Drawer.Navigator drawerStyle={{
				backgroundColor: '#001324D4',
				width: 260,
				display: 'flex',
			}} initialRouteName="Login" drawerContent={props =>
				<DrawerContentScrollView style={{
					display: 'flex',
					flexDirection: 'column'
				}} {...props}>
					<View style={{ width: '100%', alignItems: 'center', marginTop: 34, marginBottom: 22 }}>
						<Image
							source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1585027651/logoMenu.png' }}
							style={{
								height: 51,
								width: 163,
								resizeMode: 'contain'
							}}
						/>
					</View>
					{!profile &&
						<>
							<View style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',

							}}>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 100
								}} />

								<TouchableOpacity style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}} onPress={() => { setProfile(true) }}>
									<Image style={{ resizeMode: 'cover', width: 74, height: 12, marginLeft: 12, marginRight: 8 }} source={require('./../../assets/editProfile.png')} />
									<Image style={{ resizeMode: 'cover', width: 30, height: 30, marginRight: 8 }}
										source={require('./../../assets/edit.png')}
									/>
								</TouchableOpacity>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 114
								}} />
							</View>
							<DrawerItemList labelStyle={{ color: 'white', fontSize: 17, fontWeight: '300', lineHeight: 20, fontStyle: 'normal', fontFamily: 'Ubuntu', }}
								activeBackgroundColor={{ color: '#001324' }}
								itemStyle={{ marginLeft: 28 }} {...props} />
							<TouchableOpacity
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									marginLeft: 38,
									height: 46
								}}
								onPress={() => {
									setModalNuevaRuta(true)
								}}
							>
								<Text style={{
									color: '#FFFF',
									fontFamily: 'Ubuntu',
									fontSize: 17,
									fontWeight: '300',
									lineHeight: 20,
									fontStyle: 'normal'
								}}>
									Vincular ruta
							</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									marginLeft: 38,
									height: 46
								}}
								onPress={() => {
									setModalCompartirRuta(true)
								}}
							>
								<Text style={{
									color: '#FFFF',
									fontFamily: 'Ubuntu',
									fontSize: 17,
									fontWeight: '300',
									lineHeight: 20,
									fontStyle: 'normal'
								}}>
									Compartir mi vehículo
							</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									marginLeft: 36,
									marginBottom: 15,
									marginTop: 28
								}}>
								<Image style={{ resizeMode: 'cover', width: 53, height: 53 }} source={require('./../../assets/soporte.png')} />
								<Text style={{
									color: '#FFFF',
									fontFamily: 'Ubuntu',
									fontSize: 17,
									fontWeight: '300',
									lineHeight: 20,
									fontStyle: 'normal',
									marginLeft: 13,
								}}>Soporte</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => { setModalCodeQr(!modalCodeQr) }}
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									marginLeft: 36,
								}}
							>
								<Image style={{ resizeMode: 'cover', width: 53, height: 53 }} source={require('./../../assets/qr.png')} />
								<Text style={{
									color: '#FFFF',
									fontFamily: 'Ubuntu',
									fontSize: 17,
									fontWeight: '300',
									lineHeight: 20,
									fontStyle: 'normal',
									marginLeft: 13,
								}}>Código QR</Text>
							</TouchableOpacity>

							<TouchableOpacity style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: '60%'
							}}>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 28
								}} />
								<Image style={{ resizeMode: 'cover', marginLeft: 12 }} source={require('./../../assets/closeSesion.png')} />
							</TouchableOpacity>
						</>
					}

					<ModalNuevaRuta hidden={modalNuevaRuta} setHidden={setModalNuevaRuta}></ModalNuevaRuta>
					<ModalCompartirRuta hidden={modalCompartirRuta} setModalCompartirRuta={setModalCompartirRuta} setNewRuta={setNewRuta}></ModalCompartirRuta>

					{profile && !editProfile &&
						<>
							<View style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								marginBottom: 18,
							}}>
								<View style={{ width: 80, height: 30, backgroundColor: '#ffff', alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 50, borderTopRightRadius: 50 }}>
									<Image style={{ resizeMode: 'cover', width: 58, height: 19 }}
										source={require('./../../assets/convergys.png')} />
								</View>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 30
								}} />
								<View style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}>
									<TouchableOpacity onPress={() => { setProfile(false) }}>
										<Image style={{ resizeMode: 'cover', width: 30, height: 30, marginLeft: 12, marginRight: 8 }}
											source={require('./../../assets/back.png')} />
									</TouchableOpacity>
									<Image style={{ resizeMode: 'cover', width: 54, height: 12, marginRight: 8 }}
										source={require('./../../assets/text-back.png')} />
								</View>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 114
								}} />
							</View>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'flex-end',
									justifyContent: 'center'
								}}>
								<View style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									width: 124, height: 124,
									borderWidth: 1,
									borderColor: '#ffff',
									borderRadius: 100
								}}>
									<Image style={{ resizeMode: 'cover', width: 114, height: 114 }}
										source={require('./../../assets/perfil.png')} />
								</View>
								<TouchableOpacity onPress={() => { setEditProfile(true) }}>
									<Image style={{ resizeMode: 'cover', width: 20, height: 20 }}
										source={require('./../../assets/lapiz.png')} />
								</TouchableOpacity>
							</View>
							<View style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',

							}}>
								<Text style={{
									color: '#FFFF',
									fontStyle: 'normal',
									fontWeight: '500',
									fontSize: 17,
									lineHeight: 20,
									marginBottom: 7,
									marginTop: 22,
									fontFamily: 'Ubuntu',
								}}>Michael Martinez</Text>
								<Text style={{
									color: '#FFFF',
									fontStyle: 'normal',
									fontWeight: '300',
									fontSize: 15,
									lineHeight: 17,
									fontFamily: 'Ubuntu',
									marginTop: 5,
								}}>322 7409090</Text>
								<Text style={{
									color: '#0FE6F3',
									fontStyle: 'normal',
									fontWeight: '300',
									fontSize: 15,
									fontFamily: 'Ubuntu',
									lineHeight: 17,
									marginTop: 15,
								}}>michael@estarter.co</Text>
							</View>
							<TouchableOpacity
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',

								}}
							>
								<Text style={{
									color: '#FFFF',
									fontStyle: 'normal',
									fontWeight: '300',
									fontSize: 13,
									lineHeight: 15,
									marginTop: 40,
									fontFamily: 'Ubuntu',
								}}>Cambiar contraseña</Text>
							</TouchableOpacity>
							<TouchableOpacity style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: '98%'
							}}>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 28
								}} />
								<Image style={{ resizeMode: 'cover', marginLeft: 12 }} source={require('./../../assets/closeSesion.png')} />
							</TouchableOpacity>
						</>
					}
					{editProfile &&
						<>
							<View style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								marginBottom: 18,
							}}>
								<View style={{ width: 80, height: 30, backgroundColor: '#ffff', alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 50, borderTopRightRadius: 50 }}>
									<Image style={{ resizeMode: 'cover', width: 58, height: 19 }}
										source={require('./../../assets/convergys.png')} />
								</View>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 30
								}} />
								<View style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}>
									<TouchableOpacity onPress={() => { setEditProfile(false) }}>
										<Image style={{ resizeMode: 'cover', width: 30, height: 30, marginLeft: 12, marginRight: 8 }}
											source={require('./../../assets/back.png')} />
									</TouchableOpacity>
									<Image style={{ resizeMode: 'cover', width: 54, height: 12, marginRight: 8 }}
										source={require('./../../assets/text-back.png')} />
								</View>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 114
								}} />
							</View>

							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'flex-end',
									justifyContent: 'center'
								}}>
								<View style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									width: 124, height: 124,
									borderWidth: 1,
									borderColor: '#ffff',
									borderRadius: 100
								}}>
									<Image style={{ resizeMode: 'cover', width: 114, height: 114 }} source={require('./../../assets/perfil.png')} />
								</View>
							</View>
							<View style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',

							}}>
								<Form style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									padding: 25,
								}}>
									<Item regular style={{
										borderWidth: 0,
										borderColor: 'transparent',
										height: 40,
										maxWidth: '100%',
										width: '100%',
										paddingRight: 0,
										paddingLeft: 0,
										marginBottom: 10,
									}}>
										<Input
											style={{
												textAlign: 'center',
												borderBottomWidth: 1,
												borderColor: '#0fe6f330',
												backgroundColor: 'transparent',
												padding: 11,
												maxWidth: '100%',
												width: '98%',
												flex: 0,
												color: '#FFFF',
												fontStyle: 'normal',
												fontWeight: '500',
												fontSize: 17,
												lineHeight: 20,
												fontFamily: 'Ubuntu'
											}}
											placeholderTextColor="#FFFF"
											placeholder='Michael Martinez' />
									</Item>
									<Item regular style={{
										borderWidth: 0,
										borderColor: 'transparent',
										height: 40,
										maxWidth: '100%',
										width: '100%',
										paddingRight: 0,
										paddingLeft: 0
									}} last>
										<Input
											style={{
												textAlign: 'center',
												borderBottomWidth: 1,
												borderColor: '#0fe6f330',
												backgroundColor: 'transparent',
												padding: 11,
												maxWidth: '100%',
												width: '98%',
												flex: 0,
												color: '#FFFF',
												fontFamily: 'Ubuntu',
												fontStyle: 'normal',
												fontWeight: '300',
												fontSize: 15,
												lineHeight: 17,
											}}
											placeholderTextColor="#FFFF"
											placeholder='322 7409090' />
									</Item>
								</Form>
								<Text style={{
									color: '#0FE6F3',
									fontStyle: 'normal',
									fontWeight: '300',
									fontSize: 15,
									lineHeight: 17,
									fontFamily: 'Ubuntu',
									marginTop: 15,
								}}>michael@estarter.co</Text>
							</View>
							<TouchableOpacity
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',

								}}>
								<Text style={{
									color: '#FFFF',
									fontStyle: 'normal',
									fontWeight: '300',
									fontSize: 13,
									lineHeight: 15,
									marginTop: 40,
									fontFamily: 'Ubuntu'
								}}>Cambiar contraseña</Text>
							</TouchableOpacity>

							<TouchableOpacity style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: '72%'
							}}>
								<View style={{
									borderWidth: 1,
									borderColor: '#5695f85C',
									width: 28
								}} />
								<Image style={{ resizeMode: 'cover', marginLeft: 12 }} source={require('./../../assets/closeSesion.png')} />
							</TouchableOpacity>
						</>
					}
				</DrawerContentScrollView>
			}>
				<Drawer.Screen name="Mis Rutas" component={Home} />
				{/* <Drawer.Screen name="Vincular Ruta" component={ModalNuevaRuta} /> */}
				<Drawer.Screen name="Onboarding" component={Onboarding} />
				{/* <Drawer.Screen name="Compartir mi vehículo" component={ModalQualification} /> */}
				<Drawer.Screen style={{ color: '#333', backgroundColor: '#333' }} name="Login" component={Login} />
			</Drawer.Navigator>
			<ModalCodeQr hidden={modalCodeQr} setHidden={setModalCodeQr} ></ModalCodeQr>
		</NavigationContainer >
	);
}

