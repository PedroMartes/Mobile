import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",  
    },
    header: {
        padding: 16,
        backgroundColor: "#fff"
    },
    headerImage: {
        width: "100%",
        height: 200,
        borderRadius: 8
    },
    restaurantName: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 16,
    },
    subtitle: {
        color: "#666",
        marginTop: 4
    },
    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        gap: 16
    },
    tabsName: {
        color: "#66"
    },
    menuList: {
        padding: 16,
        flex: 1,
    },
    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        backgroundColor: "#ffff",
        padding: 16
    },
    menuContent: {
        flex: 1,
        marginRight: 16
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    itemDescription: {
        marginTop: 4
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8
    }
})