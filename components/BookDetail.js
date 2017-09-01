import React from 'react';
import { StyleSheet, Text, View, Button, ListView, Image, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

// const BookDetail = (props) => (
//     <View style={styles.container}>

//         <Image source={{ uri: props.book_image }} style={styles.image} onPress={this.press}></Image>
//         <View style={styles.detailContainer}>
//             <Text style={styles.author}>{props.author}</Text>
//             <Text style={styles.title}>{props.title}</Text>
//         </View>
//     </View>
// )

export default class BookDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    pressRow = () => {
        console.log("click")
        Actions.pageTwo({ ...this.props })
    }

    render() {
        return (
            <View style={styles.container}>

                <Image source={{ uri: this.props.book_image }} style={styles.image}></Image>

                <View style={styles.detailContainer}>
                    <Text style={styles.author}>{this.props.author}</Text>
                    <TouchableHighlight onPress={this.pressRow}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTemp: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 30,
        flexDirection: 'row'
    },
    image: {
        height: 120,
        width: undefined,
        resizeMode: 'contain',
        flex: 0.5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    author: {
        fontSize: 15,
        color: 'grey'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey'
    },
    detailContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingHorizontal: 5,
        paddingVertical: 5
    }
});

// export default BookDetail