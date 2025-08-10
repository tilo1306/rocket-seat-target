import { Text, View } from "react-native"

import { useLocalSearchParams } from "expo-router"

export default function InProgress() {
  const { id } = useLocalSearchParams()

  console.log(id)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>In Progress</Text>
    </View>
  )
}
