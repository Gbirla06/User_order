#User Order Assignment

1) for creating some basic form. I used ejs, So that I can able to create simple forms.
2) database MongoDB used.
3) total routes:
    3.1) url/add-user       
        <!-- POST request : Name, phone number, password is required-->
    3.2) url/login-user     
        <!-- POST request : phone number and password is required-->
    3.3) url/add-order      
        <!-- POST request : phone number, user_id and sub total is required-->
    3.4) url/get-order      
        <!-- GET request : Only user_id is require in query -->
    

4) I used JWT for authentication, so that no-one else can access the data of any other user. If user is not logined 
    and he want to add order or view order but he will not able to acces the any data on order route wihtout logined. Always application redirect it into login page.
    
    If user is logined and he want to add data into orders, he will always able to do that operation.

    If user is logined and he want to access the data about their order. he will be able to do that operation. But in place of himself, if he want to access the data(order data) about other user. he cant able to do that operation. 


lets talk about folder:
#1 models: 
    It consist the order.js and user.js file, which basically the models my collection of MongoDb database.

#2 service: 
    It consist the auth.js file, which consist the authentication logic portion.

#3 routes: 
    It consist allroutes.js file, which consist the how all routes are diverted and how helping function 
    will connected throught it.

#4 controllers: 
    It consist the user.js and order.js, which logic part for both items, whenever the route will 
    directed to this route, and how they react it for handling that particular part.

#5 views : 
    It consist the views part i.e. ".ejs" file for basic ui (frontend part for containing data). 
