import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./gallery/GalleryStackParamList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./gallery/Home";
import { PhotoDetail } from "./gallery/PhotoDetail";
import { FeaturedPhotoModal } from "./gallery/FeaturedPhotoModal";
import { MidtermTabNavigator } from "./midterm/MidtermTabNavigator";
import { WeatherDrawerNavigator } from "./weather/WeatherDrawerNavigator";
import { ShakeToCharge } from "./battery/ShakeToCharge";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FinalTabNavigator } from "./final/FinalTabNavigator";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



const MainDrawer = createDrawerNavigator();

const GalleryStack = createNativeStackNavigator<StackParamList>();

const GalleryStackNavigator = () => {

	useEffect(() => {
		// Function to clear AsyncStorage data
		const clearAsyncStorage = async () => {
		  try {
			await AsyncStorage.clear();
			console.log('AsyncStorage cleared successfully.');
		  } catch (error) {
			console.error('Error clearing AsyncStorage:', error);
		  }
		};
	
		// Clear AsyncStorage when the app starts
		clearAsyncStorage();
	  }, []);

	return (
		<GalleryStack.Navigator>
			<GalleryStack.Screen
				name="Home"
				component={Home}
				options={{
					headerTitle: "Photo Gallery",
					headerStyle: { backgroundColor: "#69F" },
				}}
			/>
			<GalleryStack.Screen
				name="PhotoDetail"
				options={{
					headerTitle: "This should not be seen",
					headerStyle: { backgroundColor: "#69F" },
				}}
				component={PhotoDetail}
			/>
			<GalleryStack.Screen
				name="FeaturedPhotoModal"
				component={FeaturedPhotoModal}
				options={{
					presentation: "modal",
					headerTintColor: "white",
					headerTitle: "",
					headerStyle: { backgroundColor: "black" },
					// cardStyle: { backgroundColor: "black" },
					headerShown:false,
					headerShadowVisible:false
				}}
			/>
		</GalleryStack.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<MainDrawer.Navigator screenOptions={{drawerPosition:"right", headerShown:false}}>
				<MainDrawer.Screen name="PhotoGallery" component={GalleryStackNavigator} />
				<MainDrawer.Screen name="Weather" component={WeatherDrawerNavigator} />
				<MainDrawer.Screen name="Midterm" component={MidtermTabNavigator} />
				<MainDrawer.Screen name="Shake to Charge" component={ShakeToCharge} />
				<MainDrawer.Screen name="Final" component={FinalTabNavigator} />
			</MainDrawer.Navigator>
		</NavigationContainer>
	);
}
