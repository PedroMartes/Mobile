import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, ImageBackground } from "react-native";
import { styles } from "./indexstyles";

export default function LoginScreen() {
    return (
        <ImageBackground source={require("../assets/images/fogo.jpg")} resizeMode="cover" style={styles.image}>
            <View style={styles.main} >
                <View style={styles.container}>
                    <View>
                        <Text style={styles.inputText}>E-mail</Text>
                        <TextInput style={styles.input} placeholder="Seu e-mail"></TextInput>
                    </View>
                    <View>
                        <Text style={styles.inputText}>Senha</Text>
                        <TextInput style={styles.input} placeholder="Sua senha" secureTextEntry></TextInput>
                    </View>

                    <Link href={"/home/page"}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href={"/cadastro/page"}><Text>Crie sua conta</Text></Link>
                </View>
            </View>
        </ImageBackground >
    )
}