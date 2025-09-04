//drawer.routes.tsx
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import PaginaInicial from '../screens/PaginaInicial';
import Login from '../screens/Login';
import Contato from '../screens/Contato';

const Drawer = createDrawerNavigator();

//NAVBAR 
function CustomHeader({ navigation }: { navigation: any }) {
  return (
    <View style={styles.headerBar}>

      {/* Botão de menu */}
      <View style={styles.navbarLeft}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="menu" size={40} style={styles.headerAction1}/>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.navbarMiddle}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
                source={require('../assets/dice colored.png')}
                style={styles.headerAction2}
            />
        </TouchableOpacity>
      </View>

      {/* Botão de login/logout */}
      <View style={styles.navbarRight}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.headerAction3}>log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//LISTA DO DRAWER
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={require('../assets/BAZARWhite-Photoroom (1).png')} style={styles.logo} />
      </View>

      {/* Pega as telas automaticamente e aplica as cores configuradas */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


//DRAWER
export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
    //aplicacao da navbar
      screenOptions={({ navigation }) => ({
        header: () => <CustomHeader navigation={navigation} />,
        headerShown: true,
        drawerActiveTintColor: '#EBCA7F',
        drawerInactiveTintColor: '#EBCA7F',
        drawerStyle: { backgroundColor: '#120D02' },
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={PaginaInicial} options={{ drawerLabel: 'Início' }} />
      <Drawer.Screen name="Contato" component={Contato} options={{ drawerLabel: 'Contato' }} />
    </Drawer.Navigator>
  );
}

//ESTILOS
const styles = StyleSheet.create({
  //navbar
  headerBar: {
    height: 60,
    backgroundColor: '#120D02',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  navbarLeft: {flex: 1, alignItems: 'flex-start',},
  navbarMiddle: {flex: 1, alignItems: 'center'},
  navbarRight: {flex: 1, alignItems: 'flex-end',},
  headerAction1: { color: '#EBCA7F', fontWeight: 'bold', },
  headerAction2: { width: 35, height: 35, resizeMode: 'contain',  },
  headerAction3: { color: '#EBCA7F', fontWeight: 'bold', fontSize:18, },

  //drawer
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffffff',
  },
  logo: { width: 120, height: 60, resizeMode: 'contain' },
  title: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
});
