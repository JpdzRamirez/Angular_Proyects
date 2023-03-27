import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';

//Estructura del data recibido en el dialog emergente

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

  sampleForm: FormGroup;


  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: personaje,) {
          this.sampleForm = new FormGroup({
          'nombre': new FormControl('', [Validators.required]),
          'genero': new FormControl('', [Validators.required]),
          'especie': new FormControl('', [Validators.required])
          });
    }

  save() {
    this.dialogRef.close(this.sampleForm.value);
  }
  close() {
    this.dialogRef.close();
  }


}
