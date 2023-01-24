import axios from "axios";
import { useEffect, useState } from "react"
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationBar } from '../components/NavigationBar';

export const Gallery = ({ navigation }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const galleryImages = await axios(
                'https://backend.paddywackgifts.com/public/api/galleries'
            );

            setImages(galleryImages.data.data.reverse());
        }

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.pageContainer}>
                <View style={styles.galleryContainer}>
                    {images.map(i => (
                        <TouchableOpacity
                            key={i.id}
                            style={styles.imageContainer}
                            onPress={() => navigation.navigate('GalleryImage', {
                                imageId: i.id
                            })}
                        >
                            <Image style={styles.imageHolder} source={{uri: i.thumbnail_url}} />
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
    galleryContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    imageContainer: {
        textAlign: 'center',
        width: 100,
        height: 100,
        margin: 2,
        padding: 5,
    },
    imageHolder: {
        width: 90,
        height: 90,
        overflow: 'hidden',
        position: 'relative',
    },
    footer: {
        flex: 0.1,
    },
})