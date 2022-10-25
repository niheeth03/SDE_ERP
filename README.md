# READ_ME:
 

## Module 9:

### Submodule 1:

#### Goal : To store alumni information in order to send group emails to all alumni and accept payments from alumni.


Solution: Alumni must register in order to access our portal, and we store the data they enter on the registration form in a database.


We also gave alumni the option to update their credentials. We used the "Nodemailer module" to send group emails, and the "Twillio api" to send messages. Since integrating it with Razorpay requires a business approval certificate, we added a front of payment gateway.

We discussed this with the mentors, and they agreed.

Possible integration of razorpay or any other websites that are similar is pending; we can skip it if we prefer.





### Submodule 2:

#### Goal: Calling for applications from academics; filling out the necessary information and uploading it; processing by departments using the Dept Admission Login; and admission in accordance with laws and regulations.

Solution:In order to apply for admission, international students must first register. During this time, we keep all the pertinent data needed in our database so that our user does not have to continually type the same information.

Additionally, it displays the student's applications and status.
creating a department-specific admin side so that each department may view applications that are unique to their department.
displaying charges, laws, regulations, and other details.

The register, login, and application pages have all been finished, as have the hazy versions of the application status and the open courses page.


Pending: New features should be added to the other pages, and the user interfaces for the open courses and application status webpages should be updated. should contain the page's administrative area.




## Module 10:

### Submodule 1:

#### Goal:
the capacity to broadcast information to particular groups as needed, as well as the ability to send automated emails and SMS.


Solution: To send group emails, there is a special module called Nodemailer. To deliver SMS messages to several persons, we used the Twillio API.

Progress: Able to communicate with concerned users via emails and messaging.

Pending: Email attachments have not yet been sent.








## Module 12:

### Submodule 2:

#### Goal: The facilitators will be able to award certificates to attendees who successfully complete the seminars.

Create an automatic certificate generator so that administrators can produce certificates with simply the student, course, and instructor names.

Progress:
finished the same

DB integration and automatic email generation are still pending.


We also completed the payment part to pay the registration cost for the workshop.



In the project directory, you can run:
npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.
 





### Walking through our project:

#### Link: http://localhost:3000/alumni_portal/register
        Alumni are going to register here with his details and his/her enrollment number which is unique to every member.
#### Link: http://localhost:3000/alumni_portal/login
       Alumni have to login to donate money to IITT. Payment section is visible only to the users who logged in .
#### Link: http://localhost:3000/alumni_portal/payment
       Alumni can donate money and create communities that will further help the growth of IITT.
#### Link: http://localhost:3000/international_students/login
        International students who want to join IITT have to login here to apply
#### Link: http://localhost:3000/international_students/register
        International students who want to join IITT have to register here
#### Link: http://localhost:3000/international_students/application
         International students have to apply with required documents displayed in the current page.
#### Link:  http://localhost:3000/international_students/application_status
         Students who applied can check their application status on this page.
#### Link:  http://localhost:3000/online_alerts/email
         Admin can send group emails by filling the details in the form in this page.
#### Link:  http://localhost:3000/online_alerts/sms
         Admin can send sms by filling the details in the form in this page.
#### Link: http://localhost:3000/cce/certificates
        Students who completed their workshop can download their certificate from here.






## Github Link : https://github.com/niheeth03/SDE_ERP.git




## Individual Contributions:

### Prasanna Kumar Reddy Jakku:
Designed and implemented the skeleton structure (routing) for alumni portal and international admissions 
Introduced cookies and session management to store user information(storing session and user id inside browser’s cookie storage).
Managed, designed and implemented structure of the backend 

### Sri Vibhav J : 
 Provided skeleton structure for alumni portal  
 Designed models and schema for database under backend
 Mainly focused on debugging the code developed and worked on linking the  code to the database. 

### Chakradhar Siyyadri : 
Styled all pages using Bootstrap v5.2
Provided skeleton structure for the front end part of international admissions and CCE
Made automatic certificate generator page  

### Niheeth Reddy Thummala:
Provided skeleton structure for online alerts and international admissions
Made frontend and backend for email and SMS system using Nodemailer module and Twillios API.
Made payment page with various options to donate

### Aravind Kumar P : 
Developed application page in CCE and helped in styling international admission pages




Everyone has focused both on frontend and backend and tried their best to cope up with the team. Each of the team members explored and browsed various modules that can be used to make the development easier. The first phase of the project mainly emphasized on the whole team learning and adapting to the environment, and fixing upon the schemas and routing. So, it is a sure thing that the phase 2 of the project would pace up given the fact that the team is now well established.
