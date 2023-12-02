import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {BottomTabsBar} from "./bottomNavigation/Index";
import { MainHeader } from './topBar/Index';
import { SafeAreaProvider } from 'react-native-safe-area-context';







export default function App() {
  return (
    <SafeAreaProvider>
    
    <MainHeader title="Tuk-Tuk" /> 
      <NavigationContainer>
        <BottomTabsBar />
      </NavigationContainer>
      
    </SafeAreaProvider>
  );
}

