import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';

export interface personaje {
  nombre:string;
  especie:string;
  genero:string;
}
@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent  {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: personaje,
  ) {
    this.form = new FormGroup({
      id:new FormControl(''),
      nombre: new FormControl('',Validators.required),
      genero: new FormControl('',Validators.required),
      especie: new FormControl('',Validators.required),
    })
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
  close() {
    this.dialogRef.close();
  }


}
