import axios from "axios";
import { useEffect, useState } from "react"
import { View, Text, Button, ScrollView, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { NavigationBar } from '../components/NavigationBar';

export const Creator = ({ navigation }) => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [pieceSize, setPieceSize] = useState('');
    const [pieceShape, setPieceShape] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = () => {
        axios({
            method: 'post',
            url: 'https://backend.paddywackgifts.com/public/api/commissions',
            headers: { 'content-type': 'application/json' },
            data: {
                'name': customerName,
                'phone_no': customerPhone,
                'email': customerEmail,
                'notes': message,
                'size': pieceSize,
                'shape': pieceShape,
                'custom_image': imagePreview
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
                <TextInput style={{ width: 250 }} label="Size" value={pieceSize} onChangeText={text => setPieceSize(text)} />
                <TextInput style={{ width: 250 }} label="Shape" value={pieceShape} onChangeText={text => setPieceShape(text)} />
                <TextInput multiline={true} numberOfLines={4} label="Message" value={message} onChangeText={text => setMessage(text)} />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={selectFile}
                >
                    <Text style={{ color: 'white' }}>Select File</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={uploadFile}
                >
                    <Text style={{ color: 'white' }}>Upload File</Text>
                </TouchableOpacity>
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