import { Component, Input } from '@angular/core';

type H1Props = {
  color?: string;
  fontSize?: string | undefined;
};

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.scss']
})
export class H1Component {
  @Input() text: string = '';

  @Input() headingProps: H1Props = {};
}
