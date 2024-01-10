**User Order Assignment**

__1__ For creating some basic form. __I used ejs__, So that I can able to create simple forms.

__2__ __Database MongoDB__ used.
__3__ total routes:
    
    __3.1 url/add-user __      
        __POST request__ : Name, phone number, password is required
    __3.2 url/login-user __    
        __POST request__ : phone number and password is required
    __3.3 url/add-order__      
        __POST request__ : phone number, user_id and sub total is required
    __3.4 url/get-order__      
        __GET request__ : Only user_id is require in query
    

__1__ I used __JWT for authentication__, so that no-one else can access the data of any other user. If user is not 
    logined 
    and he want to add order or view order but he will not able to acces the any data on order route wihtout logined. Always application redirect it into login page.
    
    If user is logined and he want to add data into orders, he will always able to do that operation.

    If user is logined and he want to access the data about their order. he will be able to do that operation. But in place of himself, if he want to access the data(order data) about other user. he cant able to do that operation. 


**lets talk about folders:**
__1 models: __ 
    It consist the order.js and user.js file, which basically the models my collection of MongoDb database.

__2 service: __ 
    It consist the auth.js file, which consist the authentication logic portion.

__3 routes: __
    It consist allroutes.js file, which consist the how all routes are diverted and how helping function 
    will connected throught it.

__4 controllers: __
    It consist the user.js and order.js, which logic part for both items, whenever the route will 
    directed to this route, and how they react it for handling that particular part.

__5 views : __
    It consist the views part i.e. ".ejs" file for basic ui (frontend part for containing data). 
