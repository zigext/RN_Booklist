import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Button, ListView } from 'react-native'; 
import { Actions } from 'react-native-router-flux';
import BookList from './components/BookList'

export default class PageOne extends React.Component {
    render(){
        return(
                <BookList />
        )
    }
}