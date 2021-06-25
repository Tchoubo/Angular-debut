import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inscription } from '../model/inscription.model';
import { RetourApi } from '../model/retourApi.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm =this.formBuilder.group({
    prenom: ["", Validators.required],
    nom: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required],
    password: ["", Validators.required],
    rolename: ["", Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private router: Router,
    private auth: UserService,) { }

  ngOnInit(): void {
  }
    
  save(): void {
    if(this.inscriptionForm.valid){
      const prenom = this.inscriptionForm.value.prenom;
      const nom = this.inscriptionForm.value.nom;
      const email = this.inscriptionForm.value.email;
      const phone = this.inscriptionForm.value.phone;
      const password = this.inscriptionForm.value.password;
      const rolename = this.inscriptionForm.value.rolename;
      console.log(prenom);
      console.log(nom);
      console.log(email); 
      console.log(phone);
      console.log(password);
      console.log(rolename);
      this.auth.inscription(new Inscription(prenom, nom, email, phone.toString(), password, rolename)
        ).subscribe(
        (result: RetourApi) => {
          this.router.navigate(["/connexion"]);
        },
        (error)=> {
          alert("Echec de la connexion");
        }
      );
    }else {
      alert('non merci!');
      this.inscriptionForm.controls.prenom.markAsTouched();
      this.inscriptionForm.controls.nom.markAsTouched();
      this.inscriptionForm.controls.email.markAsTouched();
      this.inscriptionForm.controls.phone.markAsTouched();
      this.inscriptionForm.controls.password.markAsTouched();
      this.inscriptionForm.controls.rolename.markAsTouched();

    }
  }

}
