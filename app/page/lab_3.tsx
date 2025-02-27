import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import Decrement from '../../components/decrement';
import Increment from '../../components/increment'

const Lab3 = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Value: {count}</Text>
            <View style={styles.buttonContainer}>
                <Increment count={count} setCount={setCount}/>
                <Decrement count={count} setCount={setCount}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export default Lab3;