import CustomButton from "@/components/CustomButton";
import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function HomeScreen() {
  const nav = useNavigation();
  return (
    <View style={[styles.container, { gap: 10 }]}>
      <Ionicons name="logo-react" size={100} />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>
          Masterclass React Native
        </Text>
        <Text style={{ fontSize: 16 }}>Expo Router</Text>
      </View>
      <CustomButton onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
        <Text style={{ color: "#fff" }}>Exercises</Text>
      </CustomButton>
    </View>
  );
}
