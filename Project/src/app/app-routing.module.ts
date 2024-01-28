import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './component/note-list/note-list.component';
import { EditNoteComponent } from './component/edit-note/edit-note.component';
import { AddNoteComponent } from './component/add-note/add-note.component';

const routes: Routes = [
  {path : '', redirectTo : 'my-notes', pathMatch :'full'},
  {path : 'my-notes', component: NoteListComponent},
  {path : 'my-notes/:id/edit', component: EditNoteComponent},
  {path : 'my-notes/add-note', component: AddNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
