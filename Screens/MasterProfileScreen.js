import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, FlatList } from 'react-native';


const MasterProfileScreen = props => {



    return(
        <FlatList style={styles.container}>
            <View>
                <Image sorce={{uri: 'https://cdn.pixabay.com/photo/2016/12/13/17/48/master-1904748_960_720.jpg'}}/>
            </View>
        </FlatList>
    )
}


const styles = StyleSheet.create({
    container: {

    }

}
)