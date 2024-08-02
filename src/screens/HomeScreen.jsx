import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';

const HomeScreen = () => {
    return (
        <View>
            <Header />
            <SubHeader />
            <Category />
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
