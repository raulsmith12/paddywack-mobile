import axios from "axios";
import { useEffect, useState } from "react"
import { View, Text, Button, ScrollView, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { NavigationBar } from '../components/NavigationBar';

export const Join = ({ navigation }) => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerCountry, setCustomerCountry] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = () => {
        axios({
            method: 'post',
            url: 'https://backend.paddywackgifts.com/public/api/contacts',
            headers: { 'content-type': 'application/json' },
            data: {
                'name': customerName,
                'phone_no': customerPhone,
                'email': customerEmail,
                'country': customerCountry,
                'message': message
            }
        })
        .then(result => {
            console.log(result);
            Alert.alert('Success!', 'We have received your message and will respond back within the next 2 or 3 business days.')
        })
        .catch(error => {
            console.log(error);
            Alert.alert('Uh oh!', 'Something went wrong. Please try again.')
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.pageContainer}>
                <TextInput style={{ width: 250 }} label="Name" value={customerName} onChangeText={text => setCustomerName(text)} />
                <TextInput style={{ width: 250 }} label="Email" value={customerEmail} onChangeText={text => setCustomerEmail(text)} />
                <TextInput style={{ width: 250 }} label="Phone" value={customerPhone} onChangeText={text => setCustomerPhone(text)} />
                <TextInput style={{ width: 250 }} label="Country" value={customerCountry} onChangeText={text => setCustomerCountry(text)} />
                <TextInput multiline={true} numberOfLines={4} label="Message" value={message} onChangeText={text => setMessage(text)} />
                <Button onPress={() => submitForm()} title="Submit" />
            </ScrollView>
            <View style={styles.footer}>
                <NavigationBar navigation={navigation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageContainer: {
        flex: 0.9,
    },
    footer: {
        flex: 0.1,
    },
})