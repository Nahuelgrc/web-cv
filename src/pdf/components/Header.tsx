import { View, Text, Image } from "@react-pdf/renderer";
import { EmailIcon, LocationIcon } from "../icons";
import { styles } from "../styles";
import type { PersonalInfo } from "../../types";

// Header: name, title and contact on the left; photo centered on the right.
export default function Header({ info }: { info: PersonalInfo }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.name}>{info.name}</Text>
        <Text style={styles.jobTitle}>{info.title}</Text>
        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <EmailIcon size={9} />
            <Text style={styles.contactText}>{info.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <LocationIcon size={9} />
            <Text style={styles.contactText}>{info.location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerRight}>
        {info.photoUrl ? <Image style={styles.photo} src={info.photoUrl} /> : null}
      </View>
    </View>
  );
}
