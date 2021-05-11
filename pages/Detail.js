import React from 'react';
import {Button, Text, View} from 'react-native';
import Container from '../components/Container';

function Detail({navigation}){
    return(
        <Container>
            <Text>View</Text>
            <Button
                title="목록으로"
                //onPress={()=>navigation.navigate("List")}
                onPress={()=>navigation.goBack()}
            ></Button>
        </Container>
    )
}

export default Detail;