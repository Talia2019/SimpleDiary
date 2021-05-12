import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0px;
    border-bottom-color: #aaaaaa;
    border-bottom-width: 1px;
`;

const Label = styled.Text`
    font-size: 20px;
`;

function List( {navigation} ){
    const [list, setList] = React.useState([]);
    const load = async()=>{
        const data = await AsyncStorage.getItem('list');
        if(data!==null){
            setList(JSON.parse(data));
        }
    }
    React.useEffect(()=>{
        //focus됐을때 동작
        const unsubscribe = navigation.addListener('focus', ()=>{
            load();
        });
        load();
        return unsubscribe;
    }, [navigation]);
    return(
        <Container>
            <Contents>
                { _.sortBy(list, 'date').map(item=>{
                    return(
                        <ListItem key={item.date}
                        //날짜를 Detail의 route의 params로 보내기
                            onPress={ ()=>navigation.navigate('Detail', {date: item.date}) }>
                            <Label>{item.date}</Label>
                        </ListItem>
                    )
                })}
            </Contents>
            <Button onPress={()=>navigation.navigate('Form')}>
                새 일기 작성
            </Button>
        </Container>
    )
}

export default List;