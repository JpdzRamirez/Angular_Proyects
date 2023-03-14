import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';

export interface DialogData {
  nombre:string;
  especie:string;
  genero:string;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.form = new FormGroup({
      id:new FormControl(''),
      nombre: new FormControl('',Validators.required),
      genero: new FormControl('',Validators.required),
      especie: new FormControl('',Validators.required),
    })
  }

  ngOnInit():void {

  }

  save() {
    this.dialogRef.close(this.form.value);
  }
  close() {
    this.dialogRef.close();
  }


}
