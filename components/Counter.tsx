import styles from "@/constants/styles";
import { useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { Ionicons } from "@expo/vector-icons";

export interface CounterProps {
  initalValue?: number;
}

export default function Counter(props: CounterProps) {
  const [number, setNumber] = useState(props.initalValue ?? 0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>{number}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton onPress={() => setNumber(number + 1)}>
          <Ionicons name="add" size={24} color="white" />
        </CustomButton>
        <CustomButton onPress={() => setNumber(number - 1)}>
          <Ionicons name="remove" size={24} color="white" />
        </CustomButton>
      </View>
    </View>
  );
}
