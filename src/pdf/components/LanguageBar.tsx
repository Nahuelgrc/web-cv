import { View, Text } from "@react-pdf/renderer";
import { styles, COLORS } from "../styles";
import type { Language } from "../../types";

// A language: name + level on the left, proficiency dots on the right.
export default function LanguageBar({ item }: { item: Language }) {
  const dots = [0, 1, 2, 3, 4];
  return (
    <View style={styles.langItem} wrap={false}>
      <View>
        <Text style={styles.langName}>{item.name}</Text>
        <Text style={styles.langLevel}>{item.level}</Text>
      </View>
      <View style={styles.dotsRow}>
        {dots.map((d) => (
          <View
            key={d}
            style={[
              styles.dot,
              { backgroundColor: d < item.dots ? COLORS.blue : COLORS.dotEmpty },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
