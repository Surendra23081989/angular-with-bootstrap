import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
// OnInit,
// DoCheck,
// AfterContentInit,
// AfterContentChecked,
// AfterViewInit,
// AfterViewChecked,
// OnDestroy
export class FormsComponent implements OnChanges {
  @Input('searchText')
  searchText!: string;
  /**
   *
   */
  // constructor() {
  //   console.log('ngAfterContentInit');
  // }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log('Current Value = ', changes['searchText'].currentValue);
    console.log('Previous Value = ', changes['searchText'].previousValue);
    console.log('Is First Change = ', changes['searchText'].firstChange);
    //console.log(changes.searchText1);
  }
  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }
}
