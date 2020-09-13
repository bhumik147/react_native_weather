// Importing functionality from external packages
import React from "react";
import { TouchableOpacity, Image, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Importing components from other files in this project
import Details from "./screens/Details";
import Search from "./screens/Search";


// Custom Method - Returns JSX for a button on the top right
// of a screen. Takes in as parameters:
//    onPress:  Method to execute upon button press
//    style:    Button style
//    icon:     Icon to display for button (no text)
const HeaderRightButton = ({ onPress, style, icon }) => (
    <TouchableOpacity onPress={onPress}>
        <Image
            source={icon}
            resizeMode="contain"
            style={[
                {
                    marginRight: 10,
                    width: 20,
                    height: 20,
                    tintColor: "#fff"
                },
                style
            ]}
        />
    </TouchableOpacity>
);


// Setup the main navigation by creating a stack navigator (which)
// stacks screens on top of one another
const AppStack = createStackNavigator(
    {
        Details: {
            screen: Details,
            navigationOptions: ({ navigation }) => ({
                headerTitle: navigation.getParam("title", ""),
                headerRight: (
                    <React.Fragment>
                        <StatusBar barStyle="light-content" />
                        <HeaderRightButton
                            icon={require("./assets/search.png")}
                            onPress={() => navigation.navigate("Search")}
                        />
                    </React.Fragment>
                ),
                headerStyle: {
                    backgroundColor: "#3145b7",
                    borderBottomColor: "#3145b7"
                },
                headerTintColor: "#fff"
            })
        },
        Search: {
            screen: Search,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "Search",
                headerRight: (
                    <React.Fragment>
                        <StatusBar barStyle="dark-content" />
                        <HeaderRightButton
                            icon={require("./assets/close.png")}
                            onPress={() => navigation.pop()}
                            style={{ tintColor: "#000" }}
                        />
                    </React.Fragment>
                ),
                headerLeft: null
            })
        }
    },
    {
        mode: "modal"
    }


);
// Export the navigator as the main app item
export default createAppContainer(AppStack);