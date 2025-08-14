import { Text, View } from "react-native"
import { HomeHeader } from "@/components/HomeHeader"
import { Target } from "@/components/Target"

const summary = {
  total: "R$ 100,00",
  input: { label: "Entradas", value: "R$ 17.400,00" },
  output: { label: "Saídas", value: "-R$ 17.400,00" },
}

const targets = [
  {
    name: "Carro",
    percentage: 30,
    current: 1000,
    target: 3000,
  },
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <Target data={targets[0]} />
    </View>
  )
}
