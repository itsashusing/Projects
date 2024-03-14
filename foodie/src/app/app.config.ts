import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ecom-cbda7","appId":"1:686405921041:web:3d39b94d6ec0e6f886c4b0","storageBucket":"ecom-cbda7.appspot.com","apiKey":"AIzaSyCTLcuvVPm-r9Csqi_kTbCdVopQorzGmi0","authDomain":"ecom-cbda7.firebaseapp.com","messagingSenderId":"686405921041"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
