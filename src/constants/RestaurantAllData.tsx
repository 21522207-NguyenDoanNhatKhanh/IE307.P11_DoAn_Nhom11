import { menuItemParams, menuParams, restaurantCategoryParams, restaurantParams } from "./typesCheckParams"

export const restuarantCategories:restaurantCategoryParams[] = [
    {
        "_id": "6537ece708ff5b7de97d0695",
        "name": "Gà rán",
        "imageUrl": require("../../assets/images/food/chicken-leg_821023.png"),
    },
    {
        "_id": "65310f3381e4d98d60b093c5",
        "name": "Cơm Jollof",
        "imageUrl": require("../../assets/images/food/spice_3800322.png"),  
    },
    {
        "_id": "6531206cbbe4998e90af3feb",
        "name": "Mì ống",
        "imageUrl": require("../../assets/images/food/spaguetti.png"),
    },
    {
        "_id": "6531209dbbe4998e90af3fef",
        "name": "Burger",
        "imageUrl": require("../../assets/images/food/burger.png"),
    
    },
    {
        "_id": "653120babbe4998e90af3ff1",
        "name": "Shawarma",
        "imageUrl": require("../../assets/images/food/shawarma.png"),
    
    },
    {
        "_id": "65312084bbe4998e90af3fed",
        "name": "Món nướng",
        "imageUrl": require("../../assets/images/food/barbecue.png"),
    },
    {
        "_id": "65310efb81e4d98d60b093c3",
        "name": "Pizza",
        "imageUrl": require("../../assets/images/food/pizza.png"),
    },
    {
        "_id": "653120e1bbe4998e90af3ff3",
        "name": "Bữa sáng",
        "imageUrl": require("../../assets/images/food/breakfast.png"),
    }
]


export const restaurants:restaurantParams[] = [
    {
       
        "_id": "6530ebbcc9e72013e5b65933",
        "name": "Chicken Republic",
        "description":"",
        "imageUrl": require("../../assets/images/food/ChickenRepublicDashboard.png"),
        "foodType": "Chicken",
        "time":"15 mins",
        "deliveryTimeFrom": 15,
        "deliveryTimeTo":35,
        "deliveryMethod": "Free",
        "rating": 5,
        "ratingCount": 6765,
        "coords": {
            "latitude": 37.78792117665919,
            "longitude": -122.41325651079953,
            "address": "698 Post St, San Francisco, CA 94109, United States",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        },

       
    },
    {
        "_id": "6530ea6bc9e72013e5b6592d",
        "name": "Toast Pan",
        "description":"",
        "imageUrl": require("../../assets/images/food/burgerDisp.jpg"),
        "foodType": "Burgers",
        "time":"30 mins",
        "deliveryTimeFrom": 15,
        "deliveryTimeTo":35,
        "deliveryMethod": "Free",
        "rating": 60,
        "ratingCount": 3278,
        "coords": {
            "latitude": 37.785925590588505,
            "longitude": -122.41007428687641,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        },

       
    
    },

    {
        "_id": "6530ea6bc9e72013e5b6580de",
        "name": "Tasty Bite",
        "description":"",
        "imageUrl": require("../../assets/images/food/tastyBitieDisp.jpg") ,
        "foodType": "Burgers",
        "time":"30 mins",
        "deliveryTimeFrom": 15,
        "deliveryTimeTo":35,
        "deliveryMethod": "Free",
        "rating": 60,
        "ratingCount": 5666,
        "coords": {
            "latitude": 37.785925590588505,
            "longitude": -122.41007428687641,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        },

        
    },
    {
        "_id": "6530eb23c9e72013e5b6592f",
        "name": "Menum Kitchen",
        "description":"",
        "imageUrl": require("../../assets/images/food/MenumKitchenDisp.jpeg"),
        "foodType": "Jollof",
        "time":"30 mins",
        "deliveryTimeFrom": 15,
        "deliveryTimeTo":35,
        "deliveryMethod": "Free",
        "rating": 60,
        "ratingCount": 5666,
        "coords": {
            "latitude": 37.785925590588505,
            "longitude": -122.41007428687641,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        },

        
    },

    {
        "_id": "6530eb23c9e72013e5b6351c",
        "name": "Drumstix",
        "description":"",
        "imageUrl": require("../../assets/images/food/drumstix.jpg"),
        "foodType": "Chicken",
        "time":"30 mins",
        "deliveryTimeFrom": 15,
        "deliveryTimeTo":35,
        "deliveryMethod": "Free",
        "rating": 60,
        "ratingCount":5666,
        "coords": {

            "latitude": 37.785925590588505,
            "longitude": -122.41007428687641,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        },

        
    },

    {
        "_id": "6530eb23c9e72013e5b6427j",
        "name": "T Joint Restaurant",
        "description":"",
        "imageUrl": require("../../assets/images/food/TJointRestDisp.png"),
        "foodType": "Jollof",
        "time":"30 mins",
        "deliveryTimeFrom":15,
        "deliveryTimeTo":35,
        "deliveryMethod": "Free",
        "rating": 60,
        "ratingCount":5666,
        "coords": {
        
            "latitude": 37.785925590588505,
            "longitude": -122.41007428687641,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        },
         
    },

]




