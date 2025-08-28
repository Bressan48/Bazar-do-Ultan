//drawer.routes.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import PaginaInicial from '../screens/PaginaInicial';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes (){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="home"
                component={PaginaInicial}
                options={{
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen
                name="login"
                component={Login}
                options={{
                    drawerLabel: 'Login'
                }}
            />
        </Drawer.Navigator>
    )
}