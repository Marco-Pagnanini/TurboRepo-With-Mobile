import { ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert(`Hello from your ${appName} app!`)}
        >
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 16,
    },
});
