import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import type { Education } from "../../types";

// An education entry: degree + institution.
export default function EducationItem({ item }: { item: Education }) {
  return (
    <View style={styles.eduItem} wrap={false}>
      <Text style={styles.eduDegree}>{item.degree}</Text>
      <Text style={styles.eduInstitution}>{item.institution}</Text>
    </View>
  );
}
