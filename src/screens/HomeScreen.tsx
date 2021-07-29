import React from 'react'
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../interfaces/interfaces';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';



export const HomeScreen = () => {



    const itemSeparator = () => {
        return (
            <View
                style ={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8
                }}
            >

            </View>
        );
    }
    return (
        <View style={{flex:1, ... styles.globalMargin}}>
            
            <FlatList
                data={menuItems}
                renderItem={({item}) => <FlatListMenuItem menuItem = {item}/>}
                keyExtractor = {(item) => item.name}
                ListHeaderComponent = {()=> <HeaderTitle title="Opciones de menu"/>}
                ItemSeparatorComponent = {itemSeparator}
            />
        </View>
    )
}
