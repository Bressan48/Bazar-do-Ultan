import { Text, ScrollView, ImageBackground, Image, StyleSheet } from "react-native";

export default function Login() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require("../assets/Background1.png")} style={styles.background}>
          <Image source={require("../assets/BAZAR-FINAL-REAL.png")} style={styles.logo} />
          <Image source={require("../assets/BAZAR-FINAL-REAL.png")} style={styles.logo} />
          <Image source={require("../assets/BAZAR-FINAL-REAL.png")} style={styles.logo} />
          <Image source={require("../assets/BAZAR-FINAL-REAL.png")} style={styles.logo} />
          <Image source={require("../assets/BAZAR-FINAL-REAL.png")} style={styles.logo} />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    resizeMode: "cover",
    padding: 60,
  },
  logo: {
    width: 275,
    height: 135,
    marginBottom: 10,
  },
});
