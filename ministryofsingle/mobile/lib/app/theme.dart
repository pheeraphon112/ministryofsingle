// lib/app/theme.dart
// Single Cluster — Flutter Theme
// Maps brand-tokens.ts → Flutter ThemeData

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

// ─── Ministry of Single Colors ───────────────────────────────
class MoSColors {
  static const primary    = Color(0xFF1A1A2E);   // Deep navy
  static const accent     = Color(0xFFE63946);   // Bold red
  static const gold       = Color(0xFFF4A261);   // Warm gold
  static const cream      = Color(0xFFF8F4EF);   // Off-white
  static const charcoal   = Color(0xFF2D2D2D);
  static const muted      = Color(0xFF8A8A9A);
  static const surface    = Color(0xFFFFFFFF);
  static const border     = Color(0xFFE8E2DA);
}

// ─── Single Expo Colors ──────────────────────────────────────
class ExpoColors {
  static const primary    = Color(0xFF7B2FBE);   // Rich purple
  static const accent     = Color(0xFFFF6B6B);   // Coral red
  static const yellow     = Color(0xFFFFD60A);   // Bright yellow
  static const dark       = Color(0xFF1A0533);   // Deep purple
  static const light      = Color(0xFFFAF5FF);
  static const muted      = Color(0xFF9B89B4);
}

// ─── Ministry of Single Theme ────────────────────────────────
ThemeData get ministryOfSingleTheme => ThemeData(
  useMaterial3: true,
  colorScheme: ColorScheme.light(
    primary:   MoSColors.primary,
    secondary: MoSColors.accent,
    tertiary:  MoSColors.gold,
    surface:   MoSColors.surface,
    onPrimary: Colors.white,
    onSurface: MoSColors.charcoal,
  ),
  scaffoldBackgroundColor: MoSColors.cream,

  textTheme: TextTheme(
    // Display — Playfair equivalent
    displayLarge: GoogleFonts.playfairDisplay(
      fontSize: 48, fontWeight: FontWeight.w900,
      color: MoSColors.charcoal,
    ),
    displayMedium: GoogleFonts.playfairDisplay(
      fontSize: 36, fontWeight: FontWeight.w700,
      color: MoSColors.charcoal,
    ),
    // Headings
    headlineLarge: GoogleFonts.dmSerifDisplay(
      fontSize: 28, fontWeight: FontWeight.w700,
      color: MoSColors.charcoal,
    ),
    headlineMedium: GoogleFonts.dmSerifDisplay(
      fontSize: 22, fontWeight: FontWeight.w600,
      color: MoSColors.charcoal,
    ),
    // Body — DM Sans equivalent
    bodyLarge: GoogleFonts.dmSans(
      fontSize: 16, color: MoSColors.charcoal,
    ),
    bodyMedium: GoogleFonts.dmSans(
      fontSize: 14, color: MoSColors.charcoal,
    ),
    bodySmall: GoogleFonts.dmSans(
      fontSize: 12, color: MoSColors.muted,
    ),
    labelLarge: GoogleFonts.dmSans(
      fontSize: 14, fontWeight: FontWeight.w600,
    ),
  ),

  appBarTheme: AppBarTheme(
    backgroundColor: MoSColors.primary,
    foregroundColor: Colors.white,
    elevation: 0,
    centerTitle: false,
    titleTextStyle: GoogleFonts.dmSerifDisplay(
      fontSize: 20, fontWeight: FontWeight.w600, color: Colors.white,
    ),
  ),

  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: MoSColors.accent,
      foregroundColor: Colors.white,
      shape: const StadiumBorder(),
      padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
      textStyle: GoogleFonts.dmSans(fontSize: 16, fontWeight: FontWeight.w600),
      elevation: 0,
    ),
  ),

  outlinedButtonTheme: OutlinedButtonThemeData(
    style: OutlinedButton.styleFrom(
      foregroundColor: MoSColors.primary,
      side: const BorderSide(color: MoSColors.border, width: 1.5),
      shape: const StadiumBorder(),
      padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
    ),
  ),

  cardTheme: CardTheme(
    color: MoSColors.surface,
    elevation: 0,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(16),
      side: const BorderSide(color: MoSColors.border),
    ),
    margin: EdgeInsets.zero,
  ),

  inputDecorationTheme: InputDecorationTheme(
    filled: true,
    fillColor: MoSColors.surface,
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(12),
      borderSide: const BorderSide(color: MoSColors.border),
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(12),
      borderSide: const BorderSide(color: MoSColors.border),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(12),
      borderSide: BorderSide(color: MoSColors.accent, width: 1.5),
    ),
    hintStyle: GoogleFonts.dmSans(color: MoSColors.muted),
    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
  ),

  dividerTheme: const DividerThemeData(color: MoSColors.border, thickness: 1),
  visualDensity: VisualDensity.adaptivePlatformDensity,
);
