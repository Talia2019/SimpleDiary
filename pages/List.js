import React from 'react';
import { Button, Text, View } from 'react-native';

function List( navigation ){

    return(
        <View>
            <Text>List</Text>
            <Button title="디테일페이지로" 
            onPress={() => navigation.navigate("Detail")}></Button>
        </View>
    )
}

export default List;