import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import {Home} from "../screens/Home/index";
import {Login} from "../screens/Login/index";
import {PasswordRecovery} from "../screens/PasswordRecovery/index";
import {UserEdit} from "../screens/UserEdit/index";
import {UserList} from "../screens/UserList/index";
import {UserRegistration} from "../screens/UserRegistration/index";
import {Splash} from "../screens/Splash";

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
        name="Home"
        component={Home}
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