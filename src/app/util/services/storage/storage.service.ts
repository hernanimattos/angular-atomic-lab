import { Injectable } from '@angular/core';
import { empty } from 'rxjs';

interface IStorage {
  key: string;
  item: string;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  geLocalStorage(keyName: string): string | null {
    const item = localStorage.getItem(keyName) || '';
    return JSON.parse(item);
  }

  setLocalStorage({ key, item }: IStorage) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  geSessionStorage(keyName: string): string | null {
    const item = sessionStorage.getItem(keyName) || '';
    return JSON.parse(item);
  }

  setSessionStorage({ key, item }: IStorage) {
    sessionStorage.setItem(key, JSON.stringify(item));
  }
}
