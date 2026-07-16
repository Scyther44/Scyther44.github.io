import { Component, EventEmitter, Input, Output } from '@angular/core';

export type SectionKey = 'about' | 'experience' | 'projects' | 'education' | 'hobbies' | 'contact';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() activeSection: SectionKey = 'about';
  @Output() sectionChange = new EventEmitter<SectionKey>();

  sections: Array<{ id: SectionKey; label: string }> = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' }
  ];

  selectSection(section: SectionKey): void {
    this.sectionChange.emit(section);
  }
}
