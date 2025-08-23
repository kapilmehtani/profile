import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-details.component.html',
  styleUrl: './resume-details.component.scss'
})
export class ResumeDetailsComponent {

  quantumstreetExp = ['Led a complete interface revamp involving design consistency and removing unwanted components, reducing load time by 25% in angular.','Integrated WebSocket API in angular, enabling real time stock price and other data points with a latency of less than 200ms and improving user engagement by 30%.','Managed around 50 APIs in Postman, wrote test cases and integrated it into CI/CD pipeline in Jenkins using Newman.', 'Mentored 3 junior developers by conducting code reviews, knowledge-sharing sessions, and debugging walkthroughs, improving overall team efficiency by 20%.','Developed a dynamic, role-based access control system in Angular, displaying only relevant pages and features based on user roles, ensuring a tailored user experience and enhanced security.', 'Implemented reusable form controls using ControlValueAccessor for seamless integration with Angular reactive forms and developed reusable directives and pipes.', 
  'Collaborate with product managers and designers to translate requirements from Figma into technical solutions.', 'Collaborated closely with the QA team to squash 50+ bugs weekly on the Angular platform, ensuring thorough testing and validation, resulting in a 15% decrease in user-reported issues.']
  unstopExp = ['Identify and resolve bugs reported by users and QA teams, ensuring timely issue fixes.','Developed a service in angular that can manage the data and status of sidebars in the application reducing status issue by 40%.','Designed responsive components in angular that adapts to the various screen sizes.' ]
  ecoExp = [ 'Collaborate with senior developers to understand project requirements and contributed to building features in an angular application.','Debug and troubleshoot issues across the stack.', 'Implemented UI unit testing on application using Jasmine and Karma with 80% code coverage and reducing production bugs by 30%' ]
  quantumstreetSkills = ['Angular', 'JavaScript', 'TypeScript', 'Django', 'Elastic Search', 'SQL', 'HTML', 'CSS/SCSS', 'Postman']
  unstopSkills = ['Angular', 'TypeScript', 'SQL', 'HTML', 'CSS/SCSS', 'Bootstrap']
  ecoSkills = ['Angular', 'TypeScript', 'SQL', 'HTML', 'CSS/SCSS', 'Jasmine and Karma']


}
