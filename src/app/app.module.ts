import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BreadcrumbComponent} from './shared/component/breadcrumb/breadcrumb.component';
import {CloudResearchEnvironmentComponent} from './home/cloud-research-environment/cloud-research-environment.component';
import {CloudResearchEnvironmentLocalInstallationComponent} from './home/cre-local-installation/';
import {CloudResearchEnvironmentLocalInstallationInstructionComponent} from './home/cre-local-installation-instruction/';
import {HeaderComponent} from './shared/component/header/header.component';
import {HelpComponent} from './help/help.component';
import {HelpTopicComponent} from './help/help-topic/help-topic.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './shared/component/footer/footer.component';
import {CarouselComponent} from './shared/component/carousel/carousel.component';
import {SlideComponent} from './shared/component/carousel/slide/slide.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {CollapseDirective, ModalModule} from 'ng2-bootstrap';
import {BreadcrumbService} from './shared/component/breadcrumb/breadcrumb.service';
import {WikiService} from './shared/service/wiki/wiki.service';
import {Ng2PhenomenalPortalRoutingModule} from './app-routing.module';
import {JenkinsReportService} from './shared/service/jenkins-report/jenkins-report.service';
import {ApplicationLibraryService} from './shared/service/application-library/application-library.service';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WorkflowComponent} from './workflow/workflow.component';
import {AuthService, CredentialService, ConfigService, ErrorService, TokenService} from 'ng2-cloud-portal-service-lib';
import {SetupCloudEnvironmentComponent} from './setup-cloud-environment/setup-cloud-environment.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent, NgbdModalContentComponent} from './shared/component/modal/modal.component';
import {
  ProgressBarModalComponent,
  ProgressBarModalContentComponent
} from './shared/component/progress-bar-modal/progress-bar-modal.component';
import { ProgressBarComponent } from './shared/component/progress-bar/progress-bar.component';
import { CreDashboardComponent } from './cre-dashboard/cre-dashboard.component';
import {ClipboardModule} from 'angular2-clipboard';

export function SSOConfigService () {
  return new ConfigService('https://dev.api.portal.tsi.ebi.ac.uk/', 'https://api.aap.tsi.ebi.ac.uk/');
}

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CarouselComponent,
    CloudResearchEnvironmentComponent,
    CloudResearchEnvironmentLocalInstallationComponent,
    CloudResearchEnvironmentLocalInstallationInstructionComponent,
    HeaderComponent,
    HelpComponent,
    HelpTopicComponent,
    HomeComponent,
    FooterComponent,
    SlideComponent,
    StatisticsComponent,

    CollapseDirective,

    StatisticsComponent,

    LoginComponent,

    RegisterComponent,

    DashboardComponent,

    WorkflowComponent,

    SetupCloudEnvironmentComponent,

    ModalComponent,
    NgbdModalContentComponent,

    ProgressBarModalComponent,
    ProgressBarModalContentComponent,
    ProgressBarComponent,
    CreDashboardComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    FormsModule,
    HttpModule,
    ModalModule,
    NgbModule.forRoot(),
    Ng2PhenomenalPortalRoutingModule
  ],
  entryComponents: [NgbdModalContentComponent, ProgressBarModalContentComponent],
  providers: [
    {
      provide: ConfigService,
      useFactory: SSOConfigService,
      deps: []
    },
    BreadcrumbService,
    WikiService,
    JenkinsReportService,
    ApplicationLibraryService,

    AuthService,
    ErrorService,
    CredentialService,
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
