import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ph-cre-local-installation-instruction',
  templateUrl: './cre-local-installation-instruction.component.html',
  styleUrls: ['./cre-local-installation-instruction.component.css']
})
export class CRELocalInstallationInstructionComponent {
  enableQ2: boolean;
  enableQ3: boolean;
  enableQ4: boolean;
  enableQ5: boolean;
  enableQ6: boolean;

  disableQ1O1: boolean;
  disableQ1O2: boolean;
  disableQ2O1: boolean;
  disableQ2O2: boolean;
  disableQ3O1: boolean;
  disableQ3O2: boolean;
  disableQ3O3: boolean;
  disableQ3O4: boolean;
  disableQ4O1: boolean;
  disableQ4O2: boolean;
  disableQ4O3: boolean;
  disableQ5O1: boolean;
  disableQ5O2: boolean;
  disableQ5O3: boolean;

  enableInstruction: boolean;

  isMac: boolean;
  isWindows: boolean;

  constructor(private router: Router) {
    this.resetAll();
  }

  redirectURL() {
    if (this.isWindows) {
      this.router.navigateByUrl('help/Windows-mini-kube');
    } else {
      this.router.navigateByUrl('help/galaxy-with-k8s');
    }
  }

  q1o1() {
    this.resetAll();

    this.enableQ2 = true;

    this.disableQ1O1 = true;

  }

  q1o2() {
    this.resetAll();

    this.enableQ4 = true;

    this.disableQ1O2 = true;

  }

  q2o1() {

    this.resetExcludeQ1();

    this.enableQ6 = true;

    this.disableQ2O1 = true;

    this.enableInstruction = true;
    if (navigator['platform'] === 'MacIntel') {
      this.isMac = true;
    }
  }

  q2o2() {

    this.resetExcludeQ1();

    this.enableQ3 = true;

    this.disableQ2O2 = true;

  }

  q3o1() {

    this.resetExcludeQ2();

    this.disableQ3O1 = true;

    this.enableInstruction = true;

    this.isWindows = true;
  }

  q3o2() {
    this.resetExcludeQ2();

    this.disableQ3O2 = true;

    this.enableInstruction = true;

    this.isMac = true;

  }

  q3o3() {

    this.resetExcludeQ2();

    this.disableQ3O3 = true;

    this.enableInstruction = true;

    this.isMac = true;
  }

  q3o4() {

    this.resetExcludeQ2();

    this.disableQ3O4 = true;

    this.enableInstruction = true;

    this.isMac = true;
  }

  q4o1() {

    this.resetExcludeQ4();

    this.enableQ5 = true;

    this.disableQ4O1 = true;
  }

  q4o2() {
    this.resetExcludeQ4();

    this.enableQ5 = true;

    this.disableQ4O2 = true;
  }

  q4o3() {
    this.resetExcludeQ4();

    this.enableQ5 = true;

    this.disableQ4O3 = true;
  }

  q5o1() {

    this.resetExcludeQ5();

    this.disableQ5O1 = true;

    this.enableInstruction = true;
  }

  q5o2() {
    this.resetExcludeQ5();

    this.disableQ5O2 = true;

    this.enableInstruction = true;
  }

  q5o3() {
    this.resetExcludeQ5();

    this.disableQ5O3 = true;

    this.enableInstruction = true;
  }

  private resetAll() {
    this.enableQ2 = false;
    this.enableQ3 = false;
    this.enableQ4 = false;
    this.enableQ5 = false;
    this.enableQ6 = false;

    this.disableQ1O1 = false;
    this.disableQ1O2 = false;
    this.disableQ2O1 = false;
    this.disableQ2O2 = false;
    this.disableQ3O1 = false;
    this.disableQ3O2 = false;
    this.disableQ3O3 = false;
    this.disableQ3O4 = false;
    this.disableQ4O1 = false;
    this.disableQ4O2 = false;
    this.disableQ4O3 = false;
    this.disableQ5O1 = false;
    this.disableQ5O2 = false;
    this.disableQ5O3 = false;

    this.enableInstruction = false;

    this.isMac = false;
    this.isWindows = false;
  }

  private resetExcludeQ1() {
    this.enableQ3 = false;
    this.enableQ4 = false;
    this.enableQ5 = false;
    this.enableQ6 = false;

    this.disableQ2O1 = false;
    this.disableQ2O2 = false;
    this.disableQ3O1 = false;
    this.disableQ3O2 = false;
    this.disableQ3O3 = false;
    this.disableQ3O4 = false;
    this.disableQ4O1 = false;
    this.disableQ4O2 = false;
    this.disableQ4O3 = false;
    this.disableQ5O1 = false;
    this.disableQ5O2 = false;
    this.disableQ5O3 = false;

    this.enableInstruction = false;

    this.isMac = false;
    this.isWindows = false;
  }

  private resetExcludeQ2() {
    this.enableQ4 = false;
    this.enableQ5 = false;
    this.enableQ6 = false;

    this.disableQ3O1 = false;
    this.disableQ3O2 = false;
    this.disableQ3O3 = false;
    this.disableQ3O4 = false;
    this.disableQ4O1 = false;
    this.disableQ4O2 = false;
    this.disableQ4O3 = false;
    this.disableQ5O1 = false;
    this.disableQ5O2 = false;
    this.disableQ5O3 = false;

    this.enableInstruction = false;

    this.isMac = false;
    this.isWindows = false;
  }

  private resetExcludeQ4() {
    this.enableQ3 = false;
    this.enableQ5 = false;
    this.enableQ6 = false;

    this.disableQ3O1 = false;
    this.disableQ3O2 = false;
    this.disableQ3O3 = false;
    this.disableQ3O4 = false;
    this.disableQ4O1 = false;
    this.disableQ4O2 = false;
    this.disableQ4O3 = false;
    this.disableQ5O1 = false;
    this.disableQ5O2 = false;
    this.disableQ5O3 = false;

    this.enableInstruction = false;

    this.isMac = false;
    this.isWindows = false;
  }

  private resetExcludeQ5() {
    this.enableQ3 = false;
    this.enableQ6 = false;

    this.disableQ3O1 = false;
    this.disableQ3O2 = false;
    this.disableQ3O3 = false;
    this.disableQ3O4 = false;
    this.disableQ5O1 = false;
    this.disableQ5O2 = false;
    this.disableQ5O3 = false;

    this.enableInstruction = false;

    this.isMac = false;
    this.isWindows = false;
  }
}
