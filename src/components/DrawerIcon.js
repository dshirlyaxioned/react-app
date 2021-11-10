import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { WelcomeScreen, DashboardScreen } from './Drawer';

const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: DashboardScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return{
                headerLeft: (
                    <FontAwesome5.Button 
                    style={{
                        paddingLeft: 10,
                        backgroundColor: '#775948',
                        color: '#FFF'
                    }}
                    onPress={() => navigation.navigate('Dashboard')}
                    name={"md-menu"}
                    size={30}
                    />
                )
            }
        }
    }
)

export const WelcomeStackNavigator = createStackNavigator(
    {
        WelcomeNavigator: WelcomeScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon 
                    style={{
                        paddingLeft: 10,
                        backgroundColor: '#775948',
                        color: '#FFF'
                    }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                    />
                )
            }
        }
    }
)

export default DashboardStackNavigator;
