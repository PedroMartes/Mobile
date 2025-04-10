import { FlatList, Image, Linking, Text, TouchableOpacity, View } from "react-native";
import  Style  from "./styles"
import { Link } from "expo-router";

export default function ProductScreen() {
    return (
        <View>
            <View style={Style.product}>
                <Image style={Style.productPicture} source={require("../../assets/images/costela.png")} />
                <Text style={Style.productName}>Costela</Text>
                <Text style={Style.price}>R$ 39.90</Text>
            </View>

            <View style={Style.descriptionIngredients}>
                <Text style={Style.descriptionTitle}>Descrição</Text>
                <Text style={Style.description}>Costela de suina assada com tempero especial secreto, premiada regionalmente pela Academia de Costelas Suinas ACS.</Text>

                <Text style={Style.ingredientsTitle}>Ingredientes</Text>
                <Text style={Style.ingredients}>-Costela de porco morto</Text>
                <Text style={Style.ingredients}>-Molho BBQ especial</Text>
                <Text style={Style.ingredients}>-Sal do Imaláia</Text>
            </View>

            <View style={Style.cartButton}>
                <Link href={"/home/page"} style={Style.link}>
                <TouchableOpacity style={Style.button}>
                    <Text>Adicionar ao carrinho</Text>
                </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}