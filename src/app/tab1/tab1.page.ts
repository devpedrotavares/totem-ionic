import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonInput, IonCardContent, IonButton, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { SenhasService } from '../services/senhas.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardContent, IonInput, IonButton, IonList, IonLabel, IonItem, CommonModule],
})
export class Tab1Page {
  constructor(public senhasService: SenhasService) {}
}
