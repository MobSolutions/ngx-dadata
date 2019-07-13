import { Component } from '@angular/core';
import { DadataConfig } from '../../../ngx-dadata/src/lib/dadata-config';
import { DadataType} from '../../../ngx-dadata/src/lib/ngx-dadata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  configAddress: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.address,
  };
  configFio: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.fio,
  };
  configCompany: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.party,
  };
}
