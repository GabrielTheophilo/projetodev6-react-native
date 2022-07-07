import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import PasswordRecovery from "../screens/PasswordRecovery";
import UserEdit from "../screens/UserEdit";
import UserList from "../screens/UserList";
import UserRegistration from "../screens/UserRegistration/index";
import Splash from "../screens/Splash";
import CategoryList from "../screens/CategoryList/index";
import CategoryEdit from "../screens/CategoryEdit/index";
import CategoryAdd from "../screens/CategoryAdd/index";


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
      <Screen
        name="CategoryList"
        component={CategoryList}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CategoryEdit"
        component={CategoryEdit}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CategoryAdd"
        component={CategoryAdd}
        options={{
          headerShown: false,
        }}
      />

    </Navigator>
  );
}
