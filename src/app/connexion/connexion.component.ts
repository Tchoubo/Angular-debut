import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';
import { Connexion } from '../model/connexion.model';
import { RetourConnexion } from '../model/retourConnexion.model';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm =this.formBuilder.group({
    username: ["", Validators.required],
    passwordi: ["", Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private router: Router,
    private auth: ConnexionService,) { }

  ngOnInit(): void {
  }

  saveConnexion(): void {
    if(this.connexionForm.valid){
      const username = this.connexionForm.value.username;
      const passwordi = this.connexionForm.value.passwordi;
      console.log(username);
      console.log(passwordi); 
      this.auth.connexion(new Connexion(username, passwordi)).subscribe(
        (result: RetourConnexion) => {
          this.router.navigate(["/inscription"]);
        },
        (error)=> {
          alert("Echec de la connexion");
        }
      );
    }else {
      alert('non merci!');
      this.connexionForm.controls.username.markAsTouched();
      this.connexionForm.controls.passwordi.markAsTouched();
    }
  }


}
