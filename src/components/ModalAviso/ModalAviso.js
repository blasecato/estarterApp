import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalAviso.style';

export default function ModalAviso({ navigation, hidden, setHidden }) {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={hidden}>
			<LinearGradient
				colors={['#072148D9', '#000000D9']}
				style={styles.container}>
				<TouchableWithoutFeedback style={styles.container} onPress={() => { setHidden(false) }}>
					<View style={styles.container}>
						<View style={styles.row}>
							<View style={[styles.box, styles.boxOne]}>
								<TouchableOpacity onPress={() => { setHidden(!hidden); }}>
									<Image style={styles.imageClose} source={require('./../../../assets/cerrar.png')} />
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.row}>
							<View style={[styles.box, styles.boxTwo]}>
								<View style={styles.card}>
									<Image style={{ marginBottom: 8 }} source={require('./images/rutas.png')} />
									<Text style={styles.text__info}>Para una mejor experiencia <Text style={styles.text__infoBold}>ACTIVA</Text> la localización de tu celular.</Text>
									<LinearGradient
										colors={['#FFA51F', '#EF940C']}
										style={styles.linearStyle}>
									</LinearGradient>
								</View>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</LinearGradient>
		</Modal>
	);
}
