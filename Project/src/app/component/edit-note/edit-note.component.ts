import { Component, OnInit } from '@angular/core';
import { Notes } from '../../note.interface';
import { NoteService } from '../../service/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  Note: Notes[] = [];
  currentId!: string | null;

  constructor(private service: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentId = params.get('id');

      if (this.currentId !== null) {
        this.service.getNote(this.currentId).subscribe((Note) => {
          this.Note = [Note];
        });
      }
    });
  }

  saveChanges(note: Notes) {
    this.service.editNote(note).subscribe(() => {
      this.router.navigate(['/my-notes']);
    });
  }
}