export const menus:menuParams[] = [
    {
        "_id": "6530ebbcc9e72013e5b658dm",
        "menuName":"Burgers & Sandwiches",
        "description":"",
        "restaurantId":"6530ebbcc9e72013e5b65933", // restaurant objectId //chicken republic
    },

    {
        "_id": "6530ebbcc9e72013e5b65841",
        "menuName":"Chicken Special",
        "description":"",
        "restaurantId":"6530ebbcc9e72013e5b65933", // restaurant objectId //chicken republic
    },
    
    {
        "_id": "6530ebbcc9e72013e5b65102",
        "menuName":"Rice",
        "description":"",
        "restaurantId":"6530ebbcc9e72013e5b65933", // restaurant objectId //chicken republic
    },

    {
        "_id": "6530ebbcc9e72013e5b55102a",
        "menuName":"Fries",
        "description":"",
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },

    {
        "_id": "6530ebbcc9e72013e5b55113b",
        "menuName":"Shawarma",
        "description":"",
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },

    {
        "_id": "6530ebbcc9e72013e5b5511ba",
        "menuName":"Pepper Soup",
        "description":"",
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },

    {
        "_id": "6530ebbcc0e72013e5b55312f",
        "menuName":"Sandwiches",
        "description":"",
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
        
    },

    {
        "_id": "6530ebbcc0e72013e5b55511c",
        "menuName":"Burger",
        "description":"",
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
    },

    {
        "_id": "6530ebbcc0e72013e5b5561cd",
        "menuName":"Wraps",
        "description":"",
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
    },

]



