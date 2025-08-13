import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { colors } from "@/theme/colors"
import { Text, View } from "react-native"
import { Separator } from "../Separator"
import { Summary } from "../Summary"

export type HomeHeaderProps = {
  total: string
}

type Props = {
  data: HomeHeaderProps
}

export function HomeHeader({ data }: Props) {
  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>Total que voçê possui</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>

      <Separator color={colors.blue[400]} />

      <View style={styles.summary}>
        <Summary
          data={{ label: "Entradas", value: "R$ 17.400,00" }}
          icon={{ name: "arrow-upward", color: colors.green[500] }}
        />
        <Summary
          data={{ label: "Saídas", value: "R$ 17.400,00" }}
          icon={{ name: "arrow-downward", color: colors.red[400] }}
          isLeft
        />
      </View>
    </LinearGradient>
  )
}
