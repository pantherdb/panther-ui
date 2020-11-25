import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PantherSharedModule } from '@panther/shared.module';

const routes = [
    {
        path: '',
        loadChildren: './board-editor/board-editor.module#BoardEditorModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#TodoModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'explorer',
        loadChildren: './explorer/explorer.module#ExplorerModule'
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        PantherSharedModule
    ]
})

export class MainModule {
}
