import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

interface Contact {
  id: number
  name: string
  link: string
  date: string
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  contacts: Contact[] = [
    { id: 1, name: "Telegram", link: "https://t.me/AppModule", date: new Date().toLocaleDateString() },
    { id: 2, name: "Instagram", link: "https://instagram.com/_alireza.m32", date: new Date().toLocaleDateString() },
  ]
}
