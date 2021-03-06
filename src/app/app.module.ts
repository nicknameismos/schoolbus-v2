import { AddchildPage } from './../pages/addchild/addchild';
import { Geolocation } from '@ionic-native/geolocation';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { SelectlocationPage } from './../pages/selectlocation/selectlocation';
import { RegisterServiceProvider } from './../pages/register/register.service';
import { LoginServiceProvider } from './../pages/login/login.service';
import { MapPage } from './../pages/map/map';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { NotificationPage } from './../pages/notification/notification';
import { AddAddressPage } from './../pages/add-address/add-address';
import { FeedPage } from './../pages/feed/feed';
import { TabNavPage } from './../pages/tab-nav/tab-nav';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';
import { LocationPage } from '../pages/location/location';
import { GoogleMaps } from '@ionic-native/google-maps'
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { FeedServiceProvider } from "../pages/feed/feed.service";
import { CoreserviceProvider } from '../providers/coreservice/coreservice';
import { CommentPage } from '../pages/comment/comment';
import { OrderserviceProvider } from '../providers/orderservice/orderservice';
import { MomentPipe } from '../pipes/moment/moment';
import { AgreementPage } from '../pages/agreement/agreement';
import { ProfilePage } from '../pages/profile/profile';
import { IonUploadImagesComponent } from "../components/ion-upload-image/ion-upload-image";
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { Dialogs } from '@ionic-native/dialogs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabNavPage,
    FeedPage,
    AddAddressPage,
    NotificationPage,
    LoginPage,
    RegisterPage,
    MapPage,
    SelectlocationPage,
    WalkthroughPage,
    LocationPage,
    CommentPage,
    AddchildPage,
    AgreementPage,
    MomentPipe,
    ProfilePage,
    IonUploadImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabNavPage,
    FeedPage,
    AddAddressPage,
    NotificationPage,
    LoginPage,
    RegisterPage,
    MapPage,
    SelectlocationPage,
    WalkthroughPage,
    LocationPage,
    CommentPage,
    AddchildPage,
    AgreementPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SocialSharing,
    SplashScreen,
    LoginServiceProvider,
    RegisterServiceProvider,
    Geolocation,
    ImagePicker,
    Base64,
    Facebook,
    GoogleMaps,
    NativeGeocoder,
    FeedServiceProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    CoreserviceProvider,
    CoreserviceProvider,
    OrderserviceProvider,
    Dialogs

  ]
})
export class AppModule { }
