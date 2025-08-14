import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"

type TargetProps = {
  id?: string
  name: string
  percentage: number
  current: number
  target: number
}

type Props = TouchableOpacityProps & {
  data: TargetProps
}

export function Target({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.status}>
          {data.percentage}% • R$ {data.current} de {data.target}
        </Text>
      </View>
      <MaterialIcons name="chevron-right" size={20} />
    </TouchableOpacity>
  )
}
