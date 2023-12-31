import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MidtermTabParamList } from "./types/MidtermTabParamList";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScanStackNavigator } from "./ScanStackNavigator";
import { Favorites } from "./Favorites";

const MidtermScanStack = createStackNavigator<MidtermTabParamList>();
const MidtermTab = createBottomTabNavigator();

export const MidtermTabNavigator = () => {
	return (
		<MidtermTab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName: any;

					if (route.name === "Scan") {
						iconName = focused ? "scan-circle" : "scan-circle-outline";
					} else if (route.name === "Favorites") {
						iconName = focused ? "heart-circle" : "heart-circle-outline";
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "#69F",
				tabBarInactiveTintColor: "gray",
			})}
		>
			<MidtermTab.Screen
				name="Scan"
				component={ScanStackNavigator}
				options={{
					headerShown: false,
					unmountOnBlur: true,
					title: "Scanner",
				}}
				listeners={({ navigation }) => ({
					tabPress: (e) => {
						// Prevent the default tab press action
						e.preventDefault();

						// Navigate to the initial screen in the stack
						navigation.navigate("Scan", {
							screen: "Home",
						});
					},
				})}
			/>
			<MidtermTab.Screen name="Favorites" component={Favorites} />
		</MidtermTab.Navigator>
	);
};
