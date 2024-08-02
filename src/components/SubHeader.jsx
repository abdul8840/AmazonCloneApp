import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

const SubHeader = () => {
    return (
        <View>
            <LinearGradient 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }}
                colors={['#bbe8ef', '#bdeee9', '#c3f1e3']} // Corrected the color code
                style={styles.container}
            >
                <Feather name='map-pin' color="#2c4341" size={16} />
                <Text style={styles.deliver}>Deliver to Abdul - Allahabad 211016</Text>
                <SimpleLineIcons name='arrow-down' color="#000000" size={10} />
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 13,
        flexDirection: 'row',
        alignItems: 'center',
    },
    deliver: {
        fontSize: 13,
        color: '#2c4341',
        paddingHorizontal: 6,
    }
});

export default SubHeader;
