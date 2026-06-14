import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import ScreenWrapper from "../components/ScreenWrapper";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { supabase } from "../services/supabaseClient";
import { useTheme } from "../contexts/ThemeContext";

export default function LoginScreen({ navigation }: any) {
  const { colors } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Campos requeridos", "Ingresa correo y contraseña.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password,
    });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    if (data.user) {
      Alert.alert("Bienvenido", "Inicio de sesión exitoso.");
      navigation.navigate("MainTabs");
    }
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    // Supabase devuelve la URL para autenticarse con Google
    console.log("Redirigiendo a Google...", data);

    if (data?.url) {
      await WebBrowser.openBrowserAsync(data.url);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={[styles.title, { color: colors.text }]}>
          Iniciar sesión
        </Text>

        <CustomInput
          placeholder="Correo electrónico"
          value={email}
          onChange={setEmail}
          type="email"
        />

        <CustomInput
          placeholder="Contraseña"
          value={password}
          onChange={setPassword}
          type="password"
        />

        <CustomButton
          title="Iniciar sesión"
          variant="primary"
          onPress={handleLogin}
        />

        <CustomButton
          title="Continuar con Google"
          variant="secondary"
          onPress={handleGoogleLogin}
        />

        <CustomButton
          title="Registrarme"
          variant="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
});