import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Brands from '../components/Brands';

const HomeScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            <SubHeader />
            <Category />
            <Carousel />
            <Services />
            <Deals />
            <Brands />
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
