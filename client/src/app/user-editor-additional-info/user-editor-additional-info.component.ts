import {Component, ElementRef, Input, OnInit} from '@angular/core';
import * as Editor from 'jsoneditor';

@Component({
  selector: 'app-user-editor-additional-info',
  template: ``,
  styles: [`
    :host {
      height: 250px;
    }
  `]
})
export class UserEditorAdditionalInfoComponent implements OnInit {

  @Input() user;

  private editor: any;

  constructor(
    private hostElement: ElementRef
  ) { }

  ngOnInit() {
    this.editor = new Editor(this.hostElement.nativeElement, {});
    this.editor.set(this.user.additionalInfo);
  }

}
