// -----------------------------------------------------------------------------
// pdf/styles.ts
// Palette and StyleSheet for the PDF document (@react-pdf/renderer). Mirrors the
// values in web/styles.css so the PDF looks the same as the web page.
// -----------------------------------------------------------------------------
import { StyleSheet } from "@react-pdf/renderer";

export const COLORS = {
  black: "#111827",
  blue: "#2563EB",
  gray: "#6B7280",
  darkGray: "#374151",
  line: "#E5E7EB",
  chipBg: "#F9FAFB",
  chipBorder: "#D1D5DB",
  dotEmpty: "#D1D5DB",
};

export const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: COLORS.darkGray,
    lineHeight: 1.45,
  },

  // Header (left 60% / right 40% with centered photo)
  header: { flexDirection: "row" },
  headerLeft: { width: "60%", paddingRight: 18 },
  headerRight: { width: "40%", paddingLeft: 6, alignItems: "center", justifyContent: "center" },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 25,
    color: COLORS.black,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  jobTitle: { fontSize: 13, color: COLORS.blue, marginTop: 4, fontFamily: "Helvetica-Bold" },
  contactRow: { flexDirection: "row", marginTop: 10 },
  contactItem: { flexDirection: "row", alignItems: "center", marginRight: 18 },
  contactText: { fontSize: 9, color: COLORS.darkGray, marginLeft: 4, lineHeight: 1 },
  photo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    objectFit: "cover",
  },

  // Columns: main (Experience) + sidebar (Education, Skills, Languages, links)
  columns: { flexDirection: "row", marginTop: 16 },
  colLeft: { width: "60%", paddingRight: 18 },
  colRight: { width: "40%", paddingLeft: 6 },

  // Section title (rule ABOVE the title)
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: COLORS.black,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    paddingTop: 4,
    borderTopWidth: 1.5,
    borderTopColor: COLORS.black,
    marginBottom: 8,
  },
  section: { marginBottom: 16 },

  // Experience
  expItem: { marginBottom: 12 },
  expRole: { fontFamily: "Helvetica-Bold", fontSize: 10.5, color: COLORS.black },
  expCompany: { fontFamily: "Helvetica-Bold", fontSize: 10, color: COLORS.blue, marginTop: 2 },
  expDateRow: { flexDirection: "row", alignItems: "center", marginTop: 3, marginBottom: 4 },
  expDate: { fontSize: 8.5, color: COLORS.gray, marginLeft: 4, lineHeight: 1 },
  expDesc: { fontSize: 9, color: COLORS.darkGray, marginBottom: 5 },

  bulletRow: { flexDirection: "row", marginBottom: 3.5 },
  bulletDot: { width: 9, fontSize: 9, color: COLORS.darkGray },
  bulletBody: { flex: 1, fontSize: 9, color: COLORS.darkGray },
  bulletHighlight: { fontFamily: "Helvetica-Bold", color: COLORS.black },

  // Education
  eduItem: { marginBottom: 9 },
  eduDegree: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: COLORS.black },
  eduInstitution: { fontSize: 9, color: COLORS.blue, marginTop: 2 },

  // Skills
  chipWrap: { flexDirection: "row", flexWrap: "wrap" },
  chip: {
    borderWidth: 1,
    borderColor: COLORS.chipBorder,
    backgroundColor: COLORS.chipBg,
    borderRadius: 4,
    paddingVertical: 2.5,
    paddingHorizontal: 6,
    marginRight: 5,
    marginBottom: 5,
  },
  chipText: { fontSize: 8.5, color: COLORS.darkGray, fontFamily: "Helvetica-Bold", lineHeight: 1 },

  // Languages
  langItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  langName: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: COLORS.black },
  langLevel: { fontSize: 8.5, color: COLORS.gray, marginTop: 1 },
  dotsRow: { flexDirection: "row", alignItems: "center" },
  dot: { width: 6, height: 6, borderRadius: 3, marginLeft: 3 },

  // Social
  socialItem: { paddingBottom: 7, marginBottom: 7, borderBottomWidth: 1, borderBottomColor: COLORS.line },
  socialItemLast: { paddingBottom: 0, marginBottom: 0 },
  socialHead: { flexDirection: "row", alignItems: "center" },
  socialName: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: COLORS.black, marginLeft: 5, lineHeight: 1 },
  socialUrl: { fontSize: 8, color: COLORS.gray, marginTop: 2, marginLeft: 16 },
});
