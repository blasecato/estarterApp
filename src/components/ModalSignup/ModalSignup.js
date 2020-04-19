import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalSignup.style';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm, Controller } from "react-hook-form";

export default function ModalSignup({ navigation, hidden, setHidden, setModalCode, setModalActivation, setPhone, setEmail }) {

	const { control, handleSubmit, errors } = useForm();
	const onSubmit = data => setModalActivation(3)

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={hidden}>
			<TouchableWithoutFeedback style={styles.container} onPress={() => { setHidden(false) }}>
				<View style={[styles.box, styles.box1]}>
					<LinearGradient
						colors={['#072148D9', '#000000D9']}
						start={{ x: 0.0, y: 0.5 }}
						end={{ x: 0.0, y: 0.9 }}
						style={styles.container__background}>
						<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
							<View style={styles.content}>
								<TouchableOpacity
									style={styles.touchClose}
									onPress={() => {
										setHidden(false)
									}}>
									<View style={styles.viewClose}>
										<Text style={styles.textClose}>Cerrar</Text>
										<Image
											source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
											style={styles.imageClose}
										/>
									</View>
								</TouchableOpacity>
								<LinearGradient
									colors={['#9DDCFF', '#19428D']}
									style={styles.linearGradient}>
									<Image style={styles.logo}
										source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
									<Text style={styles.textRegister}>Completa la siguiente información para realizar tu registro.</Text>
									<Form style={styles.form}>
										<Item style={styles.item} stackedLabel>
											<Label style={styles.label}>
												Número de identificación
                                  			  </Label>
											<Controller
												as={<Input style={styles.input} />}
												control={control}
												name="identification"
												onChange={args => args[0].nativeEvent.text}
												rules={{ required: true, minLength: 3, }}
												defaultValue=""
											/>
											{errors.identification && <Text style={styles.text__warning}>Ingrese el número de identificación.</Text>}
										</Item>

										<Item style={styles.item} stackedLabel>
											<Label style={styles.label}>
												Nombre y apellido
                                    </Label>
											<Controller
												as={<Input style={styles.input} />}
												control={control}
												name="name"
												onChange={args => args[0].nativeEvent.text}
												rules={{ required: true, minLength: 3, }}
												defaultValue=""
											/>
											{errors.name && <Text style={styles.text__warning}>Ingrese el nombre del usuario.</Text>}
										</Item>

										<Item style={styles.item} stackedLabel>
											<Label style={styles.label}>
												Correo Electrónico
										</Label>
											<Controller
												as={<Input onChangeText={(text) => setEmail(text)} style={styles.input} />}
												control={control}
												name="email"
												onChange={args => args[0].nativeEvent.text}
												rules={{ required: true, minLength: 3 }}
												defaultValue=""
											/>
											{errors.email && <Text style={styles.text__warning}>Ingrese el correo del usuario.</Text>}
										</Item>
										<Item style={styles.item} stackedLabel last>
											<Label style={styles.label}>
												Número de celular
                                    </Label>
											<Controller
												as={<Input onChangeText={(text) => setPhone(text)} style={styles.input} />}
												control={control}
												name="phone"
												onChange={args => args[0].nativeEvent.text}
												rules={{ required: true, minLength: 3, }}
												defaultValue=""
											/>
											{errors.phone && <Text style={[styles.text__warning, { marginLeft: 25 }]}>Ingrese el telefono del usuario.</Text>}
										</Item>

									</Form>
								</LinearGradient>
								<Button onPress={handleSubmit(onSubmit)} full style={styles.button} >
									<Text uppercase={false} style={styles.textButton}> Registrarme </Text>
								</Button>
							</View>
						</ScrollView>
					</LinearGradient>
				</View>
			</TouchableWithoutFeedback>
		</Modal >
	)
}
