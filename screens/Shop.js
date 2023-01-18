import axios from "axios";
import { useEffect, useState } from "react"
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationBar } from '../components/NavigationBar';

export const Shop = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const items = await axios(
                'https://backend.paddywackgifts.com/public/api/shop'
            );

            setProducts(items.data.data.reverse());
        }

        fetchData();
    })

    return (
        <View style={styles.container}>
            <ScrollView style={styles.pageContainer}>
                <View style={styles.storeContainer}>
                    {products.map(i => (
                        <TouchableOpacity
                            key={i.id}
                            style={styles.productCard}
                            onPress={() => navigation.navigate('Item', {
                                itemId: i.id
                            })}
                        >
                            <Image style={styles.cardHolder} source={{uri: i.images[0].thumbnail_url}} />
                            <Text style={{textAlign: "center", color: 'white'}}>{i.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
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
    storeContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    footer: {
        flex: 0.1,
    },
    productCard: {
        textAlign: "center",
        width: 100,
        minHeight: 100,
        margin: 2,
        padding: 5,
        backgroundColor: '#216093',
    },
    cardHolder: {
        width: 90,
        height: 90,
        overflow: 'hidden',
        position: 'relative',
    }
})