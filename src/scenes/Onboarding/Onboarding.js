import * as React from 'react';
import { Image, Dimensions } from 'react-native';
import { Button, View, Container, Content, Card, CardItem, Body, Text } from 'native-base';
import Onboarding from 'react-native-onboarding-swiper';
import ModalAviso from '../../components/ModalAviso/ModalAviso';

const Square = ({ isLight, selected }) => {
    let backgroundColor;
    let width;
    let height;
    if (isLight) {
        backgroundColor = selected ? '#162CA3' : 'rgba(0, 0, 0, 0.3)';
        width = selected ? 11 : 8;
        height = selected ? 11 : 8;

    } else {
        backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
        <View
            style={{
                width,
                height,
                marginHorizontal: 3,
                backgroundColor,
                borderRadius: 100,
                top: -60,
            }}
        />
    );
};

const Done = ({ isLight, ...props }) => (
    <View>
        <View style={{
            borderWidth: 0,
            borderColor: '#D9D9D9',
            marginRight: 10
        }} />
        <Button
            transparent
            title={'terminar'}
            style={{ color: '#162CA3', backgroundColor: 'transparent', borderColor: 'transparent', shadowColor: 'transparent' }}
            {...props}>
            <Text uppercase={false} style={{ color: '#162CA3', fontStyle: 'normal', fontWeight: 'bold', fontSize: 15, lineHeight: 17, }}> Continuar </Text>
        </Button>
    </View>
);

export default function DetailsScreen({ navigation }) {
    return (

        <Container style={{ display: 'flex', flexDirection: 'column', width: '100%', height: "100%" }}>
            <View style={{ width: '100%', zIndex: 1, alignItems: "center" }}>
                <Image style={{ resizeMode: 'contain', width: '100%', maxWidth: "80%", top: -5, position: 'absolute', zIndex: 1, display: 'flex', padding: 0 }} source={require('./images/logo.png')} />
            </View>
            < Onboarding
                containerStyles={{ borderBottomWidth: 10, borderBottomColor: '#333', height: "30%" }}
                nextLabel={"Continuar"}
                skipLabel={"Omitir"}
                bottomBarHighlight={false}
                DotComponent={Square}
                DoneButtonComponent={Done}
                flatlistProps={{ style: { backgroundColor: '#fff', borderBottomColor: '#D9D9D9', borderBottomWidth: 1 } }}
                onDone={() =>
                    navigation.navigate('Mis Rutas')
                }
                pages={[
                    {
                        backgroundColor: '#fff',
                        color: "#162CA3",
                        image: <View style={{ resizeMode: 'cover', width: '100%', height: '100%', borderBottomColor: '#D9D9D9' }}>
                            <Image style={{ resizeMode: 'cover', width: '100%', height: '100%' }} source={require('./images/step1.png')} />
                            <View style={{ width: '100%', zIndex: 1, alignItems: "center" }}>
                                <Image style={{ width: '80%', height: 100, position: 'absolute', zIndex: 1, bottom: 90 }} source={require('./images/card1.png')} />
                            </View>
                        </View>,
                        title: '',
                        subtitle: '',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <View style={{ width: '100%', height: '100%', borderBottomColor: '#D9D9D9' }}>
                            <Image style={{ resizeMode: 'cover', width: '100%', height: '100%' }} source={require('./images/step2.png')} />
                            <View style={{ width: '100%', zIndex: 1, alignItems: "center" }}>
                                <Image style={{ width: '80%', height: 100, position: 'absolute', zIndex: 1, bottom: 90 }} source={require('./images/card2.png')} />
                            </View>
                        </View>,
                        title: '',
                        subtitle: '',
                    }
                ]}
            />
        </Container >
    );
}
{/* */ }