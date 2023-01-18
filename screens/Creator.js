import axios from "axios";
import { useEffect, useState } from "react"
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { NavigationBar } from '../components/NavigationBar';

export const Creator = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.pageContainer}>
                <Text>Welcome</Text>
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