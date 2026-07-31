import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import type { Bullet as BulletType } from "../../types";

// Achievement bullet: optional bold prefix (highlight) + text.
export default function Bullet({ highlight, text }: BulletType) {
  return (
    <View style={styles.bulletRow} wrap={false}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletBody}>
        {highlight ? <Text style={styles.bulletHighlight}>{highlight} </Text> : null}
        {text}
      </Text>
    </View>
  );
}
