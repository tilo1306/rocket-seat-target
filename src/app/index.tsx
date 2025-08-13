import { Text, View } from "react-native"
import { HomeHeader } from "@/components/HomeHeader"

const summary = {
  total: "R$ 100,00",
  input: { label: "Entradas", value: "R$ 17.400,00" },
  output: { label: "Saídas", value: "-R$ 17.400,00" },
}

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
    </View>
  )
}
