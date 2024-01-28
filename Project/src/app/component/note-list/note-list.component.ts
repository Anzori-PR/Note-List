import { Component, OnInit } from '@angular/core';
import { Notes } from '../../note.interface';
import { NoteService } from '../../service/note.service';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit{
  Notes: Notes[] = []; 

  faAdd = faAdd;
  faTrash = faTrash;

  constructor(private service: NoteService, private Router: Router ) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.service.getNotes().subscribe( (Notes) => {
      this.Notes = Notes;
    })
  }

  addNote() {
    this.Router.navigate(['/my-notes', 'add-note'])
  }


  deleteNote(note: Notes) {
    this.service.deleteNote(note).subscribe( () => {
      this.getNotes();
      this.Router.navigate(['/my-notes']);
    })
  }
}
