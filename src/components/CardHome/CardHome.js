import React, { useState } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { Image, TouchableOpacity, Animated, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import { Button, Text, View, Form, Item, Input, Segment, List, ListItem, Drawer, Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './CardHome.style';

export default function CardHome({ setModalNuevaRuta, setModalCompartirRuta }) {

	const [activeTab, setActiveTab] = useState(1)
	const [loading, setLoading] = useState(false)
	const [succes, setSucces] = useState(false)

	return (
		<Container style={styles.container}>
			<LinearGradient
				colors={['#03325F00', '#1b7bd7E8', '#03325F']}
				style={styles.container__gradient}>
				<View style={styles.container_tab}>
					<View style={{ width: ' 90%', flexDirection: 'flex-end', justifyContent: 'flex-end', alignItems: 'flex-end', marginHorizontal: '10%' }}>
						<TouchableOpacity style={styles.button__ubication}>
							<Image source={require('./../../../assets/marker.png')}></Image>
						</TouchableOpacity>
					</View>
					<Segment style={styles.tab} >

						<View style={{}, activeTab == 2 ? styles.inactiveTab : styles.activeTab} >
							<TouchableOpacity style={styles.view_tab}
								onPress={() => {
									setTimeout(() => {
										setActiveTab(1)
									}, 100);
								}}>
								<Text style={activeTab == 1 ? styles.activeTab__text : styles.inactiveTab__text}>Mis rutas
                                </Text>
								<Image style={activeTab == 1 ? styles.activeTab__img : styles.inactiveTab__img} source={require('./../../../assets/down.png')}></Image>
							</TouchableOpacity>
						</View>
						<View style={{}, activeTab == 1 ? styles.inactiveTab : styles.activeTab} >
							<TouchableOpacity style={styles.view_tab}
								onPress={() => {
									setTimeout(() => {
										setActiveTab(2)
									}, 100);
								}}>
								<Text style={activeTab == 1 ? styles.inactiveTab__text : styles.activeTab__text}>Compartidas
                                </Text>
								<Image style={activeTab == 1 ? styles.inactiveTab__img : styles.activeTab__img} source={require('./../../../assets/down.png')}></Image>
							</TouchableOpacity>
						</View>

						{/* <TouchableOpacity
							style={{}, activeTab == 1 ? styles.inactiveTab : styles.activeTab}
							onPress={() => {
								setTimeout(() => {
									setActiveTab(2)
								}, 100);
							}}>
							<View style={styles.view_tab}>
								<Text style={activeTab == 1 ? styles.inactiveTab__text : styles.activeTab__text}>Compartidas
                                </Text>
								<Image style={activeTab == 1 ? styles.inactiveTab__img : styles.activeTab__img} source={require('./../../../assets/down.png')}></Image>
							</View>
						</TouchableOpacity> */}
					</Segment>
				</View>
				<Card style={styles.container__card}>
					<CardItem>
						<Body>
							{activeTab == 1 &&

								<View style={{ width: '100%' }} >
									{!loading &&
										<>
											<Text style={[styles.text__info, { marginBottom: 20, marginTop: 15 }]}>Ingresa el código que te han asignado en tu empresa.</Text>
											<Form style={styles.form}>
												<View style={{ width: '60%', maxWidth: '100%', }}>
													<Item regular style={styles.item} last>
														<Input
															style={styles.input}
															placeholderTextColor="#BEBEBE"
															placeholder='Ejemplo: EST4RT3' />
													</Item>
												</View>
												<LinearGradient
													colors={['#044C74', '#348AC7']}
													style={{ width: '40%' }}>
													<Button onPress={() => {
														setLoading(true)
														setTimeout(() => {
															setSucces(true)
														}, 2000);
													}} style={styles.buttonVinc}>
														<Text uppercase={false} style={styles.buttonVinc__text}> VINCULAR </Text>
													</Button>
												</LinearGradient>
											</Form>
										</>
									}

									{loading && !succes &&
										<>
											<ActivityIndicator size="large" color="#00ff00" />
											<Text style={styles.text__info}>
												Estamos validando tu código por favor espera unos segundos.
											</Text>
										</>
									}

									{/* {succes &&
										<>
											<Image
												style={styles.imageList} source={require('./../../../assets/msg.png')}></Image>
											<Text style={styles.text__info}>
												Tu código no coincide con nuestras bases de datos por favor contacta con soporte técnico.
                  		</Text>
										</>
									} */}

									{succes &&
										<View>
											<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', }}>
												<List style={styles.list} >
													<ListItem onPress={() => setModalNuevaRuta(true)} style={styles.listItem}>
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
													<ListItem onPress={() => setModalNuevaRuta(true)} style={styles.listItem}>
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
													<ListItem onPress={() => setModalNuevaRuta(true)} style={styles.listItem}>
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
											</ScrollView>
											<View style={{ flexGrow: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: -30 }}>
												<Image style={{ width: 40, height: 40, resizeMode: 'contain' }} source={require('./../../../assets/add.png')}></Image>
											</View>
										</View>
									}

								</View>
							}
							{activeTab == 2 &&

								<View style={{ width: '100%' }} >
									<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', width: '100%' }}>
										<List style={styles.list} >
											<ListItem onPress={() => setModalNuevaRuta(true)} style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/red.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
											<ListItem style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/yellow.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
											<ListItem style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/green.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
											<ListItem onPress={() => setModalNuevaRuta(true)} style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/red.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
											<ListItem style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/yellow.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
											<ListItem style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/green.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
											<ListItem onPress={() => setModalNuevaRuta(true)} style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/red.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
											<ListItem style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/yellow.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
											<ListItem style={styles.listItem}>
												<Image
													style={styles.imageList} source={require('./../../../assets/green.png')}></Image>
												<Text style={styles.textList__info}> Unicentro - Calle 100 - Calle 13 </Text>
											</ListItem>
										</List>
									</ScrollView>
									<View style={{ flexGrow: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: -30 }}>
										<TouchableOpacity onPress={() => { setModalCompartirRuta(true) }} style={[styles.box, styles.boxOne]}>
											<Image style={{ width: 40, height: 40, resizeMode: 'contain' }}
												source={require('./../../../assets/add.png')}>
											</Image>
										</TouchableOpacity>
									</View>
								</View>


								// <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								//     <Text style={styles.text__info}>Utiliza esta sección para compartir tu vehículo con tus compañeros de trabajo.</Text>
								//     <View style={styles.viewButton}>
								//         <LinearGradient
								//             colors={['#044C74', '#348AC7']}>
								//             <Button style={styles.buttonAna}>
								//                 <Text uppercase={false} onPress={() => setModalCompartirRuta(true)} style={styles.buttonAna__text}> AÑADIR RUTA </Text>
								//             </Button>
								//         </LinearGradient>
								//     </View>
								// </View>
							}
						</Body>
					</CardItem>
				</Card>
			</LinearGradient>
		</Container>
	);
}
