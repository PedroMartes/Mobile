import { FlatList, Image, Linking, Text, TouchableOpacity, View } from "react-native";
import  Style  from "./styles"
import { Link, useLocalSearchParams } from "expo-router";
import { ProdutoType } from "../home/page";
import { useEffect, useState } from "react";

export default function ProductScreen() {
    const { id } = useLocalSearchParams()
    const [produto, setProduto] = useState<ProdutoType>()

    function getProduto() {
        fetch(`http://localhost:3000/produto/${id}`)
        .then((res) => res.json())
        .then(data => setProduto(data))
    }

    useEffect(() => {
        getProduto()
    })

    return (
        <View>
            <View style={Style.product}>
                <Image style={Style.productPicture} source={produto?.imgUrl} />
                <Text style={Style.productName}>{produto?.name}</Text>
                <Text style={Style.price}>R$ {produto?.price}</Text>
            </View>

            <View style={Style.descriptionIngredients}>
                <Text style={Style.descriptionTitle}>Descrição</Text>
                <Text style={Style.description}>{produto?.description}</Text>

                <Text style={Style.ingredientsTitle}>Ingredientes</Text>
                <Text style={Style.ingredients}>{produto?.ingredients}</Text>
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