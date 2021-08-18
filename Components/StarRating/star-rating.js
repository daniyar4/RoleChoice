import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export const StarRating = props => {

    let stars = [];

    for (let i = 1; i <= 5; i++) {
        // set the path to filled stars
        let path = require('./star-filled.png');
        // If ratings is lower, set the path to unfilled stars
        if (i > props.ratingObj.ratings) {
            path = require('./star-unfilled.png');
        }

        stars.push((<Image key={i} style={styles.image} source={path} />));
    }
		return (
			<View style={ styles.container }>
                { stars }
                <Text style={styles.text}>({props.ratingObj.views})</Text>
			</View>
		);
	}


const styles = StyleSheet.create({
	container: {
		backgroundColor: "#DAEAE8",
        flexDirection: 'row',
        alignItems: 'center',
	},
    image: {
        width: 20,
        height: 20
       },
       text: {
        fontSize: 15,
        marginLeft: 7,
        marginRight: 7
       }
})