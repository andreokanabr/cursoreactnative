import react from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Product({ data, addToCart }) {
	return (
		<View style={est.container}>
			<View>
				<Text style={est.title}>{data.name}</Text>
				<Text style={est.price}>R$ {data.price}</Text>
			</View>
			<TouchableOpacity style={est.buttonAdd} onPress={addToCart}>
				<Text style={est.buttonText}>+</Text>
			</TouchableOpacity>
		</View>
	);
}

const est = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: "#DFDFDF",
		borderRadius: 2,
		marginBottom: 14,
		padding: 8,
		paddingBottom: 14,
		paddingTop: 14,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		fontWeight: "bold",
	},
	buttonAdd: {
		paddingStart: 12,
		paddingEnd: 12,
		backgroundColor: "#168fff",
		paddingTop: 6,
		paddingBottom: 6,
		borderRadius: 2,
	},
});
