import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note.service';
import { Notes } from '../../note.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit{
  id: number = 0;
  Notes: Notes[] = [];
  note: Notes = {
    id: '',
    title: '',
    content: '',
    isImportant: false,
    create_date: new Date()
  };

  constructor(private service: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.service.getNotes().subscribe( (notes) => {
      this.Notes = notes;

      this.note.id = (this.Notes.length).toString();
    })
    
  }

  saveChanges() {
    if(this.note.title == '') {
      alert ("please write title");
    }else {
      this.service.addNote(this.note).subscribe( (res) => {
        this.note = res;
      });
      this.router.navigate(['my-notes'])
    }
  }

}
