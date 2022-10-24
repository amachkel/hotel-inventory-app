# Hotel Inventory App

An in-depth course on TypeScript and Angular from Free Code Camp.

Directives

- ngIf
- ngFor
- ngSwitch
- ngClass
- ngStyle

Pipes

- Pipes are used for data transformation.
- Pipes don't change actual object.

Built-in Pipes

- DatePipe
- UpperCasePipe
- LowerCasePipe
- TitleCasePipe
  - Capitalizes first letter of each word.
- CurrencyPipe
  - default: USD. Can also declare others, ex: currency: 'EUR';
- DecimalPipe
  - actual pipe name: number
- PercentPipe
- JsonPipe
  - great for displaying data during development. Don't use for production purposes.
- SlicePipe
  - common use case: pagination. Don't use for pagination when working with large data set where the numbers might change. Rely on server side pagination or filtering.
- AsyncPipe

Lifecycle Hooks

- component instance has lifecycle hooks which can help you to hook into different events on Components.
- Lifecycle ends when component is destroyed.

- ngOnChanges
- ngOnInit
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy
