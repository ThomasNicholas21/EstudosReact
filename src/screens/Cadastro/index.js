import {useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, StatusBar, Switch, KeyboardAvoidingView, Image } from 'react-native';

function SignUp({navigation}) {
    const width = Dimensions.get("window").width
    const [accept, setAccept] = useState(false)
    const [name, setName] = useState("")
    const [birthday, setBirthDay] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <KeyboardAvoidingView style={styles.Container} behavior='height' >
        <View style={styles.Container}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#010115"}></StatusBar>
            <View style={styles.WrapperContent}>
                <Text style={styles.AppTitle}> DoIt </Text>
                <View style={{ backgroundColor: "#FFFF", height: 400, width: width, borderRadius: 30 }}>
                    <View style={styles.ImageTitle} >
                        <Image source={require('../../../assets/cadastro.png')} style={styles.Image}></Image>
                        <View style={styles.WrapperTitle}><Text style={styles.Title}>Cadastro</Text></View>
                    </View>
                    <View style={styles.WrapperInputs}>
                        <TextInput placeholder='Nome completo' style={styles.Input} value={name} onChangeText={(e) => setName(e)}></TextInput>
                        <TextInput placeholder='Data de Nascimento' style={styles.Input} value={birthday} onChangeText={(e) => setBirthDay(e)}></TextInput>
                        <TextInput placeholder='Coloque o e-mail/usuário' style={styles.Input} value={email} onChangeText={(e) => setEmail(e)}></TextInput>
                        <TextInput placeholder='Coloque a senha' style={styles.Input} secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)}></TextInput>
                        <Text style={styles.PoliciesText}>Concorda com nossa <Text style={styles.PoliciesTextHighLight}>Política de Privacidade</Text></Text>
                        <Switch value={accept} onChange={() => setAccept((accept) => !accept)}></Switch>
                        <TouchableOpacity style={styles.Button} onPress={() => navigation.push("Home")}><Text style={styles.TextButton}>Cadastrar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            <Text style={styles.EntryText}>Leia nossa <Text style={styles.EntryTextHighLight}>Política de Privacidade </Text>e “toque em Concordar e continuar” para aceitar os termos de serviço.</Text>
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create(
    {
        Container: { flex: 1,  backgroundColor: "#010115" },
        WrapperContent: { flex: 1, alignItems: 'center', justifyContent: 'center' },
        AppTitle: { color: "#ffff", fontSize: 32, fontWeight: 'bold', fontStyle: 'italic', marginBottom:50 },
        WrapperTitle: { flexDirection: "row", justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 10 },
        Title: { color: "#010115", fontSize: 20, fontStyle: 'italic', textAlign: 'center' },
        WrapperInputs: { alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 10 },
        Input: { borderBottomColor: "#010115", borderBottomWidth: 1, width: 200, textAlign: "center" },
        Button: { backgroundColor: "#010115", paddingHorizontal: 30, paddingVertical: 5, marginTop: 10, borderRadius: 20 },
        TextButton: { color: "#ffff" },
        EntryText: { color: "#ffff", textAlign: "center", fontSize: 12, fontWeight: 'bold', marginBottom: 30, paddingHorizontal: 20 },
        EntryTextHighLight: { color: "#ffff", textDecorationStyle: "solid", textDecorationLine: "underline" },
        PoliciesText: {fontWeight: "bold", color: "#010115"},
        PoliciesTextHighLight: { textDecorationLine: "underline", fontWeight: "normal" },
        Image: { height: 60, width: 60, marginRight: 40 },
        ImageTitle: {flexDirection: "row", paddingHorizontal: 40, marginTop: 20},

    },
)

export default SignUp

