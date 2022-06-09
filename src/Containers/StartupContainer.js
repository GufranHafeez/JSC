import React, { useEffect } from 'react'
import { ActivityIndicator, View, ImageBackground } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { Colors } from '@/Theme/Variables'

const StartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[Layout.fill]}>
    <ImageBackground
      source={require('Assets/Images/Splash.png')}
      resizeMode="cover"
      style={[
        Layout.alignItemsStretch,
        Layout.justifyContentCenter,
        Layout.fill,
      ]}
    >
      <ActivityIndicator
        size={'large'}
        color={Colors.appThemeColorOrange}
        style={[Gutters.largeVMargin]}
      />
    </ImageBackground>
  </View>
  )
}

export default StartupContainer
