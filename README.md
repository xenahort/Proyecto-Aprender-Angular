# Proyecto-Aprender-Angular
Proyecto del curso Bootcamp de Everis para aprender Angular desde 0

Create Home page component with a welcome message and some navigation tabs (eg. using Nav or Navbar Bootstrap components): Home, Users and Services. 
Create User model (name, age, gender, userId, registrationDate) and InsuranceService model (name, serviceId, description, price, image). 
Create User Card component which is a card which shows some user info, it has to have a navigation button, display the registrationDate with format day/month/year. Tip: Card Component from Bootstrap
Create a Users service to provide and store some users data 
Create a CreateUser component with a form (name, age and gener-> select or radio input). All fields are required, name cannot be more than 100characters and age value must be between 0 and 99. When submit, save the new user in the users service.
Create Users page component to display all users cards and a Create User section. 
Create InsuranceServices component and display some services cards (with an image, display the price of the insurance service in format: X.XX €).
Set up the routing of these pages (the AppRoutingModule) following the instructions below:    
In the User Detail page must be indicated the userId in the URL.    
When user goes to Users page, display the Create User component if the Query Param "allowCreate" is 1.
If the user enters to unknown page through URL, it is redirected to Home.
