import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getDataConnect, provideDataConnect } from '@angular/fire/data-connect';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      projectId: "shopifi-ba065",
      appId: "1:830520642675:web:8c65a32f400d2aa94f6e06",
      storageBucket: "shopifi-ba065.firebasestorage.app",
      apiKey: "AIzaSyAPVvTh4YnE_xY4r9KLa_XACmBSzrQo9Kg",
      authDomain: "shopifi-ba065.firebaseapp.com",
      messagingSenderId: "830520642675",
      measurementId: "G-38FTG9QFZK"
      // Removed: projectNumber and version (not valid FirebaseOptions properties)
    })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideAppCheck(() => {
      // Get your reCAPTCHA Enterprise site key from:
      // https://console.cloud.google.com/security/recaptcha?project=shopifi-ba065
      const provider = new ReCaptchaEnterpriseProvider('YOUR_RECAPTCHA_SITE_KEY_HERE');
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideDataConnect(() => getDataConnect({
      connector: "example",
      location: "us-east4",
      service: "shopifi"
    })),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideVertexAI(() => getVertexAI())
  ]
};
