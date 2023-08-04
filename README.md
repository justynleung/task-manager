<h1>A Task Manager Applcation</h1>
<a href="https://elegant-biscochitos-051a4c.netlify.app/">Click Me!</a>
<h2>Tech stacks</h2>
<ul>
   <li>Vite</li>
   <li>ReactJS</li>
   <li>Tailwind CSS</li>
   <li>Typescript</li>
</ul>
<h2>Libraries</h2>
<ul>
   <li>react-hook-form</li>
   <li>zod for form validation</li>
   <li>uuid for unique id generation</li>
</ul>

<h2>Functionalities</h2>
<p>Users are able to add, delete, and filter task by category. Data is stored in local storage and is retreieved upon page refresh or revisiting to the web page. There are respective error messages when there is no task in the list, or when there is not task in that category. The filtered list is rendered as a different component, while state is lifted to App.tsx file so that user can delete tasks from every components.</p>

<h2>Technologies</h2>
<p>Zod is use for form validation. Data type involved include date, string, and also uuid for unique ids. React hook form is used for form construction. Typescript is used throughout the project for improved type safety.</p>

<h2>Challenges</h2>
<p>Adding the filter funciton is relatively easy. However, the logic behind synchonizing update when tasks are added or deleted might be the most challenging part of this project. The final solution of rendering the filtered list as a custom components and passing filter criteria makes most sense to me.</p>
