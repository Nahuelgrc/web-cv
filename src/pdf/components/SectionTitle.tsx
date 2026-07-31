import type { ReactNode } from "react";
import { Text } from "@react-pdf/renderer";
import { styles } from "../styles";

// Section title with the top rule.
export default function SectionTitle({ children }: { children: ReactNode }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}
