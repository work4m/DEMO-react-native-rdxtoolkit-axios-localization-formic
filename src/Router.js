import React, { useEffect, useRef } from 'react';
import { I18nManager } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Home from './screens/Home';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

const Router = () => {
    const { i18n } = useTranslation();
    const { language } = useSelector(state => state.localization);

    useEffect(() => {
        i18n.changeLanguage(language);
        console.log("change language to " + language);
    }, [language])


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
