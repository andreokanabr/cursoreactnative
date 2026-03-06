import { useState, useContext } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../contexts/CartContext";

export default function Home() {
	const { cart, addItemCart } = useContext(CartContext);

	const navigation = useNavigation();
	const [products, setProducts] = useState([
		{
			id: "1",
			name: "Coca cola",
			price: 19.9,
		},
		{
			id: "2",
			name: "Chocolate",
			price: 6.5,
		},
		{
			id: "4",
			name: "Queijo 500g",
			price: 15,
		},
		{
			id: "5",
			name: "Batata frita",
			price: 23.9,
		},
		{
			id: "6",
			name: "Guarana lata",
			price: 6.0,
		},
	]);

	function handleAddCart(item) {
		addItemCart(item);
	}
	return (
		<SafeAreaView style={est.container}>
			<View style={est.cartContent}>
				<Text style={est.title}>Lista de produtos</Text>

				<TouchableOpacity
					style={est.cartButton}
					onPress={() => navigation.navigate("Cart")}>
					<View style={est.dot}>
						<Text style={est.dotText}>{cart?.length}</Text>
					</View>
					<Feather name="shopping-cart" size={30} color="#000" />
				</TouchableOpacity>
			</View>

			<FlatList
				style={est.list}
				data={products}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => (
					<Product
						data={item}
						addToCart={() => handleAddCart(item)}
					/>
				)}
			/>
		</SafeAreaView>
	);
}

const est = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FAFAFA",
		paddingEnd: 14,
		paddingStart: 14,
	},
	cartContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 24,
		marginBottom: 24,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	dot: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "red",
		width: 20,
		height: 20,
		borderRadius: 12,
		position: "absolute",
		zIndex: 99,
		bottom: -2,
		left: -4,
	},
	dotText: {
		fontSize: 12,
	},
});
