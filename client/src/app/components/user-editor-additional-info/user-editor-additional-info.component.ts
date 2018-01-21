import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as Editor from 'jsoneditor';
import { createDiff, applyDiff } from '../../libs/diff-utils';

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

  @Input('user')
  set userSetter(value) {
    this.user = value;
    this.syncEditorData();
  }

  @Input('diff')
  set diffSetter(value) {
    if (value === this.diff) {
      return;
    }
    this.diff = value;
    this.syncEditorData();
  }

  @Output() diffChange: EventEmitter<any> = new EventEmitter();

  private editor: any;
  private user: any;
  private diff: any;

  constructor(
    private hostElement: ElementRef
  ) { }

  ngOnInit() {
    this.editor = new Editor(this.hostElement.nativeElement, {
      onChange: (a,b,c,d,e) => {
        this.onEditorChanged();
      }
    });
    this.syncEditorData();
  }

  syncEditorData() {
    if (!this.editor || !this.user) {
      return;
    }
    const data = applyDiff(this.user.additionalInfo, this.diff);
    this.editor.set(data);
  }

  onEditorChanged() {
    this.diff = createDiff(this.user.additionalInfo, this.editor.get());
    this.diffChange.emit(this.diff);
  }

}
