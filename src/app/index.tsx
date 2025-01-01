import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '@/styles/commonStyles'
import { splashStyles } from '@/styles/splashStyles'
import CustomText from '@/components/shared/CustomText'
import { useFonts } from 'expo-font'
import { resetAndNavigate } from '@/utils/Helpers'
const Main = () => {

  const [loaded] = useFonts({
    Bold: require("../assets/fonts/NotoSans-Bold.ttf"),
    Regular: require("../assets/fonts/NotoSans-Regular.ttf"),
    Medium: require("../assets/fonts/NotoSans-Medium.ttf"),
    Light: require("../assets/fonts/NotoSans-Light.ttf"),
    SemiBold: require("../assets/fonts/NotoSans-SemiBold.ttf"),
  })

  const [hasNavigated, setHasNavigated] = useState(false)

  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeoutId = setTimeout(() => {
        tokenCheck()
        setHasNavigated(true)
      }, 2000)

      return () => clearTimeout(timeoutId)
    }
  }, [loaded, hasNavigated])


  const tokenCheck = async () => {
    resetAndNavigate("/role")
  }

  return (
    <View style={commonStyles.container}>
      <Image
        style={splashStyles.img}
        source={require("@/assets/images/logo_t.png")}
      />
      <CustomText variant='h7' fontFamily='Medium' style={splashStyles.text}>
        Made in Pakistan
      </CustomText>

    </View>
  )
}

export default Main