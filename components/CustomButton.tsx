import { Pressable, StyleSheet } from "react-native";

export interface CustomButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        styles.customButton,
      ]}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "#3A7EFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
