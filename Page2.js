import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusContext } from "./mycontext";

export default function Page2({navigation}){
    const statusContext = useContext(StatusContext)
    return (
        <View style={StyleSheet.container}>
        { statusContext.currentUser &&
        <>
        <Text>{statusContext.currentUser.email}</Text>
        <Text>Du er logget på</Text>
        </>
        }
          { !statusContext.currentUser &&
        <Text>Du er IKKE logget på</Text>
        }
        </View>
    )
}