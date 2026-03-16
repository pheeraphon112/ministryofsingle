# 📱 Mobile App — Single Cluster
## Flutter | iOS + Android

---

## Claude Code — อ่านก่อนทำงาน

**ใช้ร่วมกัน:** App นี้ให้บริการทั้ง ministryofsingle.com และ singleexpo.com  
**Entry points:** Bottom nav มี 3 tabs หลัก — Content, Expo, Profile  
**API:** ต่อกับ backend ที่ localhost:4000 (ministryofsingle) + 4001 (singleexpo)  
**State:** Riverpod  
**Design tokens:** ดู `../../_shared/brand-tokens.ts` แปลเป็น Flutter colors  

---

## App Structure

```
lib/
├── main.dart                   → App entry, router setup
├── app/
│   ├── app.dart                → MaterialApp + theme
│   ├── router.dart             → GoRouter config
│   └── theme.dart              → ThemeData (colors, fonts)
├── screens/
│   ├── home/
│   │   ├── home_screen.dart    → Article feed
│   │   └── article_detail_screen.dart
│   ├── expo/
│   │   ├── expo_screen.dart    → Expo info + tickets
│   │   └── schedule_screen.dart
│   ├── survey/
│   │   └── survey_screen.dart  → What Single Want survey
│   └── profile/
│       └── profile_screen.dart
├── widgets/
│   ├── article_card.dart
│   ├── expo_countdown.dart
│   ├── bottom_nav.dart
│   └── shared/
│       ├── single_button.dart
│       └── loading_shimmer.dart
├── services/
│   ├── api_service.dart        → HTTP client (Dio)
│   ├── auth_service.dart       → JWT management
│   └── storage_service.dart    → SharedPreferences
└── models/                     → Dart data models (match TS types)
    ├── article.dart
    ├── expo_event.dart
    └── user.dart
```

---

## pubspec.yaml (key dependencies)

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.4.0
  go_router: ^13.0.0
  dio: ^5.4.0
  cached_network_image: ^3.3.0
  shared_preferences: ^2.2.0
  flutter_secure_storage: ^9.0.0
  google_fonts: ^6.1.0
  shimmer: ^3.0.0
  timeago: ^3.6.0
  intl: ^0.18.0
  qr_flutter: ^4.1.0
  url_launcher: ^6.2.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0
  build_runner: ^2.4.0
```

---

## Setup

```bash
# Check Flutter
flutter --version  # requires Flutter 3.16+

# Install deps
flutter pub get

# Run on device
flutter run

# Build production
flutter build apk          # Android
flutter build ios          # iOS (Mac only)
```

---

## Priority Build Order

1. `app/theme.dart` — Colors + fonts matching brand tokens
2. `screens/home/home_screen.dart` — Article feed
3. `widgets/article_card.dart`
4. `screens/expo/expo_screen.dart` — Expo info + countdown
5. `services/api_service.dart` — API client
6. `screens/profile/profile_screen.dart`
