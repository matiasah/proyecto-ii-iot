import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public porcentajePapel = 10;

    public get outerStrokeColor(): string {
        if ( this.porcentajePapel <= 10 ) {
            return '#EF9A9A';
        } else if ( this.porcentajePapel <= 30 ) {
            return '#FFAB91';
        } else if ( this.porcentajePapel <= 50 ) {
            return '#FFF59D';
        } else if ( this.porcentajePapel <= 85 ) {
            return '#A5D6A7';
        }
        return '#90CAF9';
    }

    public get innerStrokeColor(): string {
        if ( this.porcentajePapel <= 10 ) {
            return '#EF5350';
        } else if ( this.porcentajePapel <= 30 ) {
            return '#FF7043';
        } else if ( this.porcentajePapel <= 50 ) {
            return '#FFEE58';
        } else if ( this.porcentajePapel <= 85 ) {
            return '#66BB6A';
        }
        return '#42A5F5';
    }

}
