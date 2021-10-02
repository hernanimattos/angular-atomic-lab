import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent, ModalComponent, ToastComponent } from './component';
import { StorageService } from './services';

@NgModule({
  declarations: [
    AlertComponent,
    ModalComponent,
    ToastComponent,
    // StorageService,
  ],
  imports: [CommonModule],
  exports: [AlertComponent, ModalComponent, ToastComponent],
  providers: [StorageService],
})
export class UtilModule {}
