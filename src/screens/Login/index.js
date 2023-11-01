import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, Alert } from 'react-native';

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginCheck = () => {
        if (email === "" || password === "") {
            return Alert.alert("Preencha todas as informações!")
        }
        return navigation.push("BottomTabs")
    }

    return (
        <View style={styles.Container}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#010115"}></StatusBar>
            <View style={styles.WrapperContent}>
                <Text style={styles.AppTitle}> DoIt </Text>

                <View style={styles.Form}>
                    <View style={styles.ImageTitle} >
                        <Image source={require('../../../assets/cadastro.png')} style={styles.Image}></Image>
                        <View style={styles.WrapperTitle}><Text style={styles.Title}>Log In</Text></View>
                    </View>
                    <View style={styles.WrapperInputs}>
                        <TextInput placeholder='Coloque o e-mail/usuário' style={styles.Input} value={email} onChangeText={(e) => setEmail(e)}></TextInput>
                        <TextInput placeholder='Coloque a senha' style={styles.Input} secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)}></TextInput>
                        <TouchableOpacity style={styles.Button} onPress={loginCheck}><Text style={styles.TextButton}>Entrar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            <Text style={styles.EntryText} onPress={() => navigation.push("SignUp")}>Não tem cadastro? Clique <Text style={styles.EntryTextHighLight}>aqui </Text>para cadastrar</Text>

        </View>
    );
}

const styles = StyleSheet.create(
    {
        Container: { flex: 1, backgroundColor: "#010115" },
        WrapperContent: { flex: 1, alignItems: 'center', justifyContent: 'center' },
        AppTitle: { color: "#ffff", fontSize: 32, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 50 },
        Form: { backgroundColor: "#FFFF", height: 220, width: '100%', borderRadius: 30 },
        WrapperTitle: { flexDirection: "row", justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 10 },
        Title: { color: "#010115", fontSize: 20, fontStyle: 'italic', textAlign: 'center' },
        WrapperInputs: { alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 10 },
        Input: { borderBottomColor: "#010115", borderBottomWidth: 1, width: 200, textAlign: "center" },
        Button: { backgroundColor: "#010115", paddingHorizontal: 30, paddingVertical: 5, marginTop: 10, borderRadius: 20 },
        TextButton: { color: "#ffff" },
        EntryText: { color: "#ffff", textAlign: "center", fontSize: 16, fontWeight: 'bold', marginBottom: 30, paddingHorizontal: 20 },
        EntryTextHighLight: { color: "#ffff", textDecorationStyle: "solid", textDecorationLine: "underline" },
        Image: { height: 60, width: 60, marginRight: 40 },
        ImageTitle: { flexDirection: "row", paddingHorizontal: 40, marginTop: 20 },
    },
)

export default LoginScreen

