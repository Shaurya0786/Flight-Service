
use the sequelize cli and create your first database

the orm cli can be used to create a database very easily by runniing commant 

```
npx sequelize db:create
```

Each Table is considered as a Model in ORM

 To Create New Models we can also use a inbuilt cli command and we wont have to mannually create the user model specified inside the Sequelizer 
 Read the sequelizecli documentaion to know the command for the model create 

 ```
 npx sequelize mode:generate --name <TableName> --attributes <attributeName>:DataType,<attributeName>:DataType
 ```

 Remenber it is a Convention to Keep the Table Name Singular as Sequelizer itself pluralizes it 

 with this command a table with the specified attributes will be created in the models folder and a migration file will also be created 
 but this Not Create the table directly in the database 
 Now if we Want to Do any Changes and add and new to attributes like add Not Null property or default we can do it inside the migration file 
 
 This File Contains the migration and if we do a change in the database like adding a Column this will keep the track of both the table state before the addition of column and after addition of the column so if at anypoint if we want to rollback to the preivous state in the database as the migration keeps the track 

 Always Remember the changes made to the model in the models folder will not be applied to the database and that will be a constraint on the js level only 
 To apply the same constraints to the database we will have to add the constraint directly in the migration folder as it is the miggration that creates a table 

 Now To Save Data inside the we have to develope the basic crud operations first and our crud operations will be present inside the repositories folder as this is the folder that interacts with the database and these operations can be used multiple times


 See the sequelize documentaion for to know what all functions are there for the crud operations   
 
 Now we can use this class and extend it and use its functions to in other repositories


 One has to remember the flow 


 `the req reaches the router -> 
  the router calls the controller->
  the controller calls the service -> 
  the service calls the reposiotories -> 
  this uses the models service and do operations on the database` 


 this helps in less confusion 
 
 the flow is like 

 1.the router calls the controller function 
 
 2.the controller function uses the req,body to get the data and calls the function imported by the service

 3.the service function imports the specific class whose function is going to be used it creates it object and uses that object to use the class function to do the operations and uses data provided by the controller using the req.body or other means 
 
 4.the class uses the crud operations class and does crud operations on the table using the model passed in that class 


 Error Handling in the Project 

 the error handling your project should be consistent through out the project and we should generally create custom error handler class and use that object as it help in decrasing the redundand code as wriiting each error message and json seperately is not a vialble option 

 Read about error handing in js  

 The Error class is a neccessaty as from the prespective of a front end engineer if there is an error on we should be able to send consistent error messages in a singular structured consistent format so that the frontend can deal with it if there is an error 
 and we always have to differentiate between a client-side error and a server-side error as the response for them will be different 

 `
 As a Backend Engineer if you want to Know what features yoou want to set think from the prespective of a frontend engineer that what all do you expect from backend 
 ` 
 it is either we can use try and cactch and throw the error simply as it is which is a bad practice as if we have a DB error why would you want to tell the client about that error 
 
 so custom error handling is imp as it helps to tell the client what went wrong and help the frontend to deal with errors and it is imp to throw custom error object instead of the plain js object  

 for the we can use error class  

 In This Project We Create a new Error class use that error class to create a custom error 

    we follow a particular format if the there was an error and then we pass the error itself as object in this 

    const error = {
    success:false,
    message :'Something went Wrong While Executinng the request',
    error:{},
    data:{}
    }

    for the error that we pass we have created a custom error class with ->
       error message
       error StatusCode
       error explanation (this takes error message input only)

    and we use that custom implementaion and send in res body if error occured  

 Adding a Seeder file the seeder file helps in seeding the database with data to generate a seeder file run the command 

 ```
 npx sequelize seed:generate --name add-<seeded-table-name>
 ```
 and now write the up and the down function and the data that is to be seeded 

 now run the command to seed 
 ```
 npx sequelize db:seed:all
 ```
and to undo the seeding 
```
npx sequelize db:seed:undo:all
```

