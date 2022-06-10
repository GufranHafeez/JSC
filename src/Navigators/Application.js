import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import SplashScreen from 'react-native-splash-screen'
import { useNetInfo } from '@react-native-community/netinfo'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { Colors } from '@/Theme/Variables'
import { navigationRef } from './utils'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, Gutters, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const netinfo = useNetInfo()
  console.log('ê43434')
  console.log(netinfo.isConnected)
  console.log('ê43434')
  React.useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000)
  })
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.charcoal }]}>
      {netinfo.isConnected ? (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/*<Stack.Screen name="Startup" component={StartupContainer} />*/}
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <View
          style={[
            [
              Layout.colCenter,
              Gutters.smallHPadding,
              {
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginVertical: 360,
                backgroundColor: Colors.transparent,
              },
            ],
          ]}
        >
          <Icon name="wifi-off" size={50} color={Colors.appThemeColorOrange} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.white,
            }}
          >
            You are currently Offline.
          </Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default ApplicationNavigator
