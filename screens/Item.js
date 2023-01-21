import axios from "axios";
import { useEffect, useState } from "react"
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { NavigationBar } from '../components/NavigationBar';

export const Item = ({ navigation, route }) => {
    const [itemId] = useState(route.params.itemId);
    const [product, setProduct] = useState([]);
    const [mainImage, setMainImage] = useState();
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const item = await axios(
                `https://backend.paddywackgifts.com/public/api/shop/${itemId}`
            );

            setProduct(item.data.data);
            setMainImage(item.data.data.images[0].image_url);
            setImages(item.data.data.images);
        }

        fetchData();
    }, [])

    const source = { html: product.description }

    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <Text style={styles.titleText}>{product.name}</Text>
                <View style={styles.imagesContainer}>
                    <View style={styles.mainImageContainer}>
                        <Image source={{uri: mainImage}} style={styles.mainImage} />
                    </View>
                    <View style={styles.thumbnailsContainer}>
                        {images.map(i => (
                            <View key={i.id} style={styles.thumbnailContainer}>
                                <TouchableOpacity onPress={() => setMainImage(i.image_url)}>
                                    <Image source={{uri: i.thumbnail_url}} style={styles.thumbnail} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.storeContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>
                            ${product.price}
                        </Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text>Insert Paypal here</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text>Insert Stripe here</Text>
                    </View>
                </View>
                <ScrollView style={styles.descriptionContainer}>
                    <RenderHTML contentWidth={width} source={source} />
                </ScrollView>
            </View>
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
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#216093',
    },
    imagesContainer: {
        flex: 1.2,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    mainImageContainer: {
        width: 250,
        minHeight: 250,
        margin: 2,
        padding: 5,
        alignItems: 'center',
    },
    mainImage: {
        width: 250,
        height: 250,
        borderColor: '#216093',
    },
    thumbnailsContainer: {
        flexDirection: 'column',
        width: 50,
        minHeight: 100,
        margin: 2,
        padding: 5,
    },
    thumbnailContainer: {
        width: 40,
        height: 40,
        overflow: 'hidden',
        position: 'relative',
        margin: 2,
        padding: 5,
    },
    thumbnail: {
        width: 40,
        height: 40,
    },
    storeContainer: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    priceContainer: {
        textAlign: 'center',
        width: 100,
        minHeight: 30,
        margin: 2,
        padding: 5,
    },
    priceText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#216093",
    },
    descriptionContainer: {
        flex: 1,
    },
    footer: {
        flex: 0.1,
    },
})