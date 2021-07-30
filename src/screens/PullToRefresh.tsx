import React, { useState } from 'react'
import { ScrollView, View ,RefreshControl, Text} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefresh = () => {

    const {top} = useSafeAreaInsets()
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const onRefresh= () =>{
        setRefreshing(true);
        setTimeout(() => {
            console.log("Terminamos");
            setRefreshing(false);
            setData("hola mundo")
        }, 3000);
    }
    return (
        
            <ScrollView
                style={{marginTop: refreshing? top: 0}}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        progressViewOffset = {10}
                        progressBackgroundColor = "#5856D6"
                        colors={['yellow','red','orange']}
                        title = "Refreshing"
                        titleColor="white"
                    />
                }
            >
                <View style={styles.globalMargin}>
                    <HeaderTitle title="Pull to refresh"/>
                    {
                        data && <HeaderTitle title={data}/>
                    }
                    
                </View>
            </ScrollView>
    )
}
