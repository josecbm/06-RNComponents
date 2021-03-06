import React, { useRef } from 'react'
import { StyleSheet, View, Animated, Button, Easing} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101 = () => {

    const {opacity,position, startMovingPosition, fadeIn, fadeOut} = useAnimation();
    return (
        <View style={styles.container}>
            <Animated.View style={
                {
                    ...styles.purpleBox,
                    opacity: opacity,
                    marginBottom: 20,
                    transform: [{
                        translateY: position
                    }],
            }}/>
            <Button
                title="FadeIn"
                onPress = {() => 
                    {
                        fadeIn();
                        startMovingPosition(100);
                    }
                }
            />
            <Button
                title="FadeOut"
                onPress = {fadeOut}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});

function startMovingPosition() {
    throw new Error('Function not implemented.');
}
