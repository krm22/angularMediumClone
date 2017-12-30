import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { EditorModule } from './editor/editor.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';

import {
  SharedModule,
  AuthGuard,
  ApiService,
  UserService,
  JwtService,
  ProfilesService,
  ArticlesService,
  FooterComponent,
  HeaderComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    AuthModule,
    EditorModule,
    SharedModule,
    HomeModule,
    ProfileModule,
    SettingsModule,
    rootRouting
  ],
  providers: [
    ApiService,
    AuthGuard,
    JwtService,
    ProfilesService,
    ArticlesService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
