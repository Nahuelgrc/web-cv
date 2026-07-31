import { View, Text } from "@react-pdf/renderer";
import { SocialIcon } from "../icons";
import { styles } from "../styles";
import type { Social } from "../../types";

// A social platform: icon + name and the URL label.
export default function SocialItem({ item, last }: { item: Social; last: boolean }) {
  return (
    <View style={[styles.socialItem, last ? styles.socialItemLast : {}]} wrap={false}>
      <View style={styles.socialHead}>
        <SocialIcon platform={item.platform} size={11} />
        <Text style={styles.socialName}>{item.platform}</Text>
      </View>
      <Text style={styles.socialUrl}>{item.label}</Text>
    </View>
  );
}
