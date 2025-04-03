import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    "*": {
      padding: 0,
      margin: 0  
    },
    main: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    container: {
        backgroundColor: "white",
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        padding: 20,
    },
    inputText: {
        fontSize: 20,
    },
    input: {
        backgroundColor: "#D2D2D2",
        borderRadius: 20,
        padding: 10,
    },
    button: {
        backgroundColor: "brown",
        padding: 10,
        borderRadius: 20,   
        marginTop: 15   ,
    },
    buttonText: {
        color: "white",
    }
})