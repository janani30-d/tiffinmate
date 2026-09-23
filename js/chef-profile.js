/* =========================================================
   TIFFINMATE — CHEF PROFILE
   Dynamic Chef Profile
   RTL + Dark Mode + Responsive Safe
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================================
       1. CHEF DATA
    ===================================================== */

    const chefData = {

        /* =================================================
           KAVITHA'S KITCHEN
        ================================================= */

        "kavithas-kitchen": {
            name: "Kavitha's Kitchen",
            slug: "kavithas-kitchen",
            speciality: "South Indian Specialist",
            image: "images/chef-01.jpg",
            rating: "4.9",
            reviews: "142",
            location: "Chennai",
            price: "₹139",
            intro:
                "Traditional South Indian homemade meals prepared with fresh ingredients, authentic recipes, and the warmth of a home kitchen.",

            tags: [
                "Traditional Meals",
                "Vegetarian",
                "Lunch",
                "Homemade Food"
            ],

            about: {
                title: "Cooking with Tradition, Care & Homemade Flavours",
                paragraphOne:
                    "Kavitha's Kitchen brings authentic South Indian food to your everyday table. Every meal is prepared in small batches using carefully selected ingredients and traditional cooking methods.",
                paragraphTwo:
                    "From comforting rice meals to flavourful curries and homemade tiffin, Kavitha focuses on simple food that feels familiar, fresh, and satisfying.",
                paragraphThree:
                    "Her kitchen follows a home-style approach where freshness, cleanliness, and balanced flavours are given equal importance.",
                signature: "Kavitha",
                philosophy: "Fresh • Traditional • Homemade"
            },

            specialities: [
                {
                    title: "South Indian Meals",
                    description: "Traditional rice meals, curries and side dishes prepared fresh every day."
                },
                {
                    title: "Vegetarian Cooking",
                    description: "Fresh vegetarian dishes made with seasonal vegetables and homemade spices."
                },
                {
                    title: "Homemade Tiffin",
                    description: "Comforting breakfast and tiffin options prepared in authentic home style."
                },
                {
                    title: "Traditional Recipes",
                    description: "Family-style recipes inspired by traditional South Indian cooking."
                }
            ],

            stats: {
                experience: "8+ Years",
                mealsPrepared: "18K+",
                customers: "1.2K+",
                rating: "4.9 / 5"
            },

            meals: [
                {
                    name: "Traditional South Indian Lunch",
                    image: "images/meal-01.jpg",
                    rating: "4.9",
                    description: "A complete homemade South Indian lunch with rice, curry, vegetables and sides.",
                    time: "35–45 min",
                    price: "₹149",
                    type: "veg"
                },
                {
                    name: "Homestyle Vegetable Biryani",
                    image: "images/meal-02.jpg",
                    rating: "4.8",
                    description: "Aromatic vegetable biryani prepared with fresh vegetables and homemade spices.",
                    time: "30–40 min",
                    price: "₹129",
                    type: "veg"
                },
                {
                    name: "Chettinad Chicken Meal",
                    image: "images/meal-03.jpg",
                    rating: "4.9",
                    description: "Flavourful Chettinad-style chicken prepared with traditional spices.",
                    time: "40–50 min",
                    price: "₹179",
                    type: "nonveg"
                },
                {
                    name: "Soft Chapati & Paneer Curry",
                    image: "images/meal-04.jpg",
                    rating: "4.8",
                    description: "Soft homemade chapatis served with creamy paneer curry.",
                    time: "35–45 min",
                    price: "₹139",
                    type: "veg"
                }
            ],

            plans: {
                daily: {
                    name: "Daily Tiffin",
                    description: "Fresh homemade meal delivered to your doorstep.",
                    price: "₹139",
                    frequency: "/ meal",
                    benefits: [
                        "Freshly prepared meal",
                        "Home-style cooking",
                        "Reliable delivery"
                    ]
                },

                weekly: {
                    name: "Weekly Tiffin",
                    description: "Enjoy homemade food throughout the week.",
                    price: "₹649",
                    frequency: "/ week",
                    benefits: [
                        "7 homemade meals",
                        "Flexible meal choices",
                        "Priority preparation"
                    ]
                },

                monthly: {
                    name: "Monthly Tiffin",
                    description: "A convenient monthly homemade food plan.",
                    price: "₹2,399",
                    frequency: "/ month",
                    benefits: [
                        "30 homemade meals",
                        "Better value",
                        "Priority delivery"
                    ]
                }
            },

            menu: [
                {
                    name: "South Indian Breakfast",
                    category: "breakfast",
                    image: "images/cuisine-01.jpg",
                    rating: "4.9",
                    description: "Fresh traditional breakfast prepared every morning.",
                    time: "20–30 min",
                    price: "₹89",
                    type: "veg"
                },
                {
                    name: "Vegetable Dosa",
                    category: "breakfast",
                    image: "images/veg-dosa.jpg",
                    rating: "4.8",
                    description: "Crispy homemade dosa with fresh vegetable filling.",
                    time: "20–25 min",
                    price: "₹99",
                    type: "veg"
                },
                {
                    name: "Traditional South Indian Lunch",
                    category: "lunch",
                    image: "images/meal-01.jpg",
                    rating: "4.9",
                    description: "Complete homemade South Indian lunch.",
                    time: "35–45 min",
                    price: "₹149",
                    type: "veg"
                },
                {
                    name: "Homestyle Vegetable Biryani",
                    category: "lunch",
                    image: "images/meal-02.jpg",
                    rating: "4.8",
                    description: "Aromatic vegetable biryani made with homemade spices.",
                    time: "30–40 min",
                    price: "₹129",
                    type: "veg"
                },
                {
                    name: "Chettinad Chicken Meal",
                    category: "dinner",
                    image: "images/meal-03.jpg",
                    rating: "4.9",
                    description: "Traditional Chettinad chicken meal.",
                    time: "40–50 min",
                    price: "₹179",
                    type: "nonveg"
                },
                {
                    name: "Chapati & Paneer Curry",
                    category: "dinner",
                    image: "images/meal-04.jpg",
                    rating: "4.8",
                    description: "Soft chapati served with homemade paneer curry.",
                    time: "35–45 min",
                    price: "₹139",
                    type: "veg"
                },
                {
                    name: "Homemade Evening Snacks",
                    category: "snacks",
                    image: "images/cuisine6.jpg",
                    rating: "4.7",
                    description: "Fresh evening snacks prepared at home.",
                    time: "15–20 min",
                    price: "₹79",
                    type: "veg"
                },
                {
                    name: "Traditional Homemade Snack",
                    category: "snacks",
                    image: "images/snacks.jpg",
                    rating: "4.8",
                    description: "A traditional homemade snack for your evening.",
                    time: "15–20 min",
                    price: "₹89",
                    type: "veg"
                }
            ],

            delivery: {
                areas: "Anna Nagar, Adyar, Velachery, T. Nagar",
                timing: "11:30 AM – 2:30 PM",
                timingNote: "Lunch delivery window",
                cutoff: "10:00 AM",
                cutoffNote: "Same-day lunch orders",
                minimum: "₹139",
                minimumNote: "Minimum order value"
            },

            ctaLocation: "Chennai",

            reviewsData: [
                {
                    name: "Divya R.",
                    location: "Chennai",
                    date: "2 days ago",
                    meal: "Traditional South Indian Lunch",
                    text: "The food tastes just like a homemade lunch. Everything was fresh and packed very neatly."
                },
                {
                    name: "Arun K.",
                    location: "Chennai",
                    date: "5 days ago",
                    meal: "Weekly Tiffin Plan",
                    text: "The weekly plan is very convenient. The food is fresh and delivery has been reliable."
                },
                {
                    name: "Meena S.",
                    location: "Chennai",
                    date: "1 week ago",
                    meal: "Homemade Paneer Meal",
                    text: "The flavours are balanced and the portions are satisfying. Definitely feels homemade."
                },
                {
                    name: "Rahul M.",
                    location: "Chennai",
                    date: "2 weeks ago",
                    meal: "Monthly Tiffin Plan",
                    text: "Very convenient for working days. The monthly plan saves time and the meals are consistently good."
                }
            ]
        },


        /* =================================================
           ASHA'S HOMESTYLE
        ================================================= */

        "ashas-homestyle": {
            name: "Asha's Homestyle",
            slug: "ashas-homestyle",
            speciality: "North Indian Specialist",
            image: "images/chef-02.jpg",
            rating: "4.8",
            reviews: "118",
            location: "Coimbatore",
            price: "₹149",
            intro:
                "Comforting North Indian homemade meals featuring traditional flavours, wholesome ingredients, and hearty portions.",

            tags: [
                "North Indian",
                "Thali Meals",
                "Lunch",
                "Homemade Food"
            ],

            about: {
                title: "Wholesome North Indian Food from a Home Kitchen",
                paragraphOne:
                    "Asha's Homestyle specialises in comforting North Indian dishes prepared with traditional recipes and fresh ingredients.",
                paragraphTwo:
                    "Her meals focus on familiar flavours, balanced spices, fresh vegetables, and satisfying portions suitable for everyday dining.",
                paragraphThree:
                    "Every order is prepared with care and packed fresh so customers can enjoy a warm homemade-style meal.",
                signature: "Asha",
                philosophy: "Wholesome • Traditional • Homemade"
            },

            specialities: [
                {
                    title: "North Indian Meals",
                    description: "Traditional North Indian meals with authentic spices and homemade flavours."
                },
                {
                    title: "Thali Meals",
                    description: "Balanced thali combinations with rice, roti, curry and sides."
                },
                {
                    title: "Vegetarian Food",
                    description: "Fresh vegetarian dishes prepared using seasonal ingredients."
                },
                {
                    title: "Homestyle Curries",
                    description: "Rich and comforting curries prepared using traditional methods."
                }
            ],

            stats: {
                experience: "7+ Years",
                mealsPrepared: "15K+",
                customers: "980+",
                rating: "4.8 / 5"
            },

            meals: [
                {
                    name: "North Indian Thali",
                    image: "images/cuisine-non-vegetarian.jpg",
                    rating: "4.8",
                    description: "Complete homemade North Indian thali with fresh sides.",
                    time: "35–45 min",
                    price: "₹149",
                    type: "veg"
                },
                {
                    name: "Paneer Butter Masala Meal",
                    image: "images/meal-04.jpg",
                    rating: "4.8",
                    description: "Creamy paneer curry served with soft rotis.",
                    time: "35–40 min",
                    price: "₹159",
                    type: "veg"
                },
                {
                    name: "Rajma Rice Meal",
                    image: "images/rajma.jpg",
                    rating: "4.7",
                    description: "Comforting rajma curry with steamed rice.",
                    time: "30–40 min",
                    price: "₹139",
                    type: "veg"
                },
                {
                    name: "Chapati & Mixed Veg Curry",
                    image: "images/chap.jpg",
                    rating: "4.8",
                    description: "Fresh chapatis served with seasonal vegetable curry.",
                    time: "30–40 min",
                    price: "₹129",
                    type: "veg"
                }
            ],

            plans: {
                daily: {
                    name: "Daily Tiffin",
                    description: "Fresh North Indian homemade meal.",
                    price: "₹149",
                    frequency: "/ meal",
                    benefits: [
                        "Fresh homemade meal",
                        "Traditional recipes",
                        "Reliable delivery"
                    ]
                },
                weekly: {
                    name: "Weekly Tiffin",
                    description: "North Indian meals for your entire week.",
                    price: "₹699",
                    frequency: "/ week",
                    benefits: [
                        "7 homemade meals",
                        "Balanced menu",
                        "Priority preparation"
                    ]
                },
                monthly: {
                    name: "Monthly Tiffin",
                    description: "Convenient monthly homemade food plan.",
                    price: "₹2,499",
                    frequency: "/ month",
                    benefits: [
                        "30 homemade meals",
                        "Better value",
                        "Priority delivery"
                    ]
                }
            },

            menu: [
                {
                    name: "Aloo Paratha",
                    category: "breakfast",
                    image: "images/aloo.jpg",
                    rating: "4.8",
                    description: "Fresh stuffed paratha prepared home style.",
                    time: "20–30 min",
                    price: "₹89",
                    type: "veg"
                },
                {
                    name: "Vegetable Poha",
                    category: "breakfast",
                    image: "images/meal-02.jpg",
                    rating: "4.7",
                    description: "Light and fresh homemade breakfast.",
                    time: "20–25 min",
                    price: "₹79",
                    type: "veg"
                },
                {
                    name: "North Indian Thali",
                    category: "lunch",
                    image: "images/cuisine-non-vegetarian.jpg",
                    rating: "4.8",
                    description: "Complete homemade North Indian thali.",
                    time: "35–45 min",
                    price: "₹149",
                    type: "veg"
                },
                {
                    name: "Paneer Butter Masala",
                    category: "lunch",
                    image: "images/meal-04.jpg",
                    rating: "4.8",
                    description: "Creamy paneer curry with fresh rotis.",
                    time: "35–40 min",
                    price: "₹159",
                    type: "veg"
                },
                {
                    name: "Rajma Rice",
                    category: "dinner",
                    image: "images/rajma.jpg",
                    rating: "4.7",
                    description: "Homestyle rajma served with rice.",
                    time: "30–40 min",
                    price: "₹139",
                    type: "veg"
                },
                {
                    name: "Chapati & Veg Curry",
                    category: "dinner",
                    image: "images/chap.jpg",
                    rating: "4.8",
                    description: "Fresh chapati with seasonal curry.",
                    time: "30–40 min",
                    price: "₹129",
                    type: "veg"
                },
                {
                    name: "Samosa",
                    category: "snacks",
                    image: "images/cuisine6.jpg",
                    rating: "4.7",
                    description: "Crispy homemade samosa.",
                    time: "15–20 min",
                    price: "₹59",
                    type: "veg"
                },
                {
                    name: "Homemade Pakora",
                    category: "snacks",
                    image: "images/pakora.jpg",
                    rating: "4.8",
                    description: "Freshly prepared crispy pakora.",
                    time: "15–20 min",
                    price: "₹69",
                    type: "veg"
                }
            ],

            delivery: {
                areas: "RS Puram, Saibaba Colony, Gandhipuram, Peelamedu",
                timing: "11:30 AM – 2:30 PM",
                timingNote: "Lunch delivery window",
                cutoff: "10:00 AM",
                cutoffNote: "Same-day lunch orders",
                minimum: "₹149",
                minimumNote: "Minimum order value"
            },

            ctaLocation: "Coimbatore",

            reviewsData: [
                {
                    name: "Priya M.",
                    location: "Coimbatore",
                    date: "3 days ago",
                    meal: "North Indian Thali",
                    text: "The thali was delicious and filling. It really tasted like homemade food."
                },
                {
                    name: "Karthik R.",
                    location: "Coimbatore",
                    date: "1 week ago",
                    meal: "Weekly Tiffin Plan",
                    text: "Very convenient for office lunches. The food arrives fresh and well packed."
                },
                {
                    name: "Anu S.",
                    location: "Coimbatore",
                    date: "1 week ago",
                    meal: "Paneer Meal",
                    text: "The paneer was soft and the spices were perfectly balanced."
                },
                {
                    name: "Vijay K.",
                    location: "Coimbatore",
                    date: "2 weeks ago",
                    meal: "Monthly Tiffin Plan",
                    text: "Good variety and consistent quality throughout the month."
                }
            ]
        },


        /* =================================================
           NANDHINI'S KITCHEN
        ================================================= */

        "nandhinis-kitchen": {
            name: "Nandhini's Kitchen",
            slug: "nandhinis-kitchen",
            speciality: "Healthy Meal Specialist",
            image: "images/chef-03.jpg",
            rating: "4.9",
            reviews: "136",
            location: "Madurai",
            price: "₹159",
            intro:
                "Wholesome homemade meals focused on balanced nutrition, low-oil cooking, fresh vegetables, and millet-based dishes.",

            tags: [
                "Healthy Meals",
                "Low Oil",
                "Millet Meals",
                "Balanced Food"
            ],

            about: {
                title: "Healthy Homemade Food Made Simple",
                paragraphOne:
                    "Nandhini's Kitchen focuses on healthy homemade meals that make everyday eating simple, nutritious, and enjoyable.",
                paragraphTwo:
                    "Her menu includes low-oil preparations, fresh vegetables, wholesome grains, and millet-based meals designed for balanced everyday eating.",
                paragraphThree:
                    "The kitchen follows a fresh, clean, and practical cooking approach without compromising on homemade flavour.",
                signature: "Nandhini",
                philosophy: "Healthy • Fresh • Balanced"
            },

            specialities: [
                {
                    title: "Healthy Meals",
                    description: "Balanced homemade meals prepared with fresh and wholesome ingredients."
                },
                {
                    title: "Low-Oil Cooking",
                    description: "Carefully prepared meals using less oil while maintaining great flavour."
                },
                {
                    title: "Millet Meals",
                    description: "Nutritious millet-based meals suitable for everyday healthy eating."
                },
                {
                    title: "Balanced Nutrition",
                    description: "Thoughtfully combined ingredients for satisfying everyday meals."
                }
            ],

            stats: {
                experience: "6+ Years",
                mealsPrepared: "16K+",
                customers: "1.1K+",
                rating: "4.9 / 5"
            },

            meals: [
                {
                    name: "Healthy Millet Meal",
                    image: "images/mmeal.jpg",
                    rating: "4.9",
                    description: "Wholesome millet meal prepared with fresh vegetables and homemade sides.",
                    time: "35–45 min",
                    price: "₹159",
                    type: "veg"
                },
                {
                    name: "Low-Oil Vegetable Bowl",
                    image: "images/bowl.jpg",
                    rating: "4.8",
                    description: "Fresh vegetables prepared with light seasoning and minimal oil.",
                    time: "25–35 min",
                    price: "₹139",
                    type: "veg"
                },
                {
                    name: "Healthy Paneer Meal",
                    image: "images/pmeal.jpg",
                    rating: "4.9",
                    description: "Balanced paneer meal with vegetables and healthy sides.",
                    time: "35–40 min",
                    price: "₹169",
                    type: "veg"
                },
                {
                    name: "Millet Chapati Meal",
                    image: "images/mchap.jpg",
                    rating: "4.8",
                    description: "Homemade millet chapatis with healthy vegetable curry.",
                    time: "30–40 min",
                    price: "₹149",
                    type: "veg"
                }
            ],

            plans: {
                daily: {
                    name: "Healthy Daily Tiffin",
                    description: "A balanced homemade meal prepared fresh.",
                    price: "₹159",
                    frequency: "/ meal",
                    benefits: [
                        "Fresh healthy meal",
                        "Low-oil preparation",
                        "Balanced ingredients"
                    ]
                },
                weekly: {
                    name: "Healthy Weekly Tiffin",
                    description: "Healthy homemade meals for your week.",
                    price: "₹749",
                    frequency: "/ week",
                    benefits: [
                        "7 healthy meals",
                        "Millet options",
                        "Fresh daily preparation"
                    ]
                },
                monthly: {
                    name: "Healthy Monthly Tiffin",
                    description: "A convenient healthy monthly food plan.",
                    price: "₹2,699",
                    frequency: "/ month",
                    benefits: [
                        "30 healthy meals",
                        "Balanced menu",
                        "Better monthly value"
                    ]
                }
            },

            menu: [
                {
                    name: "Millet Idli",
                    category: "breakfast",
                    image: "images/midli.jpg",
                    rating: "4.9",
                    description: "Soft millet idlis prepared fresh.",
                    time: "20–25 min",
                    price: "₹89",
                    type: "veg"
                },
                {
                    name: "Vegetable Millet Upma",
                    category: "breakfast",
                    image: "images/upma.jpg",
                    rating: "4.8",
                    description: "Healthy vegetable millet upma.",
                    time: "20–30 min",
                    price: "₹99",
                    type: "veg"
                },
                {
                    name: "Healthy Millet Lunch",
                    category: "lunch",
                    image: "images/mmeal.jpg",
                    rating: "4.9",
                    description: "Balanced millet lunch with vegetables and homemade sides.",
                    time: "35–45 min",
                    price: "₹159",
                    type: "veg"
                },
                {
                    name: "Low-Oil Vegetable Bowl",
                    category: "lunch",
                    image: "images/bowl.jpg",
                    rating: "4.8",
                    description: "Fresh low-oil vegetable meal.",
                    time: "25–35 min",
                    price: "₹139",
                    type: "veg"
                },
                {
                    name: "Healthy Paneer Dinner",
                    category: "dinner",
                    image: "images/pmeal.jpg",
                    rating: "4.9",
                    description: "Balanced paneer meal with healthy sides.",
                    time: "35–40 min",
                    price: "₹169",
                    type: "veg"
                },
                {
                    name: "Millet Chapati Meal",
                    category: "dinner",
                    image: "images/mchap.jpg",
                    rating: "4.8",
                    description: "Millet chapati with fresh vegetable curry.",
                    time: "30–40 min",
                    price: "₹149",
                    type: "veg"
                },
                {
                    name: "Roasted Healthy Snacks",
                    category: "snacks",
                    image: "images/hsnacks.jpg",
                    rating: "4.7",
                    description: "Light homemade evening snack.",
                    time: "15–20 min",
                    price: "₹79",
                    type: "veg"
                },
                {
                    name: "Millet Snack Bowl",
                    category: "snacks",
                    image: "images/msnacks.jpg",
                    rating: "4.8",
                    description: "Wholesome millet-based snack.",
                    time: "15–20 min",
                    price: "₹89",
                    type: "veg"
                }
            ],

            delivery: {
                areas: "Anna Nagar, KK Nagar, Tallakulam, Simmakkal",
                timing: "11:30 AM – 2:30 PM",
                timingNote: "Healthy lunch delivery window",
                cutoff: "10:00 AM",
                cutoffNote: "Same-day lunch orders",
                minimum: "₹159",
                minimumNote: "Minimum order value"
            },

            ctaLocation: "Madurai",

            reviewsData: [
                {
                    name: "Harini S.",
                    location: "Madurai",
                    date: "2 days ago",
                    meal: "Healthy Millet Meal",
                    text: "The millet meal was fresh, light and filling. Perfect for everyday lunch."
                },
                {
                    name: "Arun P.",
                    location: "Madurai",
                    date: "4 days ago",
                    meal: "Healthy Weekly Tiffin",
                    text: "I like the low-oil cooking and the variety of healthy dishes."
                },
                {
                    name: "Deepa R.",
                    location: "Madurai",
                    date: "1 week ago",
                    meal: "Low-Oil Vegetable Bowl",
                    text: "Fresh vegetables and balanced flavours. Very satisfying."
                },
                {
                    name: "Mohan K.",
                    location: "Madurai",
                    date: "2 weeks ago",
                    meal: "Monthly Healthy Plan",
                    text: "The monthly plan is convenient and the meals remain fresh and varied."
                }
            ]
        },


        /* =================================================
           REVATHI'S TIFFIN
        ================================================= */

        "revathis-tiffin": {
            name: "Revathi's Tiffin",
            slug: "revathis-tiffin",
            speciality: "Indian Chinese Specialist",
            image: "images/chef-04.jpg",
            rating: "4.8",
            reviews: "104",
            location: "Trichy",
            price: "₹129",
            intro:
                "Homemade Indian Chinese favourites and comforting tiffin meals prepared fresh with familiar flavours.",

            tags: [
                "Indian Chinese",
                "Snacks",
                "Dinner",
                "Homemade Food"
            ],

            about: {
                title: "Homemade Favourites with a Delicious Twist",
                paragraphOne:
                    "Revathi's Tiffin brings together homemade comfort food and popular Indian Chinese favourites.",
                paragraphTwo:
                    "The menu focuses on fresh preparation, familiar flavours, and satisfying portions suitable for lunch, dinner, and evening snacks.",
                paragraphThree:
                    "Every order is prepared fresh and packed carefully to preserve flavour and quality during delivery.",
                signature: "Revathi",
                philosophy: "Fresh • Flavourful • Homemade"
            },

            specialities: [
                {
                    title: "Indian Chinese",
                    description: "Popular Indian Chinese dishes prepared fresh in a home kitchen."
                },
                {
                    title: "Homemade Snacks",
                    description: "Fresh evening snacks perfect for sharing or enjoying at home."
                },
                {
                    title: "Dinner Meals",
                    description: "Comforting homemade dinner options prepared fresh."
                },
                {
                    title: "Tiffin Favourites",
                    description: "Easy and satisfying homemade tiffin meals for everyday dining."
                }
            ],

            stats: {
                experience: "6+ Years",
                mealsPrepared: "13K+",
                customers: "850+",
                rating: "4.8 / 5"
            },

            meals: [
                {
                    name: "Veg Fried Rice",
                    image: "images/vegrice.jpg",
                    rating: "4.8",
                    description: "Fresh homemade fried rice with vegetables and light seasoning.",
                    time: "25–35 min",
                    price: "₹129",
                    type: "veg"
                },
                {
                    name: "Gobi Manchurian Meal",
                    image: "images/gobi.jpg",
                    rating: "4.8",
                    description: "Crispy homemade gobi with flavourful Manchurian sauce.",
                    time: "30–40 min",
                    price: "₹139",
                    type: "veg"
                },
                {
                    name: "Chicken Fried Rice",
                    image: "images/chickenrice.jpg",
                    rating: "4.9",
                    description: "Fresh chicken fried rice prepared home style.",
                    time: "30–40 min",
                    price: "₹159",
                    type: "nonveg"
                },
                {
                    name: "Homemade Evening Snacks",
                    image: "images/crispysnacks.jpg",
                    rating: "4.7",
                    description: "Fresh crispy snacks prepared for the evening.",
                    time: "15–20 min",
                    price: "₹79",
                    type: "veg"
                }
            ],

            plans: {
                daily: {
                    name: "Daily Tiffin",
                    description: "Fresh homemade meal prepared daily.",
                    price: "₹129",
                    frequency: "/ meal",
                    benefits: [
                        "Freshly prepared",
                        "Homestyle flavours",
                        "Reliable delivery"
                    ]
                },
                weekly: {
                    name: "Weekly Tiffin",
                    description: "Enjoy homemade meals throughout the week.",
                    price: "₹599",
                    frequency: "/ week",
                    benefits: [
                        "7 homemade meals",
                        "Flexible choices",
                        "Priority preparation"
                    ]
                },
                monthly: {
                    name: "Monthly Tiffin",
                    description: "Convenient homemade food every day.",
                    price: "₹2,199",
                    frequency: "/ month",
                    benefits: [
                        "30 homemade meals",
                        "Better value",
                        "Priority delivery"
                    ]
                }
            },

            menu: [
                {
                    name: "Vegetable Noodles",
                    category: "breakfast",
                    image: "images/vegnoo.jpg",
                    rating: "4.7",
                    description: "Fresh vegetable noodles prepared home style.",
                    time: "20–30 min",
                    price: "₹89",
                    type: "veg"
                },
                {
                    name: "Veg Sandwich",
                    category: "breakfast",
                    image: "images/vegsand.jpg",
                    rating: "4.7",
                    description: "Fresh homemade vegetable sandwich.",
                    time: "15–20 min",
                    price: "₹79",
                    type: "veg"
                },
                {
                    name: "Veg Fried Rice",
                    category: "lunch",
                    image: "images/vegrice.jpg",
                    rating: "4.8",
                    description: "Fresh vegetable fried rice.",
                    time: "25–35 min",
                    price: "₹129",
                    type: "veg"
                },
                {
                    name: "Gobi Manchurian",
                    category: "lunch",
                    image: "images/gobi.jpg",
                    rating: "4.8",
                    description: "Crispy gobi with homemade Manchurian sauce.",
                    time: "30–40 min",
                    price: "₹139",
                    type: "veg"
                },
                {
                    name: "Chicken Fried Rice",
                    category: "dinner",
                    image: "images/chickenrice.jpg",
                    rating: "4.9",
                    description: "Homestyle chicken fried rice.",
                    time: "30–40 min",
                    price: "₹159",
                    type: "nonveg"
                },
                {
                    name: "Chicken Noodles",
                    category: "dinner",
                    image: "images/chickennoo.jpg",
                    rating: "4.8",
                    description: "Fresh chicken noodles with vegetables.",
                    time: "30–40 min",
                    price: "₹149",
                    type: "nonveg"
                },
                {
                    name: "Homemade Pakora",
                    category: "snacks",
                    image: "images/pakora.jpg",
                    rating: "4.7",
                    description: "Fresh crispy homemade pakora.",
                    time: "15–20 min",
                    price: "₹69",
                    type: "veg"
                },
                {
                    name: "Crispy Evening Snacks",
                    category: "snacks",
                    image: "images/crispysnacks.jpg",
                    rating: "4.8",
                    description: "Fresh homemade evening snack.",
                    time: "15–20 min",
                    price: "₹89",
                    type: "veg"
                }
            ],

            delivery: {
                areas: "Srirangam, Cantonment, Thillai Nagar, Woraiyur",
                timing: "6:30 PM – 9:00 PM",
                timingNote: "Dinner delivery window",
                cutoff: "4:30 PM",
                cutoffNote: "Same-day dinner orders",
                minimum: "₹129",
                minimumNote: "Minimum order value"
            },

            ctaLocation: "Trichy",

            reviewsData: [
                {
                    name: "Sathya R.",
                    location: "Trichy",
                    date: "2 days ago",
                    meal: "Veg Fried Rice",
                    text: "The fried rice was fresh and tasty. The portion was also good."
                },
                {
                    name: "Vignesh K.",
                    location: "Trichy",
                    date: "5 days ago",
                    meal: "Weekly Tiffin Plan",
                    text: "Very convenient for dinner. Everything arrived fresh and warm."
                },
                {
                    name: "Pavithra S.",
                    location: "Trichy",
                    date: "1 week ago",
                    meal: "Gobi Manchurian",
                    text: "Crispy, flavourful and not too oily. Really enjoyed it."
                },
                {
                    name: "Kumar M.",
                    location: "Trichy",
                    date: "2 weeks ago",
                    meal: "Monthly Tiffin Plan",
                    text: "Good variety and dependable delivery throughout the month."
                }
            ]
        }
    };


    /* =====================================================
       2. SUPPORT ALL-HOME-CHEF SLUGS
       ===================================================== */

    chefData["anithas-kitchen"] = chefData["kavithas-kitchen"];
    chefData["meenas-homestyle"] = chefData["ashas-homestyle"];
    chefData["priyas-kitchen"] = chefData["ashas-homestyle"];
    chefData["lakshmis-tiffin"] = chefData["kavithas-kitchen"];
    chefData["sangeethas-home-kitchen"] = chefData["nandhinis-kitchen"];
    chefData["divyas-homemade"] = chefData["revathis-tiffin"];
    chefData["malars-home-food"] = chefData["kavithas-kitchen"];


    /* =====================================================
       3. GET CHEF FROM URL
       ===================================================== */

    const params = new URLSearchParams(window.location.search);

    const requestedChef =
        (params.get("chef") || "kavithas-kitchen").toLowerCase();

    const chef =
        chefData[requestedChef] ||
        chefData["kavithas-kitchen"];


    /* =====================================================
       4. HELPERS
       ===================================================== */

    function getElement(id) {
        return document.getElementById(id);
    }

    function setText(id, value) {
        const element = getElement(id);

        if (element && value !== undefined && value !== null) {
            element.textContent = value;
        }
    }

    function setHTML(id, value) {
        const element = getElement(id);

        if (element && value !== undefined && value !== null) {
            element.innerHTML = value;
        }
    }

    function setAttribute(id, attribute, value) {
        const element = getElement(id);

        if (element && value !== undefined && value !== null) {
            element.setAttribute(attribute, value);
        }
    }

    function setImage(id, src, alt) {
        const element = getElement(id);

        if (!element) {
            return;
        }

        element.src = src;

        if (alt) {
            element.alt = alt;
        }
    }

    function formatPrice(value) {
        if (!value) {
            return 0;
        }

        return Number(
            String(value)
                .replace(/[₹,\s]/g, "")
                .replace(/[^\d.]/g, "")
        ) || 0;
    }


    /* =====================================================
       5. PAGE TITLE
       ===================================================== */

    document.title = `${chef.name} | TiffinMate`;


    /* =====================================================
       6. HERO
       ===================================================== */

    setImage(
        "chefProfileImage",
        chef.image,
        `${chef.name} - TiffinMate Home Chef`
    );

    setText("chefBreadcrumbName", chef.name);
    setText("chefProfileName", chef.name);
    setText("chefProfileSpeciality", chef.speciality);
    setText("chefProfileRating", chef.rating);
    setText("chefProfileReviews", chef.reviews);
    setText("chefProfileLocation", chef.location);
    setText("chefProfileIntro", chef.intro);
    setText("chefProfilePrice", chef.price);

    const verifiedBadge = getElement("chefVerifiedBadge");

    if (verifiedBadge) {
        verifiedBadge.setAttribute(
            "aria-label",
            `${chef.name} is a verified home chef`
        );
    }

    const favoriteButton = getElement("chefProfileFavorite");

    if (favoriteButton) {
        favoriteButton.setAttribute(
            "aria-label",
            `Add ${chef.name} to favourites`
        );
    }


    /* =====================================================
       7. HERO TAGS
       ===================================================== */

    const heroTags = getElement("chefProfileTags");

    if (heroTags) {

        const tagElements =
            heroTags.querySelectorAll(".chef-profile-tag");

        tagElements.forEach((tag, index) => {

            if (chef.tags[index]) {
                tag.textContent = chef.tags[index];
                tag.hidden = false;
            } else {
                tag.hidden = true;
            }

        });
    }


    /* =====================================================
       8. ABOUT THE CHEF
       ===================================================== */

    setText("chefAboutTitle", chef.about.title);
    setText("chefAboutParagraphOne", chef.about.paragraphOne);
    setText("chefAboutParagraphTwo", chef.about.paragraphTwo);
    setText("chefAboutParagraphThree", chef.about.paragraphThree);
    setText("chefSignatureName", chef.about.signature);
    setText("chefFoodPhilosophy", chef.about.philosophy);


    /* =====================================================
       9. SPECIALITIES
       IMPORTANT:
       DO NOT REBUILD HTML.
       UPDATE EXISTING CARDS ONLY.
       ===================================================== */

    const specialityGrid = getElement("chefSpecialitiesGrid");

    if (specialityGrid) {

        const cards =
            specialityGrid.querySelectorAll(".chef-speciality-card");

        cards.forEach((card, index) => {

            const data = chef.specialities[index];

            if (!data) {
                card.hidden = true;
                return;
            }

            card.hidden = false;

            const title = card.querySelector("h3");
            const description = card.querySelector("p");
            const number = card.querySelector(".chef-speciality-number");

            if (title) {
                title.textContent = data.title;
            }

            if (description) {
                description.textContent = data.description;
            }

            if (number) {
                number.textContent =
                    String(index + 1).padStart(2, "0");
            }

        });
    }


    /* =====================================================
       10. SPECIALITY TAGS
       ===================================================== */

    const specialityTags =
        getElement("chefSpecialityTags");

    if (specialityTags) {

        specialityTags.innerHTML = "";

        chef.specialities.forEach((item) => {

            const tag =
                document.createElement("span");

            tag.className = "chef-speciality-tag";
            tag.textContent = item.title;

            specialityTags.appendChild(tag);

        });
    }


    /* =====================================================
       11. STATS
       ===================================================== */

    setText(
        "chefExperience",
        chef.stats.experience
    );

    setText(
        "chefMealsPrepared",
        chef.stats.mealsPrepared
    );

    setText(
        "chefCustomers",
        chef.stats.customers
    );

    setText(
        "chefAverageRating",
        chef.stats.rating
    );


    /* =====================================================
       12. POPULAR HOMEMADE MEALS
       UPDATE EXISTING HTML ONLY.
       ===================================================== */

    chef.meals.forEach((meal, index) => {

        const number =
            String(index + 1).padStart(2, "0");

        setImage(
            `chefMealImage${number}`,
            meal.image,
            meal.name
        );

        setText(
            `chefMealName${number}`,
            meal.name
        );

        setText(
            `chefMealRating${number}`,
            meal.rating
        );

        setText(
            `chefMealDescription${number}`,
            meal.description
        );

        setText(
            `chefMealTime${number}`,
            meal.time
        );

        setText(
            `chefMealPrice${number}`,
            meal.price
        );

        const link =
            getElement(`chefMealLink${number}`);

        if (link) {
            link.href =
                `order.html?chef=${encodeURIComponent(chef.slug)}&meal=${encodeURIComponent(meal.name)}`;
        }

        const card =
            link
                ? link.closest(".chef-meal-card")
                : document.querySelector(
                    `.chef-meal-card:nth-child(${index + 1})`
                );

        if (card) {

            card.classList.remove(
                "chef-meal-veg",
                "chef-meal-nonveg"
            );

            card.classList.add(
                meal.type === "nonveg"
                    ? "chef-meal-nonveg"
                    : "chef-meal-veg"
            );
        }

    });


    /* =====================================================
       13. TIFFIN PLANS
       USE ACTUAL HTML IDs.
       ===================================================== */

    const planTypes = [
        "daily",
        "weekly",
        "monthly"
    ];

    planTypes.forEach((type) => {

        const plan = chef.plans[type];

        if (!plan) {
            return;
        }

        const prefix =
            type.charAt(0).toUpperCase() +
            type.slice(1);

        setText(
            `chef${prefix}PlanName`,
            plan.name
        );

        setText(
            `chef${prefix}PlanDescription`,
            plan.description
        );

        setText(
            `chef${prefix}PlanPrice`,
            plan.price
        );

        setText(
            `chef${prefix}PlanFrequency`,
            plan.frequency
        );


        /* ---------------------------------------------
           PLAN BENEFITS
           Preserve .chef-plan-check structure.
        --------------------------------------------- */

        const benefitsElement =
            getElement(`chef${prefix}PlanBenefits`);

        if (benefitsElement) {

            const listItems =
                benefitsElement.querySelectorAll("li");

            listItems.forEach((li, index) => {

                if (!plan.benefits[index]) {
                    li.hidden = true;
                    return;
                }

                li.hidden = false;

                let textNode = null;

                li.childNodes.forEach((node) => {

                    if (
                        node.nodeType === Node.TEXT_NODE &&
                        node.textContent.trim()
                    ) {
                        textNode = node;
                    }

                });

                if (textNode) {
                    textNode.textContent =
                        ` ${plan.benefits[index]}`;
                } else {

                    const check =
                        li.querySelector(".chef-plan-check");

                    if (check) {
                        check.insertAdjacentText(
                            "afterend",
                            ` ${plan.benefits[index]}`
                        );
                    } else {
                        li.textContent =
                            plan.benefits[index];
                    }

                }

            });

        }


        /* ---------------------------------------------
           CHECKOUT BUTTON
        --------------------------------------------- */

        const button =
            getElement(`chef${prefix}PlanButton`);

        if (button) {

            button.href =
                `tiffin-checkout.html?chef=${encodeURIComponent(chef.slug)}&plan=${type}`;

            button.setAttribute(
                "data-chef",
                chef.slug
            );

            button.setAttribute(
                "data-plan",
                type
            );
        }

    });


    /* =====================================================
       14. CHEF MENU
       IMPORTANT:
       EXISTING CARDS ARE PRESERVED.
       NO INNERHTML CARD REBUILD.
       ===================================================== */

    const menuGrid =
        getElement("chefMenuGrid");

    let menuCards = [];

    if (menuGrid) {

        menuCards =
            Array.from(
                menuGrid.querySelectorAll(".chef-menu-item")
            );

        chef.menu.forEach((item, index) => {

            const card =
                menuCards[index];

            if (!card) {
                return;
            }

            const number =
                String(index + 1).padStart(2, "0");

            card.dataset.menuCategory =
                item.category;

            card.dataset.menuRating =
                item.rating;

            card.dataset.menuPrice =
                formatPrice(item.price);

            card.dataset.menuIndex =
                index;


            /* -----------------------------------------
               IMAGE
            ----------------------------------------- */

            setImage(
                `chefMenuImage${number}`,
                item.image,
                item.name
            );


            /* -----------------------------------------
               TEXT
            ----------------------------------------- */

            setText(
                `chefMenuName${number}`,
                item.name
            );

            setText(
                `chefMenuCategory${number}`,
                item.category
            );

            setText(
                `chefMenuRating${number}`,
                item.rating
            );

            setText(
                `chefMenuDescription${number}`,
                item.description
            );

            setText(
                `chefMenuTime${number}`,
                item.time
            );

            setText(
                `chefMenuPrice${number}`,
                item.price
            );


            /* -----------------------------------------
               TYPE
            ----------------------------------------- */

            card.classList.remove(
                "chef-menu-item-veg",
                "chef-menu-item-nonveg"
            );

            card.classList.add(
                item.type === "nonveg"
                    ? "chef-menu-item-nonveg"
                    : "chef-menu-item-veg"
            );


            /* -----------------------------------------
               ORDER BUTTON
            ----------------------------------------- */

            const addButton =
                card.querySelector(".chef-menu-add-btn");

            if (addButton) {

                addButton.setAttribute(
                    "data-menu-index",
                    index
                );

                addButton.setAttribute(
                    "data-chef",
                    chef.slug
                );

            }


            /* -----------------------------------------
               FAVORITE BUTTON
            ----------------------------------------- */

            const favorite =
                card.querySelector(".chef-menu-item-favorite");

            if (favorite) {

                favorite.setAttribute(
                    "data-menu-index",
                    index
                );

                favorite.setAttribute(
                    "aria-label",
                    `Add ${item.name} to favourites`
                );

            }

        });

    }


    /* =====================================================
       15. MENU FILTER + SORT
       ===================================================== */

    const menuResultCount =
        getElement("chefMenuResultCount");

    const menuResultCategory =
        getElement("chefMenuResultCategory");

    const menuSort =
        getElement("chefMenuSort");

    const menuEmpty =
        getElement("chefMenuEmpty");

    let activeCategory = "all";


    function updateMenu() {

        if (!menuGrid) {
            return;
        }

        const sortValue =
            menuSort
                ? menuSort.value
                : "recommended";


        /* ---------------------------------------------
           SORT EXISTING CARDS
        --------------------------------------------- */

        let sortedCards =
            [...menuCards];


        if (sortValue === "rating-high") {

            sortedCards.sort(
                (a, b) =>
                    Number(b.dataset.menuRating) -
                    Number(a.dataset.menuRating)
            );

        } else if (sortValue === "price-low") {

            sortedCards.sort(
                (a, b) =>
                    Number(a.dataset.menuPrice) -
                    Number(b.dataset.menuPrice)
            );

        } else if (sortValue === "price-high") {

            sortedCards.sort(
                (a, b) =>
                    Number(b.dataset.menuPrice) -
                    Number(a.dataset.menuPrice)
            );

        } else {

            sortedCards.sort(
                (a, b) =>
                    Number(a.dataset.menuIndex) -
                    Number(b.dataset.menuIndex)
            );

        }


        /* ---------------------------------------------
           REORDER EXISTING DOM CARDS
        --------------------------------------------- */

        sortedCards.forEach((card) => {
            menuGrid.appendChild(card);
        });


        /* ---------------------------------------------
           FILTER
        --------------------------------------------- */

        let visibleCount = 0;

        sortedCards.forEach((card) => {

            const category =
                card.dataset.menuCategory;

            const visible =
                activeCategory === "all" ||
                category === activeCategory;

            card.classList.toggle(
                "is-hidden",
                !visible
            );

            card.hidden = !visible;

            if (visible) {
                visibleCount++;
            }

        });


        /* ---------------------------------------------
           RESULT COUNT
        --------------------------------------------- */

        if (menuResultCount) {
            menuResultCount.textContent =
                `${visibleCount} ${visibleCount === 1 ? "meal" : "meals"}`;
        }


        if (menuResultCategory) {

            menuResultCategory.textContent =
                activeCategory === "all"
                    ? "All Meals"
                    : activeCategory.charAt(0).toUpperCase() +
                      activeCategory.slice(1);

        }


        /* ---------------------------------------------
           EMPTY STATE
        --------------------------------------------- */

        if (menuEmpty) {

            menuEmpty.hidden =
                visibleCount !== 0;

        }

    }


    /* =====================================================
       16. MENU CATEGORY BUTTONS
       ===================================================== */

    const menuTabs =
        document.querySelectorAll(
            "[data-menu-category]"
        );

    menuTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            activeCategory =
                (
                    tab.dataset.menuCategory ||
                    "all"
                ).toLowerCase();


            /* -----------------------------------------
               ACTIVE STATE
            ----------------------------------------- */

            menuTabs.forEach((item) => {

                item.classList.toggle(
                    "active",
                    item === tab
                );

                item.setAttribute(
                    "aria-selected",
                    item === tab
                        ? "true"
                        : "false"
                );

            });


            updateMenu();

        });

    });


    /* =====================================================
       17. MENU SORT
       ===================================================== */

    if (menuSort) {

        menuSort.addEventListener(
            "change",
            updateMenu
        );

    }


    /* =====================================================
       18. FAVORITES
       ===================================================== */

    const FAVORITES_KEY =
        "tiffinmate-favourite-meals";


    function getFavorites() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    FAVORITES_KEY
                )
            ) || [];

        } catch (error) {

            return [];

        }

    }


    function saveFavorites(items) {

        try {

            localStorage.setItem(
                FAVORITES_KEY,
                JSON.stringify(items)
            );

        } catch (error) {
            /* localStorage unavailable */
        }

    }


    function updateFavoriteButton(button, active) {

        if (!button) {
            return;
        }

        button.classList.toggle(
            "is-favorite",
            active
        );

        button.classList.toggle(
            "active",
            active
        );

        button.setAttribute(
            "aria-pressed",
            active ? "true" : "false"
        );

    }


    function initializeFavorites() {

        const favorites =
            getFavorites();

        if (!menuGrid) {
            return;
        }

        menuGrid
            .querySelectorAll(
                ".chef-menu-item-favorite"
            )
            .forEach((button) => {

                const card =
                    button.closest(
                        ".chef-menu-item"
                    );

                if (!card) {
                    return;
                }

                const index =
                    Number(
                        button.dataset.menuIndex
                    );

                const key =
                    `${chef.slug}-${index}`;

                updateFavoriteButton(
                    button,
                    favorites.includes(key)
                );

            });

    }


    /* =====================================================
       19. FAVORITE CLICK
       ===================================================== */

    if (menuGrid) {

        menuGrid.addEventListener(
            "click",
            (event) => {

                const button =
                    event.target.closest(
                        ".chef-menu-item-favorite"
                    );

                if (!button) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                const index =
                    Number(
                        button.dataset.menuIndex
                    );

                const key =
                    `${chef.slug}-${index}`;

                const favorites =
                    getFavorites();

                const position =
                    favorites.indexOf(key);

                let active = false;

                if (position >= 0) {

                    favorites.splice(
                        position,
                        1
                    );

                    active = false;

                } else {

                    favorites.push(key);

                    active = true;

                }

                saveFavorites(favorites);

                updateFavoriteButton(
                    button,
                    active
                );

            }
        );

    }


    /* =====================================================
       20. ADD TO ORDER / CART
       ===================================================== */

    const CART_KEY =
        "tiffinmate-cart";


    function getCart() {

        try {

            return JSON.parse(
                localStorage.getItem(CART_KEY)
            ) || [];

        } catch (error) {

            return [];

        }

    }


    function saveCart(cart) {

        try {

            localStorage.setItem(
                CART_KEY,
                JSON.stringify(cart)
            );

        } catch (error) {
            /* localStorage unavailable */
        }

    }


    function addToCart(item) {

        const cart =
            getCart();

        const existing =
            cart.find(
                (cartItem) =>
                    cartItem.chef === chef.slug &&
                    cartItem.name === item.name
            );


        if (existing) {

            existing.quantity =
                Number(existing.quantity || 1) + 1;

        } else {

            cart.push({
                chef: chef.slug,
                chefName: chef.name,
                name: item.name,
                price: formatPrice(item.price),
                image: item.image,
                quantity: 1
            });

        }

        saveCart(cart);

    }


    if (menuGrid) {

        menuGrid.addEventListener(
            "click",
            (event) => {

                const button =
                    event.target.closest(
                        ".chef-menu-add-btn"
                    );

                if (!button) {
                    return;
                }

                event.preventDefault();

                const index =
                    Number(
                        button.dataset.menuIndex
                    );

                const item =
                    chef.menu[index];

                if (!item) {
                    return;
                }

                addToCart(item);

                const originalText =
                    button.textContent;

                button.textContent =
                    "Added";

                button.classList.add(
                    "is-added"
                );

                button.disabled = true;

                window.setTimeout(() => {

                    button.textContent =
                        originalText;

                    button.classList.remove(
                        "is-added"
                    );

                    button.disabled = false;

                }, 1200);

            }
        );

    }


    /* =====================================================
       21. MENU AVAILABILITY
       ===================================================== */

    setText(
        "chefMenuAvailability",
        `Fresh homemade meals from ${chef.name}`
    );


    /* =====================================================
       22. REVIEWS
       PRESERVE EXISTING SVG STAR STRUCTURE.
       ===================================================== */

    const reviewData =
        chef.reviewsData || [];

    const reviewCards =
        document.querySelectorAll(
            ".chef-review-card"
        );


    reviewData.forEach((review, index) => {

        const card =
            reviewCards[index];

        if (!card) {
            return;
        }


        const name =
            card.querySelector(
                "[id^='chefReviewCustomerName']"
            );

        const location =
            card.querySelector(
                "[id^='chefReviewCustomerLocation']"
            );

        const date =
            card.querySelector(
                "[id^='chefReviewDate']"
            );

        const meal =
            card.querySelector(
                "[id^='chefReviewMeal']"
            );

        const text =
            card.querySelector(
                "[id^='chefReviewText']"
            );


        if (name) {
            name.textContent =
                review.name;
        }

        if (location) {
            location.textContent =
                review.location;
        }

        if (date) {
            date.textContent =
                review.date;
        }

        if (meal) {
            meal.textContent =
                review.meal;
        }

        if (text) {
            text.textContent =
                review.text;
        }


        /* ---------------------------------------------
           DO NOT REPLACE SVG STARS.
        --------------------------------------------- */

        const stars =
            card.querySelector(
                ".chef-review-stars"
            );

        if (stars) {

            stars.setAttribute(
                "aria-label",
                `${chef.rating} out of 5 stars`
            );

        }

    });


    /* =====================================================
       23. REVIEW SUMMARY
       ===================================================== */

    setText(
        "chefReviewsAverageRating",
        chef.rating
    );

    setText(
        "chefReviewsCount",
        chef.reviews
    );

    const reviewStars =
        getElement("chefReviewsStars");

    if (reviewStars) {

        reviewStars.setAttribute(
            "aria-label",
            `${chef.rating} out of 5 stars`
        );

    }


    /* =====================================================
       24. DELIVERY & ORDERING
       ===================================================== */

    setText(
        "chefDeliveryChefName",
        chef.name
    );

    setText(
        "chefDeliveryIntroText",
        `${chef.name} prepares fresh homemade meals for customers in ${chef.location}.`
    );

    setText(
        "chefDeliveryLocation",
        chef.location
    );

    setText(
        "chefDeliveryAreas",
        chef.delivery.areas
    );

    setText(
        "chefDeliveryTiming",
        chef.delivery.timing
    );

    setText(
        "chefDeliveryTimingNote",
        chef.delivery.timingNote
    );

    setText(
        "chefOrderCutoff",
        chef.delivery.cutoff
    );

    setText(
        "chefOrderCutoffNote",
        chef.delivery.cutoffNote
    );

    setText(
        "chefMinimumOrder",
        chef.delivery.minimum
    );

    setText(
        "chefMinimumOrderNote",
        chef.delivery.minimumNote
    );


    /* =====================================================
       25. DELIVERY DETAIL CARDS
       ===================================================== */

    setText(
        "chefPackagingInfo",
        "Meals are packed carefully in clean, food-safe packaging to maintain freshness during delivery."
    );

    setText(
        "chefPaymentInfo",
        "Secure online payment options are available when placing your order."
    );

    setText(
        "chefDeliverySafetyInfo",
        "Orders are prepared fresh and handled carefully before being delivered to your selected location."
    );


    /* =====================================================
       26. DELIVERY ACTION
       ===================================================== */

    setText(
        "chefDeliveryActionName",
        chef.name
    );


    /* =====================================================
       27. FINAL CTA
       ===================================================== */

    setText(
        "chefFinalCtaName",
        chef.name
    );

    setText(
        "chefFinalCtaLocation",
        chef.location
    );


    const finalCtaImage =
        getElement("chefFinalCtaImage");

    if (finalCtaImage) {

        finalCtaImage.alt =
            `${chef.name} homemade food`;

    }


    /* =====================================================
       28. HERO BUTTONS
       ===================================================== */

    const heroMenuButton =
        document.querySelector(
            'a[href="#chefMenu"]'
        );

    if (heroMenuButton) {

        heroMenuButton.setAttribute(
            "aria-label",
            `Explore ${chef.name}'s menu`
        );

    }


    /* =====================================================
       29. PROFILE FAVORITE
       ===================================================== */

    if (favoriteButton) {

        const CHEF_FAV_KEY =
            "tiffinmate-favourite-chefs";

        function getChefFavorites() {

            try {

                return JSON.parse(
                    localStorage.getItem(
                        CHEF_FAV_KEY
                    )
                ) || [];

            } catch (error) {

                return [];

            }

        }

        function saveChefFavorites(items) {

            try {

                localStorage.setItem(
                    CHEF_FAV_KEY,
                    JSON.stringify(items)
                );

            } catch (error) {
                /* localStorage unavailable */
            }

        }


        function updateChefFavoriteState() {

            const favorites =
                getChefFavorites();

            const active =
                favorites.includes(
                    chef.slug
                );

            favoriteButton.classList.toggle(
                "is-favorite",
                active
            );

            favoriteButton.classList.toggle(
                "active",
                active
            );

            favoriteButton.setAttribute(
                "aria-pressed",
                active
                    ? "true"
                    : "false"
            );

        }


        favoriteButton.addEventListener(
            "click",
            () => {

                const favorites =
                    getChefFavorites();

                const index =
                    favorites.indexOf(
                        chef.slug
                    );

                if (index >= 0) {

                    favorites.splice(
                        index,
                        1
                    );

                } else {

                    favorites.push(
                        chef.slug
                    );

                }

                saveChefFavorites(
                    favorites
                );

                updateChefFavoriteState();

            }
        );


        updateChefFavoriteState();

    }


    /* =====================================================
       30. SIMILAR CHEFS
       KEEP EXISTING HTML / CSS
       ===================================================== */

    const similarLinks =
        document.querySelectorAll(
            ".chef-similar-chef-link"
        );

    similarLinks.forEach((link) => {

        const currentHref =
            link.getAttribute("href");

        if (
            !currentHref ||
            !currentHref.includes("chef-profile.html")
        ) {
            return;
        }

        link.addEventListener(
            "click",
            () => {
                /* Normal navigation */
            }
        );

    });


    /* =====================================================
       31. SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior:
                        window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches
                            ? "auto"
                            : "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       32. INITIALIZE MENU
       ===================================================== */

    updateMenu();

    initializeFavorites();


    /* =====================================================
       33. DEFAULT MENU TAB
       ===================================================== */

    const allTab =
        document.querySelector(
            '[data-menu-category="all"]'
        );

    if (allTab) {

        menuTabs.forEach((tab) => {

            tab.classList.remove(
                "active"
            );

            tab.setAttribute(
                "aria-selected",
                "false"
            );

        });

        allTab.classList.add(
            "active"
        );

        allTab.setAttribute(
            "aria-selected",
            "true"
        );

    }


    /* =====================================================
       34. RTL SUPPORT
       ===================================================== */

    function updateRTLState() {

        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.body.classList.contains("rtl");

        document.documentElement.classList.toggle(
            "is-rtl",
            isRTL
        );

    }

    updateRTLState();


    /* =====================================================
       35. WATCH RTL CHANGES
       ===================================================== */

    const rtlObserver =
        new MutationObserver(
            updateRTLState
        );

    rtlObserver.observe(
        document.documentElement,
        {
            attributes: true,
            attributeFilter: ["dir", "class"]
        }
    );

    rtlObserver.observe(
        document.body,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );


    /* =====================================================
       36. FINAL READY STATE
       ===================================================== */

    document.documentElement.classList.add(
        "chef-profile-ready"
    );

});

