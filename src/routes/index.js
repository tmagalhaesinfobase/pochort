import * as React from 'react';
import { View,Text } from 'react-native';
import {NavigationContainer,useNavigation,useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../pages/Home';
import {WelcomeScreen} from '../pages/Welcome';
import {LogBookScreen} from '../pages/LogBook';
import {HeaderBackButton} from '../components/HeaderBackButton';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>

       <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
        
        <Stack.Screen options={{
          headerShown:true,
          headerTitle: 'Home',
          headerLeft:(props)=>{
            const route = useRoute();
            const headerLeftInfo = route.params?.headerLeftInfo;
            if(headerLeftInfo){
              return (
                <HeaderBackButton
                  {...props}  
                  title={headerLeftInfo.title}
                  onPress={headerLeftInfo.onPress}
                />
              );
            }
            

            return(
              <HeaderBackButton title={props?.label} {...props}/>
            )


          }
        }} name="LogBookScreen" component={LogBookScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {Routes};