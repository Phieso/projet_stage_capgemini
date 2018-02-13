import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { FicheJuridiqueComponent } from '../fiche-juridique.component';

@Component({
  selector: 'app-fiche-juridique-commentaire',
  templateUrl: './fiche-juridique-commentaire.component.html',
  styleUrls: ['./fiche-juridique-commentaire.component.css']
})

export class FicheJuridiqueCommentaireComponent implements OnInit {
    constructor (
            private renderer: Renderer2,
            private el: ElementRef,
            private route: ActivatedRoute,
            private router: Router,
            private ficheJuridiqueComponent: FicheJuridiqueComponent
    ) {
        this.renderer.setAttribute(this.el.nativeElement, 'data-id', this.num);
        // this.renderer.setAttribute(this.date.nativeElement, 'data-date', "44");
        console.log(this.printId);
    }

  ngOnInit () {
    
  }
    @ViewChild("id", { read: ElementRef }) id: ElementRef;
    @ViewChild("date", { read: ElementRef }) date: ElementRef;
    @ViewChild("resp", { read: ElementRef }) resp: ElementRef;
    @ViewChild("com", { read: ElementRef }) com: ElementRef;

    printId = this;
    num: string = "" + this.ficheJuridiqueComponent.num;
    
    respo = "Smurfies";
    
}
