import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {

  goFullscreen(): void {
    const iframe = document.getElementById('godot-game');

    if (!(iframe instanceof HTMLIFrameElement)) {
      return;
    }

    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if ((iframe as any).webkitRequestFullscreen) {
      (iframe as any).webkitRequestFullscreen();
    } else if ((iframe as any).mozRequestFullScreen) {
      (iframe as any).mozRequestFullScreen();
    } else if ((iframe as any).msRequestFullscreen) {
      (iframe as any).msRequestFullscreen();
    }
  }
}