import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
//import { TasksPage } from '../tasks/tasks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = SettingsPage;

  constructor() {

  }
}
