import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
//Skills will  be added and if there is something new or new skills then i want to put it i will see how (this message will be deleted)
frontSkills:string[]=['HTML','CSS','JavaScript','Angular','BootStrap','Tailwind']
backSkills:string[]=['Node.js','Express.js','RESTful API']
toolsSkills:string[]=['Github']

}
