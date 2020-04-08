import React, { useState } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { Image, TouchableOpacity, Animated, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import { Button, Text, View, Form, Item, Input, Segment, List, ListItem, Drawer } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './SlidingPanelRutes.style';

export default function SlidingPanelRutes({ setModalNuevaRuta, setModalCompartirRuta }) {

	const [activeTab, setActiveTab] = useState(1)
	const [loading, setLoading] = useState(false)
	const [succes, setSucces] = useState(false)
	const _draggedValue = new Animated.Value(300)
	const { height, width } = Dimensions.get('window')
	let draggableRange = {
		top: height - 140,
		bottom: 230,
		start: 230,
		end: 0,
	}
	let _panel;

	return (
		<SlidingUpPanel
			style
			visible
			startCollapsed
			toValue
			showBackdrop={false}
			allowMomentum={true}
			friction={0.5}
			animatedValue={_draggedValue}
			onDragStart={c => {
				draggableRange.start = c;
			}}
			draggableRange={draggableRange}
			ref={c => _panel = c}
			onDragEnd={c => {
				let positio = (draggableRange.start + height / 10 < c) ? height : (draggableRange.start > c + height / 6) ? 230 : 230;
				_panel.show(positio)
			}}
		>
			<LinearGradient
				colors={['#f5f5f500', '#1b7bd7E8', '#03325F']}
				style={{ height: '100%', width: '100%' }}>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Segment style={styles.tab} >
						<TouchableOpacity
							style={{
								/*     position: 'absolute',
										left: 10, */
							}, activeTab == 2 ? styles.inactiveTab : styles.activeTab}
							first onPress={() => {
								setTimeout(() => {
									setActiveTab(1)
								}, 100);
							}}>
							<View style={{
								alignItems: 'center',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
								<Text style={activeTab == 1 ? styles.activeTab__text : styles.inactiveTab__text}>Mis rutas
                                </Text>
								<Image style={activeTab == 1 ? styles.activeTab__img : styles.inactiveTab__img} source={require('./../../../assets/down.png')}></Image>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								position: 'absolute',
								left: 125
							}, activeTab == 1 ? styles.inactiveTab : styles.activeTab}
							onPress={() => {
								setTimeout(() => {
									setActiveTab(2)
								}, 100);
							}}>
							<View style={{
								alignItems: 'center',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
								<Text style={activeTab == 1 ? styles.inactiveTab__text : styles.activeTab__text}>Compartidas
                                </Text>
								<Image style={activeTab == 1 ? styles.inactiveTab__img : styles.activeTab__img} source={require('./../../../assets/down.png')}></Image>
							</View>
						</TouchableOpacity>
					</Segment>
					<TouchableOpacity style={{
						width: 40,
						height: 40,
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
					}}>
						<Image source={require('./../../../assets/marker.png')}></Image>
					</TouchableOpacity>
				</View>

				<View style={{
					backgroundColor: '#ffff',
					position: 'relative',
					flex: 1,
					marginTop: -1,
					alignContent: 'center',
					marginHorizontal: 14,
					flexDirection: 'column',
					display: 'flex',
					textAlign: 'center',

				}}>
					{activeTab == 1 &&
						< View style={{ alignItems: 'center', display: 'flex', width: '100%', marginVertical: 20 }} >

							{!loading &&
								<>
									<Text style={[styles.text__info, { marginBottom: 20, marginTop: 15 }]}>Ingresa el código que te han asignado en tu empresa.</Text>
									<Form style={styles.form}>
										<View style={{
											width: '60%',
											maxWidth: '100%',
										}}>
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
											}}
												style={styles.buttonVinc}>
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
								<>
									<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
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
										</List>
									</ScrollView>
								</>
							}

						</View>
					}
					{activeTab == 2 &&
						<View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							{/* <Text style={styles.text__info}>Utiliza esta sección para compartir tu vehículo con tus compañeros de trabajo.</Text>
							<View style={styles.viewButton}>
								<LinearGradient
									colors={['#044C74', '#348AC7']}>
									<Button style={styles.buttonAna}>
										<Text uppercase={false} onPress={() => setModalCompartirRuta(true)} style={styles.buttonAna__text}> AÑADIR RUTA </Text>
									</Button>
								</LinearGradient>
							</View> */}
							<View>
								<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
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
									</List>
									<TouchableOpacity onPress={() => {
										setModalCompartirRuta(true)
									}}
									>
										<Image style={{ width: 40, height: 40, resizeMode: 'contain' }}
											source={require('./../../../assets/add.png')}></Image>
									</TouchableOpacity>
									{/* <View style={{ flexGrow: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 20, marginTop: -30 }}> */}
									{/* </View> */}
								</ScrollView>
							</View>
						</View>
					}
				</View>
			</LinearGradient>
		</SlidingUpPanel >
	)
}