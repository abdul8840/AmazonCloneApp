import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carousel from '../components/Carousel';

const HomeScreen = () => {
    return (
        <View>
            <Header />
            <SubHeader />
            <Category />
            <Carousel />
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
