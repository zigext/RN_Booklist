import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'


export default class PageTwo extends React.Component {
    render() {
        return (
            <ScrollView style={[styles.container, { margin: 30 }]}>
                <Text style={styles.title}>#No. {this.props.rank}</Text>
                <Image source={{ uri: this.props.book_image }} style={styles.image}></Image>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.body}>by <Text style={styles.author}>{this.props.author}</Text></Text>
                <Text style={styles.body}>Published by <Text style={styles.publisher}>{this.props.publisher}</Text></Text>
                <Text style={styles.body}>Summary</Text>
                <Text style={styles.body}>{this.props.description}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 240,
        width: 360,
        resizeMode: 'contain',
        margin: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 0.2
    },
    author: {
        fontSize: 16,
        color: '#81BEF7',
        flex: 0.2
    },
    publisher: {
        fontSize: 16,
        color: 'grey',
        flex: 0.2
    },
    body: {
        fontSize: 15,
        flex: 0.2
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    detailContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingHorizontal: 5,
        paddingVertical: 5
    }
});