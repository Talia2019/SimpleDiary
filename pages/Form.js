import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

const Input = styled.TextInput`
    width: 100%;
    border: 1px solid #666666;
    padding: 4px;
    margin-bottom: 12px;
`;
const Label = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
`;

function Form( {navigation} ){
    const [date, setDate] = React.useState('');
    const [text, setText] = React.useState('');
    const store = async()=>{
        //폼검증
        if(date==='')return;
        if(text==='')return;

        let list = await AsyncStorage.getItem('list');
        if(list===null){
            list = [];
        }
        else{
            list = JSON.parse(list);
        }

        list.push({
            date,
            text,
        });
        await AsyncStorage.setItem('list', JSON.stringify(list));
        navigation.goBack();
    }
    return(
        <Container>
            <Contents>
                <Label>날짜</Label>
                <Input 
                    placeholder={'YYYY-MM-DD형식으로 입력하세요'}
                    value = {date}
                    onChangeText={value => setDate(value)}
                ></Input>
                <Label>내용</Label>
                <Input 
                    multiline={true} style={{height: 300}}
                    value={text}
                    onChangeText={value=>setText(value)}
                ></Input>
            </Contents>
            <Button onPress = {store}>
                저장
            </Button>
        </Container>
    )
}

export default Form;