# ReactApp_IS322
By: Allison Eglow & Megan Machado
Hosting the db.json on the JSON Server: https://my-json-server.typicode.com/ae324/ReactApp_IS322/posts

<strong> PROJECT 2 REQUIREMENTS </strong>

In this assignment you will be tasked with creating a simple project management application with an extremely basic set of features. A board view where you can view all of your tasks in columns relating to their status, a list view to view and filter all tasks at once, and an add form to be able to add new tasks to your project. The board view is required for all groups, two person groups can then pick from the list or add form, three person groups must do all three pages.  
 
The instructions below give general requirements for each of the components and pages you’ll be expected to create. These are the minimum required, anything beyond that will be awarded extra credit. Videos will be posted in moodle to help explain some of the concepts behind various requirements. Most requirements will reference a specific video who can watch to get more information on.  
 
This assignment should be written in React and JSX, using create-react-app as a basis for the application (see Setting up React Video in Moodle). The project will contect to a mock API to pull data from, you can use mine or create your own (see JSON Server Tutorial video in moodle). You do not need a full back-end server for this assignment.  
 
General Requirements 
1. All code must be in GitHub, and the website should be publicly accessible from at least one of your group members AFS web spaces or a web hosting platform of your choice (ex. Heroku, Digital Ocean, AWS). Both links will be required. 
a. See Deploying React Apps in Moodle  

2. All pages should be responsive, and can be easily viewed on the following resolutions, you do not need to specifically code for these resolutions, these are just the ones I will be testing: 
a. See Media Queries video in Moodle  
b. 1366px wide (Large Desktop) 
c. 1024px wide (Small Desktop) 
d. 768px wide (Tablet) 
e. 411px wide (Phone) 

3. Styling and UI Design will NOT be graded on this project, though I will provide feedback.  

 
Part 1: App Component (Required for All) 
 
Description The App component will be the top-level component of your application and should be responsible for making requests to the API and updating the data after the fact. It should control which of the other components is currently being viewed through conditional rendering and be the single source of truth for any data retrieved from the API.  
 
Requirements 
1. API Requests to JSON Server should be made inside the App component 
a. See JSON Server Tutorial Video in Moodle  
b. See API Requests in React Video in Moodle  

2. App Component should be responsible making any updates to the data after it has been retrieved from the API. Any additions, updates, or deletions should be handled in the App component.
a. See API Requests in React Video in Moodle  

3. App component should control which of the other 2-3 components are currently being viewed through conditional rendering  
a. See Conditional Rendering Video in Moodle  
 
Part 2: Task Board Component (Required for All) 
 
Description 
The Task Board will allow the user to see all of the tasks sorted into columns by their status (to do, in progress, review, and done). The component should display all tasks in a card like UI, sorted into their appropriate columns. The Board should also have the ability to move a card/task from one column to another  
 
Requirements  
1. Display all of the tasks in columns sorted by their status.  
a. See Working with Lists in React Video in Moodle  

2. Allow for the ability to move a task between columns. Task should stay in it’s new column until a hard refresh (when data is pulled from the API again).  
a. See JSON Server Tutorial video in Moodle  
b. See Handing User Events in React video in Moodle  

3. On Mobile resolutions, show only one column at a time with a drop down menu to select which column to show. 
a. See Programmatic Responsive Design video in Moodle 

4. TaskBoard shouldn’t manage isn’t own data, that responsibility should be in the App component and transmitted to the TaskBoard via props.  
a. See Managing Data between Parent and Child video in Moodle  
 
 
Part 3: Task List Component (Two People, Choose One. Three People, Required) 
 
Description The task list component should operate very similar to the filtered lists we’re done before, but this one should be created in React. It should display all the tasks in a table or list of some kind with all of its data displayed. The list should be able to be filtered by Column/Status and Type as well as sorted by all of the task’s properties.  
 
Requirements 
1. Display all of the tasks in a list or table with all of the its properties displayed  
a. See Working with Lists in React Video in Moodle 

2. Be able to sort the list by Title, Status/Column, and Type. 
a. See Working with Lists in React Video in Moodle  

3. Include filters to narrow the list of tasks down. Should be able to filter by Column/Status and Type, with a drop down include for each option.  
a. See Working with Lists in React Video in Moodle  
 

 
