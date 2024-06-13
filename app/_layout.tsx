import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { useColorScheme } from '@/hooks/useColorScheme';
import store from '@/redux/store';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/config/toast.config';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(qr)" options={{ headerShown: false }} />
      <Stack.Screen name="chooseDestination" options={{ headerShown: false }} />
        <Stack.Screen name="paymentConfirmation" options={{ headerShown: false }} />
        <Stack.Screen name="Rating" options={{ headerShown: false }} />
        <Stack.Screen name="Payment" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />

      </Stack>

      </Provider>
      <Toast config={toastConfig as any}/>
    </ThemeProvider>
  );
}
