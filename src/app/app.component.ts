import { Component } from '@angular/core';
import { StorageService } from './util/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-get-lab';

  constructor(private storageService: StorageService) {
    this.storageService.setLocalStorage({ key: 'nome', item: 'hernani' });
  }
}
