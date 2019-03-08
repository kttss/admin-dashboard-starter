import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  menu = [
    {
      path: 'dashboard',
      name: 'Tableau de bord',
      icon: 'dashboard'
    },
    {
      name: 'Mission',
      icon: 'fingerprint',
      children: [
        {
          path: 'dashboard',
          name: 'En Cours',
          count: 4,
          badge: 'accent'
        },
        {
          path: 'dashboard',
          name: 'Sans rendez-vous',
          count: 3,
          badge: 'warn'
        },
        {
          path: 'dashboard',
          name: 'Avec rendez-vous',
          count: 2,
          badge: 'accent'
        },
        {
          path: 'dashboard',
          name: 'Traité',
          count: 6,
          badge: 'warn'
        },
        {
          path: 'dashboard',
          name: 'Acceptée',
          count: 8,
          badge: 'accent'
        },
        {
          path: 'dashboard',
          name: "Seuil d'expertis",
          count: 6,
          badge: 'warn'
        },
        {
          path: 'dashboard',
          name: 'PV de Carence',
          count: 7,
          badge: 'accent'
        },
        {
          path: 'dashboard',
          name: 'Douteux',
          count: 1,
          badge: 'warn'
        },
        {
          path: 'dashboard',
          name: 'Annulée',
          count: 0,
          badge: 'accent'
        }
      ]
    },
    {
      name: 'Suivi Dossier',
      icon: 'extension',
      children: [
        {
          path: 'Observation',
          name: 'Annulée',
          count: 0,
          badge: 'warn'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
