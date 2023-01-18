import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const NavigationBar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.navButton}
                accessibilityRole="button"
                accessibilityLabel="Shop"
                onPress={() => navigation.navigate('Shop')}
            >
                <Text style={styles.navText}>
                    Shop
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                accessibilityRole="button"
                accessibilityLabel="Gallery"
                onPress={() => navigation.navigate('Gallery')}
            >
                <Text style={styles.navText}>
                    Gallery
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                accessibilityRole="button"
                accessibilityLabel="Contact"
                onPress={() => navigation.navigate('Contact')}
            >
                <Text style={styles.navText}>
                    Contact
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                accessibilityRole="button"
                accessibilityLabel="Join"
                onPress={() => navigation.navigate('Join')}
            >
                <Text style={styles.navText}>
                    Join
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                accessibilityRole="button"
                accessibilityLabel="Creator"
                onPress={() => navigation.navigate('Creator')}
            >
                <Text style={styles.navText}>
                    Creator
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#922667',
        width: '100%',
    },
    navButton: {
        flex: 0.2,
        borderColor: '#ffffff',
        borderWidth: 1,
        paddingTop: 15,
    },
    navText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
})