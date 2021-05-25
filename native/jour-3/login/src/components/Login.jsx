
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';


const Login = () => {

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState("");
    const [timesPressed, setTimesPressed] = useState(0);
    const [connectPressed, setConnectPressed] = useState(true);

    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const res = reg.test(text)
    console.log("res: ", res);
    console.log("mot de passe. ", number.length);

    return (

        <View >
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={"Login"}
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={"Mot de passe"}
            />

            <Pressable
                onPress={() => {
                    setTimesPressed((current) => current + 1);
                    setConnectPressed(res)
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                    },
                    styles.wrapperCustom
                ]}>
                {({ pressed }) => (
                    <Text style={styles.text}>
                        {pressed ? 'Pressed!' : 'Press Me'}
                    </Text>
                )}
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    // : {
  
    // },
  });
export default Login;
