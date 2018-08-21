import { Component, OnInit } from '@angular/core';
import { ConfirmWindow } from '../shared/modalWindows/confirm/ConfirmWindow';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  message:string ="";
  name:string = "";
  email:string = "";

  ngOnInit() {
    
  }

  sendMessage() {
    this.message =  this.message.replace(/^\s*/, '').replace(/\s*$/, '');
    this.name =  this.name.replace(/^\s*/, '').replace(/\s*$/, '');
    this.email =  this.email.replace(/^\s*/, '').replace(/\s*$/, '');


    if(this.message === "") {
      this.confirmWindow("Oops!","Message is empty",'350px');
      return;
    }

    if(this.name === "") {
      this.confirmWindow("Oops!","Name is empty",'350px');
      return;
    }

    if(this.email === "") {
      this.confirmWindow("Oops!","email is empty",'350px');
      return;
    }

    if(this.email === "") {
      this.confirmWindow("Oops!","Email is empty",'350px');
      return;
    }

    this.http.post("", {});

    this.confirmWindow("Thank you!"," Your message has been successfully sent. We will contact you very soon!",'580px');
    return;
  }


  confirmWindow(header, message, width ) {
    let dialogRef = this.dialog.open(ConfirmWindow, {
      width: width,
      data: { message: message,header:header }
    });
  }
}