/* =========================================================
   TIFFINMATE — GLOBAL DARK MODE + RTL SYNC
   MASTER CONTROLLER
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    const DARK_MODE_KEY = "tiffinmate-dark-mode";
    const RTL_KEY = "tiffinmate-rtl";


    /* =====================================================
       BUTTON SELECTORS
    ===================================================== */

    const DARK_BUTTON_SELECTOR = [
        "#darkModeToggle",
        "#registerDarkModeToggle",
        "#loginDarkModeToggle",
        "#dashboardDarkModeToggle"
    ].join(",");


    const RTL_BUTTON_SELECTOR = [
        "#rtlToggle",
        "#registerRtlToggle",
        "#loginRtlToggle",
        "#dashboardRtlToggle"
    ].join(",");


    /* =====================================================
       APPLY DARK MODE
    ===================================================== */

    function applyDarkMode(enabled) {

        document.body.classList.toggle(
            "dark-mode",
            enabled
        );

        document.documentElement.classList.toggle(
            "dark-mode",
            enabled
        );

        updateDarkButtons(enabled);

    }


    /* =====================================================
       UPDATE DARK BUTTONS
    ===================================================== */

    function updateDarkButtons(enabled) {

        const buttons =
            document.querySelectorAll(
                DARK_BUTTON_SELECTOR
            );

        buttons.forEach(function (button) {

            button.setAttribute(
                "aria-pressed",
                String(enabled)
            );

            button.setAttribute(
                "aria-label",
                enabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            button.setAttribute(
                "title",
                enabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        });

    }


    /* =====================================================
       APPLY RTL
    ===================================================== */

    function applyRTL(enabled) {

        document.documentElement.setAttribute(
            "dir",
            enabled ? "rtl" : "ltr"
        );

        document.documentElement.classList.toggle(
            "rtl-mode",
            enabled
        );

        document.body.classList.toggle(
            "rtl-mode",
            enabled
        );

        updateRTLButtons(enabled);

    }


    /* =====================================================
       UPDATE RTL BUTTONS
    ===================================================== */

    function updateRTLButtons(enabled) {

        const buttons =
            document.querySelectorAll(
                RTL_BUTTON_SELECTOR
            );

        buttons.forEach(function (button) {

            button.setAttribute(
                "aria-pressed",
                String(enabled)
            );

            button.setAttribute(
                "aria-label",
                enabled
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

            button.setAttribute(
                "title",
                enabled
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

        });

    }


    /* =====================================================
       READ SAVED SETTINGS
    ===================================================== */

    function getDarkMode() {

        return (
            localStorage.getItem(
                DARK_MODE_KEY
            ) === "true"
        );

    }


    function getRTL() {

        return (
            localStorage.getItem(
                RTL_KEY
            ) === "true"
        );

    }


    /* =====================================================
       APPLY SETTINGS IMMEDIATELY
    ===================================================== */

    const savedDarkMode =
        getDarkMode();

    const savedRTL =
        getRTL();


    /*
     * Apply before page-specific JavaScript
     * can change the visual state.
     */

    document.documentElement.classList.toggle(
        "dark-mode",
        savedDarkMode
    );

    document.documentElement.setAttribute(
        "dir",
        savedRTL ? "rtl" : "ltr"
    );


    /* =====================================================
       DOM READY
    ===================================================== */

    function initializeTheme() {

        applyDarkMode(
            getDarkMode()
        );

        applyRTL(
            getRTL()
        );

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );

    } else {

        initializeTheme();

    }


    /* =====================================================
       DARK MODE CLICK
       
       CAPTURE PHASE
       
       This prevents the old page-specific
       Dark Mode handler from also running.
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    DARK_BUTTON_SELECTOR
                );

            if (!button) {
                return;
            }


            event.preventDefault();

            event.stopImmediatePropagation();


            const current =
                getDarkMode();

            const newState =
                !current;


            localStorage.setItem(
                DARK_MODE_KEY,
                String(newState)
            );


            applyDarkMode(
                newState
            );

        },
        true
    );


    /* =====================================================
       RTL CLICK
       
       CAPTURE PHASE
       
       This prevents the old page-specific
       RTL handler from also running.
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    RTL_BUTTON_SELECTOR
                );

            if (!button) {
                return;
            }


            event.preventDefault();

            event.stopImmediatePropagation();


            const current =
                getRTL();

            const newState =
                !current;


            localStorage.setItem(
                RTL_KEY,
                String(newState)
            );


            applyRTL(
                newState
            );

        },
        true
    );


    /* =====================================================
       CROSS-TAB SYNC
    ===================================================== */

    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key ===
                DARK_MODE_KEY
            ) {

                applyDarkMode(
                    event.newValue === "true"
                );

            }


            if (
                event.key ===
                RTL_KEY
            ) {

                applyRTL(
                    event.newValue === "true"
                );

            }

        }
    );


    /* =====================================================
       EXPOSE GLOBAL FUNCTIONS
    ===================================================== */

    window.TiffinMateTheme = {

        setDarkMode: function (enabled) {

            localStorage.setItem(
                DARK_MODE_KEY,
                String(Boolean(enabled))
            );

            applyDarkMode(
                Boolean(enabled)
            );

        },

        setRTL: function (enabled) {

            localStorage.setItem(
                RTL_KEY,
                String(Boolean(enabled))
            );

            applyRTL(
                Boolean(enabled)
            );

        },

        isDarkMode: function () {

            return getDarkMode();

        },

        isRTL: function () {

            return getRTL();

        }

    };

})();