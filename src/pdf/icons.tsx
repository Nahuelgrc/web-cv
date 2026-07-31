// -----------------------------------------------------------------------------
// icons.tsx (pdf)
// Vector icons using @react-pdf/renderer SVG primitives, used ONLY in the
// downloaded PDF document (ResumePdf.tsx). They mirror web/icons.tsx so the
// PDF looks the same as the web page.
// -----------------------------------------------------------------------------
import { Svg, Path, Circle, Rect } from "@react-pdf/renderer";

const GRAY = "#6B7280";
const BLUE = "#2563EB";

interface IconProps {
  size?: number;
  color?: string;
}

// Envelope (email)
export function EmailIcon({ size = 9, color = GRAY }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke={color} strokeWidth="2" />
      <Path d="M2 6 L12 13 L22 6" fill="none" stroke={color} strokeWidth="2" />
    </Svg>
  );
}

// Location pin
export function LocationIcon({ size = 9, color = GRAY }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 2 C7.6 2 4 5.6 4 10 C4 16 12 22 12 22 C12 22 20 16 20 10 C20 5.6 16.4 2 12 2 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <Circle cx="12" cy="10" r="3" fill="none" stroke={color} strokeWidth="2" />
    </Svg>
  );
}

// Calendar
export function CalendarIcon({ size = 9, color = GRAY }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x="3" y="4" width="18" height="17" rx="2" fill="none" stroke={color} strokeWidth="2" />
      <Path d="M3 9 H21 M8 2 V6 M16 2 V6" fill="none" stroke={color} strokeWidth="2" />
    </Svg>
  );
}

// LinkedIn
export function LinkedInIcon({ size = 11, color = "#0A66C2" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x="0" y="0" width="24" height="24" rx="4" fill={color} />
      <Path
        d="M6.94 8.5 H4.5 V19 H6.94 Z M5.72 4.5 A1.4 1.4 0 1 0 5.72 7.3 A1.4 1.4 0 0 0 5.72 4.5 Z M19.5 19 H17.06 V13.6 C17.06 12.3 16.55 11.5 15.4 11.5 C14.55 11.5 14.08 12.07 13.86 12.62 C13.78 12.82 13.79 13.1 13.79 13.38 V19 H11.36 C11.36 19 11.39 9.4 11.36 8.5 H13.79 V9.98 C14.11 9.48 14.69 8.77 16 8.77 C17.63 8.77 19.5 9.83 19.5 12.6 Z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

// GitHub
export function GitHubIcon({ size = 11, color = "#181717" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 1.5 A10.5 10.5 0 0 0 8.68 22 c.52.1.71-.23.71-.5 0-.25-.01-.9-.01-1.77-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.09-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.9 1.08a10 10 0 0 1 5.28 0c2.02-1.36 2.9-1.08 2.9-1.08.57 1.45.21 2.52.1 2.79.68.73 1.09 1.67 1.09 2.82 0 4.04-2.46 4.93-4.8 5.19.38.33.71.97.71 1.96 0 1.42-.01 2.56-.01 2.91 0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z"
        fill={color}
      />
    </Svg>
  );
}

// Stack Overflow
export function StackOverflowIcon({ size = 11 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M17.4 20.3 V14.6 H19.3 V22.2 H4.7 V14.6 H6.6 V20.3 Z" fill="#BCBBBB" />
      <Path
        d="M8.5 13.9 L16.1 15.5 L16.5 13.7 L8.9 12.1 Z M9.5 9.9 L16.6 13.2 L17.4 11.5 L10.3 8.2 Z M11.5 6.2 L17.5 11.2 L18.7 9.8 L12.7 4.8 Z M15.4 2.3 L14 3.4 L18.7 9.6 L20.1 8.6 Z M8.3 18.4 H16 V16.6 H8.3 Z"
        fill="#F48024"
      />
    </Svg>
  );
}

// Selector by platform name
export function SocialIcon({ platform, size = 11 }: IconProps & { platform: string }) {
  const p = (platform || "").toLowerCase();
  if (p.includes("linkedin")) return <LinkedInIcon size={size} />;
  if (p.includes("github")) return <GitHubIcon size={size} />;
  if (p.includes("stack")) return <StackOverflowIcon size={size} />;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx="12" cy="12" r="10" fill={BLUE} />
    </Svg>
  );
}
