// cat.component.ts
import { Component, OnInit, Output, Input } from '@angular/core';
import { CatServiceService } from 'src/app/services/cat-service.service';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {
  cat_questions: any[] = [];
  respuestas: { id: number; respuesta: number }[] = [];

  pointer_question: number = 0;
  question: String = '';
  limit: number = 0;

  selectedOption: any;
  is_selectedOption: boolean = false;
  is_advance: boolean = false;
  is_sent: boolean = false;
  alertButtons = ['Aceptar'];

  constructor(private catservice: CatServiceService,
            private alertController: AlertController,
            private router: Router,
            ) {
    this.clearAll();
  }

  ngOnInit() {
   
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Tesrminaste tu Test',
      //subHeader: 'A Sub Header Is Optional',
      message: 'La informacion se envio correctamente.',
      buttons: [
        {text: 'Aceptar',
        handler: () => { this.redirectToHome();
        }}],
    });

    await alert.present();

  }

  advance_question(){
    if (this.is_selectedOption === true){
      if (this.pointer_question < this.limit){
        this.pointer_question = this.pointer_question + 1;
        this.question = this.cat_questions[this.pointer_question].pregunta;
        this.is_advance = false;
        this.resetSelectedOption();
      }  
    }
  }


  resetSelectedOption() {
    this.selectedOption = null;
    this.is_selectedOption = false;
  }

  
  before_question(){
    if (this.pointer_question > 0){
      this.pointer_question = this.pointer_question - 1;
      this.question = this.cat_questions[this.pointer_question].pregunta;
      this.resetSelectedOption();
    } 
  }

  seleccionarRespuesta(respuesta: number) {
    this.cat_questions[this.pointer_question].respuesta = respuesta;
    this.is_selectedOption = true;
    
    if (this.limit != this.pointer_question){
      this.is_advance = true;
    }else{
      this.is_sent = true;
    }


  }

  async redirectToHome() {
    if (this.is_selectedOption === true) {
      await this.clearAll();
      this.router.navigate(['/home']);
    }
  }

  clearAll(){
    this.pointer_question= 0;
    this.resetSelectedOption();
    this.cat_questions = this.catservice.cat_questions;
    this.limit = (this.cat_questions.length) -1 ;
    this.question = this.cat_questions[this.pointer_question].pregunta;
    this.is_sent = false;
  }

  
}
