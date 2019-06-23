import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Inochidemo2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Inochidemo2SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Inochidemo2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Inochidemo2SharedModule {
  static forRoot() {
    return {
      ngModule: Inochidemo2SharedModule
    };
  }
}
