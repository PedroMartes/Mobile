import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style"
import { Link } from "expo-router";

export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "Costela",
            description: "Costela de porco ao molho BBQ",
            price: 39.90,
            image: require("../../assets/images/costela.png")
        },
        {
            id: 2,
            name: "Picanha",
            description: "Picanha assada na brasa",
            price: 59.90,
            image: require("../../assets/images/picanha-assada-no-forno-1.jpeg")
        },
        {
            id: 3,
            name: "Patinho",
            description: "Patinho assado",
            price: 34.90,
            image: require("../../assets/images/patinho.jpg")
        },
        {
            id: 4,
            name: "Alcatra",
            description: "Alcatra na brasa quente",
            price: 44.99,
            image: require("../../assets/images/churrasco2.jpg")
        },
        {
            id: 5,
            name: "Fraldinha",
            description: "Fraldinha corete de carne assada",
            price: 39.90,
            image: require("../../assets/images/churrasco3.jpg")
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("../../assets/images/lugar.png")} />
                <Text style={styles.restaurantName}>GrillGuide</Text>
                <Text style={styles.subtitle}>Tudo de churrasco</Text>
            </View>

            <View style={styles.tabs}>
                {["Combos", "Lanches", "Fritas", "Bebidas"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView>
                {
                    MENU.map((item) => (
                        <Link href={"/produto/page"} asChild>
                            <TouchableOpacity style={styles.menuItem}>
                                <View style={styles.menuContent}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                    <Text style={styles.itemPrice}>R$ {item.price}</Text>
                                </View>
                                <Image style={styles.itemImage} source={item.image} />
                            </TouchableOpacity>
                        </Link>
                    ))
                }
            </ScrollView>
        </View>


    )
}
