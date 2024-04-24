import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./parser/parser.routes').then(m => m.PARSER_ROUTES)
    }
];
