import React, { useState } from 'react';
import { Container, Button, Text, View } from 'native-base';
import { Image, Modal, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { mapStyle } from './constans';
import MapView from 'react-native-maps';
import styles from './Home.styles';
import SlidingUpPanel from 'rn-sliding-up-panel';

const { height, width } = Dimensions.get('window')

export default class App extends React.Component {

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
                    <View style={styles.container, {
                        backgroundColor: '#fff', flex: 1,
                        backgroundColor: 'white',
                        position: 'relative',
                        marginHorizontal: 20
                    }}>
                        <Text>Here is the content inside panel</Text>
                        <Button title='Hide' onPress={() => this._panel.hide()} />
                    </View>
                </SlidingUpPanel>
            </View>
        )
    }
}
