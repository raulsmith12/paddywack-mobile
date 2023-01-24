import axios from "axios";
import { useEffect, useState } from "react"
import { View, Image, StyleSheet } from "react-native";
import { NavigationBar } from "../components/NavigationBar";

export const GalleryImage = ({ navigation, route }) => {
    const [imageId] = useState(route.params.imageId);
    const [image, setImage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const galleryImage = await axios(
                `https://backend.paddywackgifts.com/public/api/galleries/${imageId}`
            );

            setImage(galleryImage.data.data);
        }

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <Image source={{uri: image.image_url}} style={{width: 250, height: 250}} />
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
    footer: {
        flex: 0.1,
    },
});