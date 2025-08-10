import { Text, View } from "react-native"

import { useLocalSearchParams } from "expo-router"

export default function Transaction() {
  const { id } = useLocalSearchParams()

  console.log(id)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Transaction Details</Text>
    </View>
  )
}
