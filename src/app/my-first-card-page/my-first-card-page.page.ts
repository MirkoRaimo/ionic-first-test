import { Component, DEFAULT_CURRENCY_CODE, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-first-card-page',
  templateUrl: './my-first-card-page.page.html',
  styleUrls: ['./my-first-card-page.page.scss'],
})
export class MyFirstCardPagePage implements OnInit {
  
  readonly PAGE_TITLE: string = "This is my very first Ionic app!";
  readonly DEFAULT_MYST_NAME: string = "Mysterious Guy";
  private _guestName: string = this.DEFAULT_MYST_NAME;
  private _guestNameInput: string = "";
  
  constructor () { };
  
  ngOnInit() {
  }
  
  clearInputTextFields(){
    this._guestNameInput = "";
  }
  
  public updateGuestName(){
    this._guestName = this._guestNameInput;
    this._guestNameInput = "";
  }

  public isGivenName() :boolean {
    return (this.guestName !== this.DEFAULT_MYST_NAME);
  }

  public clearGivenName(){
    this._guestName = this.DEFAULT_MYST_NAME;
    this._guestNameInput = "";
  }

  testBtnClicked(){
    alert("clicked!");
  }

  public get guestNameInput(): string {
    return this._guestNameInput;
  }
  public set guestNameInput(value: string) {
    this._guestNameInput = value;
  }

  public get guestName(): string {
    return this._guestName;
  }
  public set guestName(value: string) {
    !value ? this._guestName = value : this._guestName = this.DEFAULT_MYST_NAME;
  }
}
