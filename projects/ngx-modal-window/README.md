# Angular resizable and draggable modal

Simple resizable and draggable modal component. (<a target="_blank" href="https://d3v0ps.github.io/ngx-modal-window/">Demo</a>)


```
npm i ngx-modal-window --save
```

### Sample
```typescript
import { NgxModalWindowModule } from 'ngx-modal-window';

@NgModule({
  imports: [
    NgxModalWindowModule
  ]
})
```

```html
<button type="button" class="button" (click)="modalRoot.show()">Open modal</button>
<ngx-modal-window #modalRoot class="modal-demo">
  <ng-container class="app-modal-header">Demo modal</ng-container>
  <ng-container class="app-modal-body">
    <h3>MODAL DIALOG</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
  </ng-container>
  <ng-container class="app-modal-footer">
    <button type="button" class="button button3" (click)="modalRoot.hide()">Delete</button>
    <button type="button" class="button button1" (click)="modalRoot.hide()">Save</button>
    <button type="button" class="button button2" style="float: right;" (click)="modalRoot.hide()">Close
    </button>
  </ng-container>
</ngx-modal-window>
```

```css
.modal-demo .ui-modal {
  width: 37.5rem;
  /* for resize limits use min-width, min-height, max-width, max-height in css */
}
.modal-demo .ui-modal-overlay, .modal-demo .ui-modal {
  z-index: 10;
}
/* colors */
:root {
  --dt-color-primary: #5b9bd5;
}
/* for IE */
.ui-modal-header {
  background-color: #5b9bd5;
}
```

### Properties

| Attribute        | Type       | Default | Description |
|------------------|------------|---------|-------------|
| scrollTopEnable  | boolean    | true    |             |
| maximizable      | boolean    | false   |             |
| backdrop         | boolean    | true    |             |

### Events

```ts
@Output() openModal = new EventEmitter();
@Output() closeModal = new EventEmitter<boolean>();
@Output() resizeModal = new EventEmitter<ResizableEvent>();
@Output() maximizeModal = new EventEmitter<boolean>();
```
