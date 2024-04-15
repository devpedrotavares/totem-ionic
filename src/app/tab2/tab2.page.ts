import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonInput, IonCardContent, IonButton, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { SenhasService } from '../services/senhas.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardContent, IonInput, IonButton, IonLabel, IonList, IonItem, CommonModule],
})
export class Tab2Page {

  constructor(public senhasService: SenhasService) {}

}
