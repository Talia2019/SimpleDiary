import React from 'react';
import {Text} from 'react-native';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';

function List( {navigation} ){

    return(
        <Container>
            <Contents>
                <Text>목록표시</Text>
            </Contents>
            <Button onPress={()=>navigation.navigate('Form')}>
                새 일기 작성
            </Button>
        </Container>
    )
}

export default List;