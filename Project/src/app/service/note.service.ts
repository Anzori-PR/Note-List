import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Notes } from '../note.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  JsonUrl: string;
  destination!: string;

  constructor(private http: HttpClient) { 
    this.JsonUrl = "http://localhost:3000/Notes"
  }

  getNotes() : Observable<Notes[]>{
    return this.http.get<Notes[]>(this.JsonUrl);
  }

  getNote(id: string): Observable<Notes> {
    return this.http.get<Notes>(`${this.JsonUrl}/${id}`);
  }

  editNote(note: Notes): Observable<Notes> {
    return this.http.put<Notes>(`${this.JsonUrl}/${note.id}`, note);
  }
  
  addNote(addNote: Notes): Observable<Notes> {
    return this.http.post<Notes>(this.JsonUrl, addNote);
  }

  deleteNote(note: Notes) {
    return this.http.delete<Notes>(`${this.JsonUrl}/${note.id}`);
  }
  
}
