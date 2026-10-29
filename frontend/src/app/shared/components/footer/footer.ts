import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTiktok, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  readonly faInstagram = faInstagram;
  readonly faTiktok = faTiktok;
  readonly faPinterestP = faPinterestP;
  readonly faYoutube = faYoutube;
}
