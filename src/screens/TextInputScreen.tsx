import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {


    const {form , onChange , isSuscribed} = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    })
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="TextInputs"/>
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText = {(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText = {(value) => onChange(value, 'email')}
                            keyboardType= "email-address"
                            keyboardAppearance= 'dark'
                        />
                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Suscribirse</Text>
                            <CustomSwitch isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')}/>
                        </View>
                        <HeaderTitle title={JSON.stringify(form, null,3)}/>
                        
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su telefono"
                            keyboardType="phone-pad"
                            onChangeText = {(value) => onChange(value, 'phone')}
                        />
                        
                    </View>
                    <View style={{height: 100}}/>
                </TouchableWithoutFeedback>
                
            </ScrollView>
            
        </KeyboardAvoidingView>
        
    )
}
const stylesScreen = StyleSheet.create({
    inputStyle:{
        borderWidth : 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height:50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 7
        
    },
    switchText: {
        fontSize: 20
    }
});