export const menuItems:menuItemParams[] = [

    {
        "_id":"6530addcc9e72013e5b6190b",
        "name":"Big Boyz Combo",
        "image":require("../../assets/images/food/ChickenRep-BurgerSandwich--bigBoysCombo.jpeg"),
        "description":"Enjoy a Chief Burger with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 400,
        "quantity":10,
        "menuId":"6530ebbcc9e72013e5b658dm", // Burgers & Sandwiches
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic
        "additives":[
            {
                "_id":"6780ebbcc9e72013e5b687bd",
                "additiveType":"Select Your Size",
                "additiveInfo":[
                    {
                        "_id":"6780ebbcc9e72013e5b672dc",
                        "name":"Single chicken patty",
                        "parentId":"6780ebbcc9e72013e5b687bd"
                    },

                    {
                        "_id":"6780ebbcc9e72013e5b132df",
                        "name":"Double chicken patty",
                        "price":2200,
                        "parentId":"6780ebbcc9e72013e5b687bd"
                    }
                ]
            },

            {
                "_id":"6780ebbcc9e72013e5b688ad",
                "additiveType":"Select Your Side",
                "additiveInfo":[
                    {
                        "_id":"6780ebbcc9e72013e5b699ba",
                        "name":"Spaghetti",
                        "parentId":"6780ebbcc9e72013e5b688ad"
                    },

                    {
                        "_id":"6780ebbcc9e72013e5b498cb",
                        "name":"Fried rice jumbo",
                        "price":500,
                        "parentId":"6780ebbcc9e72013e5b688ad"
                    }
                ]
            },

            {
                "_id":"6780ebbcc9e72013m5b102dg",
                "additiveType":"Add Takeaway Pack",
                "additiveInfo":[
                    {
                        "_id":"",
                        "name":"Add a Take-Away Pack (1,000ml with Lid)",
                        "price":300,
                        "parentId":"6780ebbcc9e72013m5b102dg"

                    },
                ]
            }
        ]

       

    },

    {
        "_id":"6530addcc9e72013e5b6192c",
        "name":"Chief Burger",
        "image":require("../../assets/images/food/ChickenRep-BurgerSandwich--ChiefBurger.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 1300,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b658dm", // Burgers & Sandwiches
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic
      

    },

    {
        "_id":"6530addcc9e72013e5b6193d",
        "name":"ChickWizz Meal",
        "image":require("../../assets/images/food/ChickenRep-BurgerSandwich--Chickwizz.jpeg"),
        "description":"Enjoy a Chief Burger with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 400,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b658dm", // Burgers & Sandwiches
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic
      
    },

    {
        "_id":"6530addcc9e72013e5b7191a",
        "name":"Full Chicken",
        "image":require("../../assets/images/food/ChickenRep-Chicken--FullChicken.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 13500,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b65841", // chicken special
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic
      
    },
    
    

    {
        "_id":"6530addcc9e72013e5b7192b",
        "name":"Half Chicken",
        "image":require("../../assets/images/food/ChickenRep-Chicken--chickenLap.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 7000,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b65841", // chicken special
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic
      
    },

        
    {
        "_id":"6530addcc9e72013e5b81901a",
        "name":"Fried Rice",
        "image":require("../../assets/images/food/Chicken-Republic-Fried-Rice.jpg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 1300,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b65102", // rice
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic

        
    },

    {
        "_id":"6530addcc9e72013e5b81902b",
        "name":"Jollof Rice",
        "image":require("../../assets/images/food/Chicken-Republic-Jollof-Rice-1.jpg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 1200,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b65102", // rice
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic

      
    },

    {
        "_id":"6530addcc9e72013e5b81903c",
        "name":"White Rice + Sauce",
        "image":require("../../assets/images/food/CHICKEN-REPUBLIC-WHITE-RICE-SAUCE.jpg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 1300,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b65102", // rice
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic

      
    },

    {
        "_id":"6530addcc9e72013e5b81904d",
        "name":"Rice & Beans With Sauce",
        "image":require("../../assets/images/food/Chicken-Republic-Rice-Beans-with-sauce.jpg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 1300,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b65102", // rice
        "restaurantId":"6530ebbcc9e72013e5b65933", // chicken republic
              
    },



    {
        "_id":"6530addcc9e72013e5b81905e",
        "name":"Plantain and Egg Sauce",
        "image":require("../../assets/images/food/Menum-Fries--plantainnEggSauce.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3500,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b55102a",//fries
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },

    {
        "_id":"6530addcc9e72013e5b21906f",
        "name":"Chips and Chicken Wings",
        "image":require("../../assets/images/food/Menum-Fries--Chips-Chicken-Wings.png"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3500,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b55102a", // Fries
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },

    {
        "_id":"6530addcc9e72013e5b21907g",
        "name":"GizzDodo",
        "image":require("../../assets/images/food/Menum.freis.GissDodo.png"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3500,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b55102a", //Fries
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
        
    },
            
    {
        "_id":"6530addcc9e72013e5b2107ab",
        "name":"Beef Shawarma",
        "image":require("../../assets/images/food/Menum-Shawarma--Beef-shawarma.png"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 2800,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b55113b", // shawarma
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },

    {
        "_id":"6530addcc9e72013e5b2106ac",
        "name":"Small Chops Combo",
        "image":require("../../assets/images/food/Menum-Shawarma--small Chops.png"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 11500,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b55113b", // shawarma
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },
        
    {
        "_id":"6530addcc9e72013e5b2105ad",
        "name":"Chicken Shawarma",
        "image":require("../../assets/images/food/Menum-Shawarma--Extra-large-chicken-shawarma.png"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3500,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b55113b", // shawarma
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
        
    },
    
    {
        "_id":"6530addcc9e72013e5b2111ab",
        "name":"Turkey Pepper Soup",
        "image":require("../../assets/images/food/Menum-PepperSoup--Turkey-pepper-soup.png"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 7500,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b5511ba", // pepper soup
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },

    {
        "_id":"6530addcc9e72013e5b2112ac",
        "name":"Catfish Pepper Soup",
        "image":require("../../assets/images/food/Menum-PepperSoup--Cat-fish-pepper-soup.png"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3500,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b5511ba", // pepper soup
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },

    {
        "_id":"6530addcc9e72013e5b2123ad",
        "name":"Beef Pepper Soup",
        "image":require("../../assets/images/food/Menum-PepperSoup--Beef-pepper-soup.png"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3000,
        "quantity":0,
        "menuId":"6530ebbcc9e72013e5b5511ba", // pepper soup
        "restaurantId":"6530eb23c9e72013e5b6592f", // restaurant objectId // menum
    },
    
    {
        "_id":"6530addcc9e72013e5b4423ba",
        "name":"Sausage Sandwich",
        "image":require("../../assets/images/food/ToastPan-Sandwhiches--prawnSandwich.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 7500,
        "quantity":0,
        "menuId":"6530ebbcc0e72013e5b55312f", // Sandwiches
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
    },

    {
        "_id":"6530addcc9e72013e5b4432bc",
        "name":"Steak Sandwich",
        "image":require("../../assets/images/food/ToastPan-Sandwhiches--SteakSandwich.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3500,
        "quantity":0,
        "menuId":"6530ebbcc0e72013e5b55312f", // Sandwiches
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
    },

    {
        "_id":"6530addcc9e72013e5b4436cb",
        "name":"Chicken Sandwich",
        "image":require("../../assets/images/food/ToastPan-Sandwhiches--chickenSandwich.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3000,
        "quantity":0,
        "menuId":"6530ebbcc0e72013e5b55312f", // Sandwiches
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
        
    }, 

    
    {
        "_id":"6530addcc9e72013e5b7112bd",
        "name":"Beef Burger",
        "image":require("../../assets/images/food/ToastPan-Burger--beefBurger.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 7500,
        "quantity":0,
        "menuId": "6530ebbcc0e72013e5b55511c", // Burger
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
    },

    {
        "_id":"6530addcc9e72013e5b7113be",
        "name":"Chicken Burger",
        "image":require("../../assets/images/food/ToastPan-Burger--ChickenBurger.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3500,
        "quantity":0,
        "menuId": "6530ebbcc0e72013e5b55511c", // Burger
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
    },

    {
        "_id":"6530addcc9e72013e5b7123de",
        "name":"Seafood Burger",
        "image":require("../../assets/images/food/ToastPan-Sandwhiches--seaFoodSandwiches.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3000,
        "quantity":0,
        "menuId": "6530ebbcc0e72013e5b55511c", // Burger
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
        
    },

    {
        "_id":"6530addcc9e72013e5b7813ea",
        "name":"Smoked Turkey Wraps",
        "image":require("../../assets/images/food/ToastPan-wrap--smokedTurkeyWrap.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 7500,
        "quantity":0,
        "menuId":"6530ebbcc0e72013e5b5561cd", // wraps
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
    },

    {
        "_id":"6530addcc9e72013e5b7821eb",
        "name":"Beef Wraps",
        "image":require("../../assets/images/food/ToastPan-wrap--beefWrap.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3500,
        "quantity":0,
        "menuId":"6530ebbcc0e72013e5b5561cd", //wraps
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
    },

    {
        "_id":"6530addcc9e72013e5b7814ec",
        "name":"Chicken Wraps",
        "image":require("../../assets/images/food/ToastPan-wrap--chickenWrap.jpeg"),
        "description":"Enjoy a Chicken Republic meals with one piece of Soulfully Spiced Fried Chicken with your choice of Spaghetti, Fried Rice, Jollof Rice or Rice & Beans with sauce, plus a drink of your choice",
        "price": 3000,
        "quantity":0,
        "menuId":"6530ebbcc0e72013e5b5561cd", // wraps
        "restaurantId":"6530ea6bc9e72013e5b6592d", // restaurant objectId // Toast Pan
        
    },
    
]
