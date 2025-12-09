"use client";

import { ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { colors } from "@repo/colors";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => console.log(appName)}
        >
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    text: {
        color: colors.white,
        fontSize: 16,
    },
});
