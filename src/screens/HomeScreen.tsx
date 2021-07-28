import React from 'react'
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/interfaces';
import { styles } from '../theme/appTheme';


const menuItems: MenuItem[] = [
    {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    }
]
export const HomeScreen = () => {

    const {top } = useSafeAreaInsets();

    // const renderMenuItem = (menuItem: MenuItem) =>{
    //     return (
    //         <View>
    //             <Text> {menuItem.name} - {menuItem.icon}</Text>
    //         </View>
    //     )
    // }

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20}}>
                <Text style={styles.title}>Opciones de menu</Text>
            </View>
        )
    }

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
                ListHeaderComponent = {()=>renderListHeader()}
                ItemSeparatorComponent = {itemSeparator}
            />
        </View>
    )
}
