import { View, Text } from "@react-pdf/renderer";
import { CalendarIcon } from "../icons";
import Bullet from "./Bullet";
import { styles } from "../styles";
import type { Experience } from "../../types";

// A work experience: role, company, dates, description and bullets.
export default function ExperienceItem({ item }: { item: Experience }) {
  return (
    <View style={styles.expItem} wrap={false}>
      <Text style={styles.expRole}>{item.role}</Text>
      <Text style={styles.expCompany}>{item.company}</Text>
      <View style={styles.expDateRow}>
        <CalendarIcon size={9} />
        <Text style={styles.expDate}>{item.dateRange}</Text>
      </View>
      {item.description ? <Text style={styles.expDesc}>{item.description}</Text> : null}
      {item.bullets.map((b, i) => (
        <Bullet key={i} highlight={b.highlight} text={b.text} />
      ))}
    </View>
  );
}
