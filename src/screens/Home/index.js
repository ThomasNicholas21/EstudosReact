import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

function Home() {

    return (
        <View style={styles.Container}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#010115"}></StatusBar>
                <Text style={styles.AppTitle}> DoIt </Text>
            <View style={styles.WrapperContent}>
                <View style={styles.Option} >
                    <Image source={require('../../../assets/icone-sol.webp')} style = {styles.Image}></Image>
                    <Text style={styles.TextImage}>Dia a dia</Text>
                </View>
                <View style={styles.Option} >
                    <Image source={require('../../../assets/iconeagenda.png')} style = {styles.Image}></Image>
                    <Text style={styles.TextImage}>Agenda</Text>
                </View>
                <View style={styles.Option} >
                    <Image source={require('../../../assets/editar.png')} style = {styles.Image}></Image>
                    <Text style={styles.TextImage}>Lista Personalizada</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        Container: { flex: 1, backgroundColor: "#010115" },
        WrapperContent: {  alignItems: 'center', justifyContent: 'center' },
        AppTitle: { color: "#ffff", fontSize: 32, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 50, textAlign: "center", marginTop: 40 },
        Option: {flexDirection: "row", marginBottom: 30, alignItems:"flex-start", width:"80%"},
        Image: {height: 80, width: 80, marginRight: 40},
        TextImage: {color: "#FFFF", marginTop: 30, fontStyle: 'italic', fontSize: 18 }
    },
)

export default Home

