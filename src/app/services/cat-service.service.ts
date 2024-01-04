import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  cat_questions: any[] = [
    { id: 1, respuesta: 0, pregunta: 'Nunca Toso-Siempre estoy tosiendo' },
    { id: 2, respuesta: 0
      , pregunta: 'No tengo flema (mucosidad en el pecho-Tengo el pecho completamente lleno de flema (mucosidad))' },
    { id: 3, respuesta: 0, pregunta: 'No siento ninguna opresión en el pecho - Siento mucha opresion en el pecho' },
    { id: 4, respuesta: 0, pregunta: 'Si subo una pendiente no me falta el aire- Si subo una pendiente me falta el aire' },
    { id: 5, respuesta: 0, pregunta: 'No me limito al realizar actividades domesticas-Me limito al realizar actividades domesticas' },
    { id: 6, respuesta: 0, pregunta: 'Me siento seguro al salir a pesar de mi EP - No me siento seguro al salir a pesar de mi EP'},
    { id: 7, respuesta: 0, pregunta: 'Duermo sin problemas - Tengo Problemas para dormir debido a la enfermedad pulmonar que padezco' },
    { id: 8, respuesta: 0, pregunta: 'Tengo mucha energía - No tengo ninguna energía' } 
  ];


  constructor() { }

  get_catQuestios(){
    return this.cat_questions;
  }


}
