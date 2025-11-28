import { Component } from '@angular/core';
import { ArLauncherPage } from '../pages/ar-launcher/ar-launcher.page';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    private readonly modalController: ModalController,
    private readonly routerOutlet: IonRouterOutlet,
  ) {}

  public async openAR() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ArLauncherPage,
      presentingElement: this.routerOutlet.nativeEl,
    });

    return await modal.present();
  }

}
