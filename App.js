import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {});

const firebaseConfig = {
  apiKey: "AIzaSyASBMN1AmJoGCGNjIamPURPYnniTG_A1NI",
  authDomain: "mealstogo-a1898.firebaseapp.com",
  projectId: "mealstogo-a1898",
  storageBucket: "mealstogo-a1898.appspot.com",
  messagingSenderId: "82462344917",
  appId: "1:82462344917:web:86b239e083c51494e3845c",
  measurementId: "G-E6FPJMKFXP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
