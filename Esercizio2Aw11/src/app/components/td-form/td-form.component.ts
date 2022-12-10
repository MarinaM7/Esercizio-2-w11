import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  constructor() { }

  @ViewChild('form', {static:true}) form!: NgForm;

  powers = ['super-vista','super-udito', 'invisibilità', 'velocità', 'forza-bruta']

  hero = {
    nome: '',
    alterEgo: '',
    superPotere: '',
    nemico: '',
    pianeta: '',
    debolezza:''
  }

  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status: any) =>{
      console.log('Stato del form', status)
    })
  }

  submit(){

    this.hero.nome = this.form.value.nome;
    this.hero.alterEgo = this.form.value.alterEgo;
    this.hero.superPotere = this.form.value.power;
    this.hero.nemico = this.form.value.nemico;
    this.hero.pianeta = this.form.value.pianeta;
    this.hero.debolezza = this.form.value.debolezza;

    console.log('Form inviato', this.hero);

    this.form.reset;
  }

}
