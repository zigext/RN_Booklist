import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight } from 'react-native';
import BookDetail from './BookDetail'

const books = []


export default class BookList extends React.Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds.cloneWithRows(books),
        }
    }

    //called autometrically when component being mounted
    componentWillMount = () => {
        fetch(`http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290`)
            .then((response) => response.json())
            .then((responseJSON) => {
                let books = responseJSON.results.books
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(books)
                })
            })
    }

    _renderRow(rowData) {
        return (
                <BookDetail {...rowData}></BookDetail>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}></ListView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 30
    }
});