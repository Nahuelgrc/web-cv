import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";

// Skill chip (bordered box).
export default function SkillChip({ label }: { label: string }) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{label}</Text>
    </View>
  );
}
