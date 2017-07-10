import { Component } from '@angular/core';

import { LocalDataSource } from '../../../../ng2-smart-table';

@Component({
  selector: 'basic-lookup-render-example',
  template: `
    <ng2-smart-table
      [settings]="settings"
      [source]="source">
    </ng2-smart-table>
  `,
})
export class BasicLookupRenderExampleComponent {
    list = [
        { value: 1, title: 'IT' },
        { value: 2, title: 'Finance' },
        { value: 3, title: 'Warehouse' },
        { value: 4, title: 'Manufacture' }
    ];
  settings = {
    columns: {
      id: {
          title: 'ID',
      },
      department: {
          title: 'Department',
          type: 'lookup',
          editor: {
              type: 'list',
              config: {
                  list: this.list,
              }
          }
      },
      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      department: 1,
      email: 'Sincere@april.biz',
      notShownField: true,
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      department: 1,
      email: 'Shanna@melissa.tv',
      notShownField: true,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      department: 2,
      email: 'Nathan@yesenia.net',
      notShownField: false,
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      department: 2,
      email: 'Julianne.OConner@kory.org',
      notShownField: false,
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      department: 3,
      email: 'Lucio_Hettinger@annie.ca',
      notShownField: false,
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      department: 3,
      email: 'Karley_Dach@jasper.info',
      notShownField: false,
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      department: 3,
      email: 'Telly.Hoeger@billy.biz',
      notShownField: false,
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      department: 4,
      email: 'Sherwood@rosamond.me',
      notShownField: true,
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      department: 4,
      email: 'Chaim_McDermott@dana.io',
      notShownField: false,
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      department: 4,
      email: 'Rey.Padberg@karina.biz',
      notShownField: false,
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      department: 4,
      email: 'Rey.Padberg@rosamond.biz',
      notShownField: true,
    }
  ];

  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }
    
}
