// lib/main.dart
// Single Cluster — Flutter App Entry Point
// Covers: ministryofsingle.com + singleexpo.com

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'app/app.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(
    const ProviderScope(
      child: SingleClusterApp(),
    ),
  );
}
