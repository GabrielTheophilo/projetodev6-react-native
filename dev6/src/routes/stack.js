import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "../screens/home";
import Login from "../screens/Login";
import PasswordRecovery from "../screens/PasswordRecovery";
import UserEdit from "../screens/UserEdit";
import UserList from "../screens/UserList";
import UserRegistration from "../screens/UserRegistration";
import Splash from "../screens/splash";

const { Screen, Navigator } = createNativeStackNavigator();

export function Stack() {
  return (
    <Navigator>
      <Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
       <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="PasswordRecovery"
        component={PasswordRecovery}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="UserEdit"
        component={UserEdit}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="UserList"
        component={UserList}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="UserRegistration"
        component={UserRegistration}
        options={{
          headerShown: false,
        }}
      />
    
    </Navigator>
  );
}