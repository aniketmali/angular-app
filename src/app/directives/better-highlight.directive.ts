import { OnInit, Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector:'[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
    @Input() defaultColor:string='transparent';
    @Input() highlightColor:string='red';
    @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;

    constructor(private eleRef:ElementRef, private renderer:Renderer2){

    }
    ngOnInit()
    {
        this.backgroundColor=this.defaultColor;
        //this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');
    }

    @HostListener('mouseenter') mouseenter(eventData:Event){
        //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue');
        this.backgroundColor=this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
        this.backgroundColor=this.defaultColor;
    }
}