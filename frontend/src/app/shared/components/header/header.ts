import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faUser as faUserSolid,
  faHeart as faHeartSolid,
  faBagShopping as faBagShoppingSolid
} from '@fortawesome/free-solid-svg-icons';

import {
  faUser as faUserRegular,
  faHeart as faHeartRegular
} from '@fortawesome/free-regular-svg-icons';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  // Iconos
  readonly faMagnifyingGlass = faMagnifyingGlass;
  readonly faUserSolid = faUserSolid;
  readonly faUserRegular = faUserRegular;
  readonly faHeartSolid = faHeartSolid;
  readonly faHeartRegular = faHeartRegular;
  readonly faBagShoppingSolid = faBagShoppingSolid;

  // Estado del menú móvil
  menuOpen = false;

  // Abrir o cerrar el menú
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  
}
