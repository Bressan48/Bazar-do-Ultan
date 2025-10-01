//index.tsx
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';
import { AuthProvider } from '../components/AuthContext';

export default function Routes(){
    return (
        <AuthProvider>
            <NavigationContainer>
                <DrawerRoutes/>
            </NavigationContainer>
        </AuthProvider>
    )
}