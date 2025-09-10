import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface FormUser {
  id: string;
  name: string;
  surname: string;
  age: number;
  isMarried: boolean;
}

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  private readonly _fb = inject(FormBuilder);
  public personalDataForm: FormGroup;

  public personalData?: FormUser;

  private readonly _formControls = {
    id: [''],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    age: [0],
    isMarried: [false],
  };

  constructor() {
    this.personalDataForm = this._fb.group(this._formControls);
  }

  public isInvalidField(field: string): 'default' | 'error' {
    const control = this.personalDataForm.controls[field];
    if (!control) return 'default';
    return control.invalid && control.touched ? 'error' : 'default';
  }

  public submit() {
    if (this.personalDataForm.invalid) {
      this.personalDataForm.markAllAsTouched();
      return;
    }
    this.personalData = this.personalDataForm.value
  }

  public resetForm(): void {
    this.personalDataForm.reset();
  }
}
