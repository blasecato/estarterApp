import * as React from 'react';
import { Image } from 'react-native';
import { Button, View, Text } from 'native-base';
import Onboarding from 'react-native-onboarding-swiper';

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

    <Button
        transparent
        title={'terminar'}
        style={{ color: '#162CA3', backgroundColor: 'transparent', borderColor: 'transparent', shadowColor: 'transparent' }}
        {...props}>
        <Text style={{ color: '#162CA3' }}> Continuar </Text>
    </Button>

);

export default function DetailsScreen({ navigation }) {
    return (
        <Onboarding
            containerStyles={{ borderBottomWidth: 10, borderBottomColor: '#333' }}
            nextLabel={"Continuar"}
            skipLabel={"Omitir"}
            bottomBarHighlight={false}
            DotComponent={Square}
            DoneButtonComponent={Done}
            onDone={() =>
                navigation.navigate('ModalAviso')
            }
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={{ resizeMode: 'cover', width: '100%', height: '100%' }} source={require('./images/one.png')} />,
                    title: '',
                    subtitle: '',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={{ resizeMode: 'cover', width: '100%', height: '100%' }} source={require('./images/two.png')} />,
                    title: '',
                    subtitle: '',
                }
            ]}
        />
    );
}
