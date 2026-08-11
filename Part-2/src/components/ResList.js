import React from 'react'

const ResList = {
  cards: [
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.Navigation",
          "tab": [
            {
              "id": "RESTAURANT",
              "title": "Restaurants",
              "selected": true,
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"query\":\"food\"}",
                "objectValue": "RESTAURANT",
                "clickObjectName": "click-tab"
              },
              "selectedBgColor": "#1B1E24",
              "unselectedBgColor": "#FFFFFF",
              "selectedTextColor": "#BFFFFFFF",
              "unselectedTextColor": "#9902060C",
              "selectedBorderColor": "#1B1E24",
              "unselectedBorderColor": "#E2E2E7"
            },
            {
              "id": "DISH",
              "title": "Dishes",
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"query\":\"food\"}",
                "objectValue": "DISH",
                "clickObjectName": "click-tab"
              },
              "selectedBgColor": "#1B1E24",
              "unselectedBgColor": "#FFFFFF",
              "selectedTextColor": "#BFFFFFFF",
              "unselectedTextColor": "#9902060C",
              "selectedBorderColor": "#1B1E24",
              "unselectedBorderColor": "#E2E2E7"
            }
          ],
          "meta": {
            "orderable": "true",
            "correctedQuery": "",
            "suggestionType": "",
            "queryIntent": "RESTAURANT"
          }
        }
      }
    },
    {
      "groupedCard": {
        "cardGroupMap": {
          "RESTAURANT": {
            "cards": [
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "207531",
                      "name": "Wadhwa Bhojnalaya",
                      "city": "86",
                      "slugs": {
                        "restaurant": "wadhwa-bhojnalaya-sector-13-sector-13",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "f0kyb4tre7dnmxrcquz7",
                      "address": "Maharana Pratap Chowk, Karnal, Haryana 132001, India",
                      "locality": "Sector 13",
                      "areaName": "Sector 14",
                      "costForTwo": "30000",
                      "costForTwoMessage": "₹300 FOR TWO",
                      "cuisines": [
                        "North Indian",
                        "Snacks",
                        "Sweets"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "224794",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.0K+",
                      "promoted": true,
                      "adTrackingId": "cid=518f0957-0ed7-4f90-92e3-80539b142d53~p=0~adgrpid=518f0957-0ed7-4f90-92e3-80539b142d53#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=207531~plpr=SEARCH#RESTAURANT~st=food~eid=57f818f0-5e33-4892-ba7b-acbe9c21dfaf~srvts=1786367845172",
                      "sla": {
                        "deliveryTime": 29,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹90",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "campaignId": "518f0957-0ed7-4f90-92e3-80539b142d53",
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\",\"adTrackingId\":\"cid=518f0957-0ed7-4f90-92e3-80539b142d53~p=0~adgrpid=518f0957-0ed7-4f90-92e3-80539b142d53#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=207531~plpr=SEARCH#RESTAURANT~st=food~eid=57f818f0-5e33-4892-ba7b-acbe9c21dfaf~srvts=1786367845172\"}",
                      "objectValue": "207531",
                      "impressionObjectName": "impression-restaurant-ad",
                      "clickObjectName": "click-restaurant-ad"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "207531",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "101951",
                      "name": "Star Food Hut",
                      "city": "86",
                      "slugs": {
                        "restaurant": "star-food-hut-chaman-garden-chaman-garden",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "ptx6swawrttqeyrjca4u",
                      "address": "Shop No 19, Mahila Ashram Market, behind SD Model School",
                      "locality": "Dyal Singh Colony\n",
                      "areaName": "19,Hudda Market, Old Bus Stand",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Chinese",
                        "Snacks",
                        "Pizzas",
                        "Pastas",
                        "Tandoor"
                      ],
                      "avgRating": 4,
                      "feeDetails": {},
                      "parentId": "195397",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1.7K+",
                      "sla": {
                        "deliveryTime": 22,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹130",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "101951",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "101951",
                        "query": "food"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "726124",
                      "name": "24 Carat Food Plaza",
                      "city": "86",
                      "slugs": {
                        "restaurant": "24-carat-food-plaza-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "facd245c06b0e445b871487e79600e8b",
                      "address": "Ground Floor and Basement, SCO-221, Sector 12, Part-1, Urban Estate, Karnal, Karnal, Karnal, Haryana-132001",
                      "locality": "Urban Estate",
                      "areaName": "Model Town",
                      "costForTwo": "49900",
                      "costForTwoMessage": "₹499 FOR TWO",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "South Indian",
                        "North Indian",
                        "Snacks",
                        "Fast Food",
                        "Beverages"
                      ],
                      "avgRating": 3.6,
                      "feeDetails": {},
                      "parentId": "431987",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "66",
                      "promoted": true,
                      "adTrackingId": "cid=6f4c5e0a-d315-44be-9bc1-a046350954d6~p=1~adgrpid=6f4c5e0a-d315-44be-9bc1-a046350954d6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=726124~plpr=SEARCH#RESTAURANT~st=food~eid=e7a3c8ce-95fe-4549-8943-a89ce16f8de4~srvts=1786367845172",
                      "sla": {
                        "deliveryTime": 31,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹130",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "campaignId": "6f4c5e0a-d315-44be-9bc1-a046350954d6",
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\",\"adTrackingId\":\"cid=6f4c5e0a-d315-44be-9bc1-a046350954d6~p=1~adgrpid=6f4c5e0a-d315-44be-9bc1-a046350954d6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=726124~plpr=SEARCH#RESTAURANT~st=food~eid=e7a3c8ce-95fe-4549-8943-a89ce16f8de4~srvts=1786367845172\"}",
                      "objectValue": "726124",
                      "impressionObjectName": "impression-restaurant-ad",
                      "clickObjectName": "click-restaurant-ad"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "726124",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1205811",
                      "name": "Kavya Food Bites - Homemade Kitchen",
                      "city": "86",
                      "slugs": {
                        "restaurant": "kavya-food-bites-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/15/1abebeea-d164-4043-951a-d705e2f7b5eb_1205811.jpg",
                      "address": "HOUSE NO-301,VAKILPURA SADAR BAZAR,KARNAL ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001",
                      "locality": "Sadar Bazar",
                      "areaName": "Model Town",
                      "costForTwo": "19900",
                      "costForTwoMessage": "₹199 FOR TWO",
                      "cuisines": [
                        "Continental",
                        "Beverages",
                        "French",
                        "Street Food",
                        "Snacks",
                        "Italian-American",
                        "Home Food",
                        "Fast Food",
                        "Burgers",
                        "Egg"
                      ],
                      "avgRating": 4.4,
                      "feeDetails": {},
                      "parentId": "793685",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "116",
                      "sla": {
                        "deliveryTime": 24,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1205811",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1205811"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "631670",
                      "name": "Nirmal Food Village-Sardarji Wali Purani Dukaan",
                      "city": "86",
                      "slugs": {
                        "restaurant": "nirmal-food-village-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "gqazl5uiczrpb21qsydz",
                      "address": "119,OLD G.T.ROAD, OPP PATEL MARKET, KARNAL, Karnal, Haryana-132001",
                      "locality": "G T Road",
                      "areaName": "Dyal Singh Colony",
                      "costForTwo": "25000",
                      "costForTwoMessage": "₹250 FOR TWO",
                      "cuisines": [
                        "North Indian",
                        "Thalis",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "149238",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "518",
                      "promoted": true,
                      "adTrackingId": "cid=dc67306e-f20d-4120-b1ce-fd068007fd16~p=2~adgrpid=dc67306e-f20d-4120-b1ce-fd068007fd16#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=631670~plpr=SEARCH#RESTAURANT~st=food~eid=d0ef581d-c980-4078-a77f-0be39f434540~srvts=1786367845172",
                      "sla": {
                        "deliveryTime": 22,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹75 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "campaignId": "dc67306e-f20d-4120-b1ce-fd068007fd16",
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\",\"adTrackingId\":\"cid=dc67306e-f20d-4120-b1ce-fd068007fd16~p=2~adgrpid=dc67306e-f20d-4120-b1ce-fd068007fd16#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=631670~plpr=SEARCH#RESTAURANT~st=food~eid=d0ef581d-c980-4078-a77f-0be39f434540~srvts=1786367845172\"}",
                      "objectValue": "631670",
                      "impressionObjectName": "impression-restaurant-ad",
                      "clickObjectName": "click-restaurant-ad"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "631670",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "552573",
                      "name": "Face Food",
                      "city": "86",
                      "slugs": {
                        "restaurant": "facefood-sector-13-sector-13",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "rhvd8kpvio6uchrkjpbu",
                      "address": "Sco 630 Old Housing Board Sector 13,  Karnal (Rural)(Part)(1), Karnal, Karnal,  Haryana - 132001",
                      "locality": "Old housing board Colony",
                      "areaName": "Sector 13",
                      "costForTwo": "25000",
                      "costForTwoMessage": "₹250 FOR TWO",
                      "cuisines": [
                        "Italian-American",
                        "Fast Food",
                        "American",
                        "Mexican",
                        "Chinese",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "78123",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "643",
                      "sla": {
                        "deliveryTime": 33,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹130",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "552573",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "qrEnabled": "false",
                        "restaurant_id": "552573",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "515518",
                      "name": "UBQ-Meals,Thalis & Bowls",
                      "city": "86",
                      "slugs": {
                        "restaurant": "ubq-by-barbeque-nation-grand-trunk-road-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/af5acd5c-bb0b-4e29-a8c3-dba65b275f55_515518.JPG",
                      "address": "BARBEQUE NATION HOSPITALITY LTD. 1ST FLOOR ,SAVOY GREENS, GRAND TRUNK ROAD, KARNAL-132001, HARYANA",
                      "locality": "Grand Trunk Road",
                      "areaName": "Alpha International City",
                      "costForTwo": "30000",
                      "costForTwoMessage": "₹300 FOR TWO",
                      "cuisines": [
                        "North Indian",
                        "Kebabs",
                        "Barbecue",
                        "Biryani",
                        "Street Food",
                        "Snacks"
                      ],
                      "avgRating": 4.2,
                      "feeDetails": {},
                      "parentId": "617376",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "773",
                      "promoted": true,
                      "adTrackingId": "cid=efaf1080-42af-4396-a1f4-88125567c6ca~p=3~adgrpid=efaf1080-42af-4396-a1f4-88125567c6ca#ag70~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=515518~plpr=SEARCH#RESTAURANT~st=food~eid=7e4c6cb1-9d6e-4db3-9557-39bc5371d4f5~srvts=1786367845172",
                      "sla": {
                        "deliveryTime": 29,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 6.6,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "6.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "campaignId": "efaf1080-42af-4396-a1f4-88125567c6ca",
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\",\"adTrackingId\":\"cid=efaf1080-42af-4396-a1f4-88125567c6ca~p=3~adgrpid=efaf1080-42af-4396-a1f4-88125567c6ca#ag70~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=515518~plpr=SEARCH#RESTAURANT~st=food~eid=7e4c6cb1-9d6e-4db3-9557-39bc5371d4f5~srvts=1786367845172\"}",
                      "objectValue": "515518",
                      "impressionObjectName": "impression-restaurant-ad",
                      "clickObjectName": "click-restaurant-ad"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "515518",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1382759",
                      "name": "Kisaan Food Junction By Spicy Delights",
                      "city": "86",
                      "slugs": {
                        "restaurant": "kisaan-food-junction-by-spicy-delights-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/15/c5b57c7a-2f37-4d0d-887e-9f0567f7d3dc_1382759.jpg",
                      "address": "BUILDING NO. 357, KUNJPURA ROAD, NEAR SANATAN DHARAM MANDIR ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Chinese",
                        "Tandoor",
                        "North Indian",
                        "Indian",
                        "Asian"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "787959",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "7",
                      "sla": {
                        "deliveryTime": 21,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1382759",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "1382759",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "515517",
                      "name": "Barbeque Nation",
                      "city": "86",
                      "slugs": {
                        "restaurant": "barbeque-nation-grand-trunk-road-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "wj1ypduvuhyzi0wy9pft",
                      "address": "BARBEQUE NATION HOSPITALITY LTD. 1ST FLOOR ,SAVOY GREENS, GRAND TRUNK ROAD, KARNAL-132001, HARYANA",
                      "locality": "Grand Trunk Road",
                      "areaName": "Alpha International City",
                      "costForTwo": "60000",
                      "costForTwoMessage": "₹600 FOR TWO",
                      "cuisines": [
                        "North Indian",
                        "Barbecue",
                        "Kebabs",
                        "Biryani",
                        "Street Food",
                        "Snacks"
                      ],
                      "avgRating": 4,
                      "feeDetails": {},
                      "parentId": "2438",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "490",
                      "promoted": true,
                      "adTrackingId": "cid=46c6a715-e523-41b2-8963-5a09cc7d868f~p=4~adgrpid=46c6a715-e523-41b2-8963-5a09cc7d868f#ag71~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=515517~plpr=SEARCH#RESTAURANT~st=food~eid=881abdee-2322-47d7-8645-6c1c6ef39852~srvts=1786367845172",
                      "sla": {
                        "deliveryTime": 37,
                        "minDeliveryTime": 35,
                        "maxDeliveryTime": 40,
                        "lastMileTravel": 7.2,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "35-40 MINS",
                        "lastMileTravelString": "7.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹130",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "campaignId": "46c6a715-e523-41b2-8963-5a09cc7d868f",
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\",\"adTrackingId\":\"cid=46c6a715-e523-41b2-8963-5a09cc7d868f~p=4~adgrpid=46c6a715-e523-41b2-8963-5a09cc7d868f#ag71~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=515517~plpr=SEARCH#RESTAURANT~st=food~eid=881abdee-2322-47d7-8645-6c1c6ef39852~srvts=1786367845172\"}",
                      "objectValue": "515517",
                      "impressionObjectName": "impression-restaurant-ad",
                      "clickObjectName": "click-restaurant-ad"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "515517",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "328052",
                      "name": "Haveli Fast Food",
                      "city": "86",
                      "slugs": {
                        "restaurant": "rahul-vadan-sector-13-sector-13",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "lhyn2xmocm8qvq0zk9ml",
                      "address": "Haveli Fast Food Shop No.3, Namaste Chowk, Karnal, Karnal (Haryana), - 132001",
                      "locality": "Sector 13",
                      "areaName": "Sector 14",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Tandoor",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "94512",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "415",
                      "sla": {
                        "deliveryTime": 20,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹135",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "328052",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "328052"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "308403",
                      "name": "Barista Coffee",
                      "city": "86",
                      "slugs": {
                        "restaurant": "barista-neelkanth-resort-sector-13",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/e08ac31a-3720-49de-85ef-2cc9f84b3337_308403.JPG",
                      "address": "Barista Coffee Company Ltd. GT Road NH-1, NR Radha Swami Satsang Ghar Opp. SKODA Auto Showroom Neelkanth Resort, Karnal Haryana, 132001",
                      "locality": "NR Radha Swami Satsang Ghar",
                      "areaName": "Ansal Town",
                      "costForTwo": "35000",
                      "costForTwoMessage": "₹350 FOR TWO",
                      "cuisines": [
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.6,
                      "feeDetails": {},
                      "parentId": "416281",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "142",
                      "promoted": true,
                      "adTrackingId": "cid=494876a4-d98b-4ba9-846b-29351f76e785~p=5~adgrpid=494876a4-d98b-4ba9-846b-29351f76e785#ag18~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=308403~plpr=SEARCH#RESTAURANT~st=food~eid=11d06a6a-6ff5-4b99-8845-e50c4e77efc7~srvts=1786367845172",
                      "sla": {
                        "deliveryTime": 34,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 11.3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "11.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "campaignId": "494876a4-d98b-4ba9-846b-29351f76e785",
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\",\"adTrackingId\":\"cid=494876a4-d98b-4ba9-846b-29351f76e785~p=5~adgrpid=494876a4-d98b-4ba9-846b-29351f76e785#ag18~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=308403~plpr=SEARCH#RESTAURANT~st=food~eid=11d06a6a-6ff5-4b99-8845-e50c4e77efc7~srvts=1786367845172\"}",
                      "objectValue": "308403",
                      "impressionObjectName": "impression-restaurant-ad",
                      "clickObjectName": "click-restaurant-ad"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "308403",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "812377",
                      "name": "Mall of Food",
                      "city": "86",
                      "slugs": {
                        "restaurant": "mall-of-food-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "27a03c452c983d1b90f36faa2cbc0b0a",
                      "address": "Shop No. 961/16, Sham Nagar, Opposite Somi Automobile, Karnal,Karnal,Karnal (Rural)(Part)(1),Haryana,132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "30000",
                      "costForTwoMessage": "₹300 FOR TWO",
                      "cuisines": [
                        "North Indian",
                        "Indian",
                        "Chinese",
                        "Fast Food"
                      ],
                      "avgRating": 3.8,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "294263",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "136",
                      "sla": {
                        "deliveryTime": 26,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "812377",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "812377",
                        "query": "food"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "304568",
                      "name": "Food Garage",
                      "city": "86",
                      "slugs": {
                        "restaurant": "food-garage,-model-town-chaman-garden-chaman-garden",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "a6lxpezy8rvh74cr8uma",
                      "address": "Hospital Chowk Above Car Expert, Near Shailfali Restaurant, KARNAL, HARYANA ,132001",
                      "locality": "Sector 13",
                      "areaName": "Model Town",
                      "costForTwo": "25000",
                      "costForTwoMessage": "₹250 FOR TWO",
                      "cuisines": [
                        "Thalis",
                        "Pastas",
                        "Chaat",
                        "Chinese"
                      ],
                      "avgRating": 4,
                      "feeDetails": {},
                      "parentId": "81371",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "249",
                      "sla": {
                        "deliveryTime": 32,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹175 OFF",
                        "subHeader": "ABOVE ₹449",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "304568",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "304568",
                        "query": "food"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "745970",
                      "name": "Rameshwaram Food Plaza",
                      "city": "86",
                      "slugs": {
                        "restaurant": "rameshwaram-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "a1500e4f910f14bd993cb9e7783f8b6f",
                      "address": "SCO NO. 19, BADI MARKET, MODEL TOWN, KARNAL, HARYANA-132001, Karnal (Rural) (Part)(1), Karnal, Karnal, Haryana - 132001",
                      "locality": "Badi Market",
                      "areaName": "Model Town",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "South Indian",
                        "Tandoor",
                        "Street Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "277499",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "299",
                      "sla": {
                        "deliveryTime": 22,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "745970",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "745970",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "696915",
                      "name": "Aradhya Foods",
                      "city": "86",
                      "slugs": {
                        "restaurant": "aradhya-foods-model-town-model-town-3",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "3c9578258c24b6ecc2227e52e098bdb5",
                      "address": "348/18, Char Chaman, Karnal, Haryana, 132001",
                      "locality": "Char Chaman",
                      "areaName": "Model Town",
                      "costForTwo": "19800",
                      "costForTwoMessage": "₹198 FOR TWO",
                      "cuisines": [
                        "Snacks",
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 3.6,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "241184",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "157",
                      "sla": {
                        "deliveryTime": 22,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹130",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "696915",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "qrEnabled": "false",
                        "restaurant_id": "696915",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1274272",
                      "name": "Jony Restaurant",
                      "city": "86",
                      "slugs": {
                        "restaurant": "jony-restaurant-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/28/cc6e95cd-91b6-4262-8262-b97a56df7c01_1274272.jpg",
                      "address": "Outside Jundla Gate, ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001\t",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Chaat",
                        "Snacks",
                        "North Indian"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "695507",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "43",
                      "sla": {
                        "deliveryTime": 26,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹145",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1274272",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "1274272",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1063312",
                      "name": "Indian Star Dhaba",
                      "city": "86",
                      "slugs": {
                        "restaurant": "indian-star-dhaba-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/4/a5aa995c-5bd4-4a39-9abb-80c3035fd7e8_1063312.jpg",
                      "address": "Nh 44 GT Road near indian oil petrol pump Opposite chetak cookware ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001\t",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "30000",
                      "costForTwoMessage": "₹300 FOR TWO",
                      "cuisines": [
                        "North Indian",
                        "Tandoori",
                        "Chinese",
                        "Thali",
                        "Punjabi",
                        "Indian",
                        "paratha"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {},
                      "parentId": "617278",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 36,
                        "minDeliveryTime": 35,
                        "maxDeliveryTime": 40,
                        "lastMileTravel": 8.1,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "35-40 MINS",
                        "lastMileTravelString": "8.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹130",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1063312",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1063312",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "512826",
                      "name": "Brown's Bakery",
                      "city": "86",
                      "slugs": {
                        "restaurant": "ambrosia-food-works-model-town-model-town-2",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "zu8endgqlookyunsekx5",
                      "address": "Besides Madhav store, Badi market, opposite GTBPS school, Model Town, Karnal, Haryana 132001",
                      "locality": "Saini Colony \n",
                      "areaName": "Model Town",
                      "costForTwo": "40000",
                      "costForTwoMessage": "₹400 FOR TWO",
                      "cuisines": [
                        "Bakery"
                      ],
                      "avgRating": 4.4,
                      "feeDetails": {},
                      "parentId": "50517",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "470",
                      "sla": {
                        "deliveryTime": 28,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "512826",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "512826",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "866924",
                      "name": "Burgrill - OG's of Grilled Burger",
                      "city": "86",
                      "slugs": {
                        "restaurant": "burgrill-the-win-win-burger-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/cbc431f5-324f-4f51-9d78-e618e65b5f82_866924.jpg",
                      "address": "Shop No : Shop No 1 , Floor : 0 , Neelkanth Star , ",
                      "locality": "Radha Swami Satsang Marg",
                      "areaName": "Model Town",
                      "costForTwo": "40000",
                      "costForTwoMessage": "₹400 FOR TWO",
                      "cuisines": [
                        "Burgers",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.3,
                      "feeDetails": {},
                      "parentId": "657412",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "74",
                      "sla": {
                        "deliveryTime": 41,
                        "minDeliveryTime": 40,
                        "maxDeliveryTime": 45,
                        "lastMileTravel": 11.3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "40-45 MINS",
                        "lastMileTravelString": "11.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "30"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "866924",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "866924",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "721030",
                      "name": "Starbucks Coffee",
                      "city": "86",
                      "slugs": {
                        "restaurant": "starbucks-coffee-nh-44-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/4/63f7789c-9239-412c-b0a8-c875d3fb3780_721030.JPG",
                      "address": "Plot No. 133.5, Karnal Haveli, Milestone, Nh 44, Dadupur, Karnal, Chandigarh",
                      "locality": "Dadupur",
                      "areaName": "Dadupur",
                      "costForTwo": "40000",
                      "costForTwoMessage": "₹400 FOR TWO",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                      ],
                      "avgRating": 4.4,
                      "feeDetails": {},
                      "parentId": "195515",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "41",
                      "sla": {
                        "deliveryTime": 39,
                        "minDeliveryTime": 35,
                        "maxDeliveryTime": 40,
                        "lastMileTravel": 8.7,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "35-40 MINS",
                        "lastMileTravelString": "8.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                            "description": "Top-rated vegetarian cafes, based on user votes."
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹169",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.6",
                          "ratingCount": "338"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "721030",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "721030",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1389290",
                      "name": "Zorko - Brand of Food Lovers",
                      "city": "86",
                      "slugs": {
                        "restaurant": "zokro-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/9/27486402-3b62-49c8-b562-6297200a2261_1389290.jpg",
                      "address": "Zorko Brand of Food Lovers",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "40000",
                      "costForTwoMessage": "₹400 FOR TWO",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "Italian"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "494853",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "8",
                      "sla": {
                        "deliveryTime": 28,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1389290",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1389290"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "817063",
                      "name": "Shivalay Foods",
                      "city": "86",
                      "slugs": {
                        "restaurant": "shivalay-foods-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/1/0926e299-3b7c-42f2-80e7-cb74727a1897_817063.jpg",
                      "address": "SHOP NO. 34 MAHILLA COMPLEX BEHIND  OLD BUS STAND, Karnal (Rural)(Part)(1),  Karnal, Karnal, Haryana - 132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Maharashtrian",
                        "Desserts"
                      ],
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "486959",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 21,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "817063",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "817063"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "508945",
                      "name": "Mickies Food Studio",
                      "city": "86",
                      "slugs": {
                        "restaurant": "relish-hospitality-services-sector-13-sector-13",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "casvcrtohfkvx70cixgp",
                      "address": "Relish Hospitality Services, 101, Mile Stone, National Highway VPO. Kondh, Teh Gharaunda, Distt. Karnal-132001 HR, Ghauraunda Karnal-132114",
                      "locality": "Sector-13",
                      "areaName": "Sector-13",
                      "costForTwo": "30000",
                      "costForTwoMessage": "₹300 FOR TWO",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "Thalis",
                        "Desserts"
                      ],
                      "avgRating": 3.4,
                      "feeDetails": {},
                      "parentId": "454943",
                      "avgRatingString": "3.4",
                      "totalRatingsString": "197",
                      "sla": {
                        "deliveryTime": 35,
                        "minDeliveryTime": 35,
                        "maxDeliveryTime": 40,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "35-40 MINS",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹649",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "508945",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "508945",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "508437",
                      "name": "Vintage Culture",
                      "city": "86",
                      "slugs": {
                        "restaurant": "jbd-banquets-and-hotels-pvt-ltd-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "0c546f1f88afa4fdb59e7c6b42372bdb",
                      "address": "6 km Stone, Opp Indian Oil Petrol Pump, Kaithal Road, Raj Gharana, Karnal",
                      "locality": "Kaithal Road",
                      "areaName": "Ramesh Nagar",
                      "costForTwo": "50000",
                      "costForTwoMessage": "₹500 FOR TWO",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Continental",
                        "Snacks",
                        "Pastas",
                        "Pizzas",
                        "South Indian"
                      ],
                      "avgRating": 3.8,
                      "feeDetails": {},
                      "parentId": "488197",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "56",
                      "sla": {
                        "deliveryTime": 37,
                        "minDeliveryTime": 35,
                        "maxDeliveryTime": 40,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "35-40 MINS",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "508437",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "508437",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1317070",
                      "name": "Satnam Foods",
                      "city": "86",
                      "slugs": {
                        "restaurant": "satnam-foods-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "rest_image/679eaad6-e6e0-11eb-b791-02067593c6baSaturday_17_July_2021__14_51id396489.jpg",
                      "address": "Flat No. 500, 2nd Floor, Housing Board Colony, Sector- 4, Karnal, Haryana- 132001 ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Thalis",
                        "Healthy Food",
                        "North Indian",
                        "Indian",
                        "Snacks",
                        "Street Food"
                      ],
                      "avgRating": 3.8,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "254588",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "7",
                      "sla": {
                        "deliveryTime": 31,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1317070",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "qrEnabled": "false",
                        "restaurant_id": "1317070",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "471037",
                      "name": "Chaat Master",
                      "city": "86",
                      "slugs": {
                        "restaurant": "super-a-one-snacks-llp-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "inorxmjjrd9m95sxrhsf",
                      "address": "SHOP NO. 43, NEHRU PALACE, KUNJPURA  ROAD, Karnal, Karnal, Haryana-132001",
                      "locality": "Nehru Palace",
                      "areaName": "Dyal Singh Colony",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Chaat",
                        "Snacks"
                      ],
                      "avgRating": 3.8,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "56668",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "294",
                      "sla": {
                        "deliveryTime": 16,
                        "minDeliveryTime": 15,
                        "maxDeliveryTime": 20,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "15-20 MINS",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "471037",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "471037"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "531181",
                      "name": "Angeethi Foods Karnal",
                      "city": "86",
                      "slugs": {
                        "restaurant": "delhi-shahi-soya-chaap-corner-model-town-model-town-7",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "pghdqciae98wzaktrkdt",
                      "address": "661 658, Old Housing Board Colony, Sector-13, Karnal",
                      "locality": "Sector 13",
                      "areaName": "Model Town",
                      "costForTwo": "25000",
                      "costForTwoMessage": "₹250 FOR TWO",
                      "cuisines": [
                        "Chinese"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "323679",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "230",
                      "sla": {
                        "deliveryTime": 27,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "531181",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "531181",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1295003",
                      "name": "Domian's Food",
                      "city": "86",
                      "slugs": {
                        "restaurant": "domian's-food-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/23/adb6c986-5367-49d1-b3c4-eb9c0bbdde1f_1295003.jpg",
                      "address": "Shop No : house , Floor : Ground , Gali No.1 new Bahadur Chand Colony , Anand Vihar Colony, Karnal, Haryana 132001, India 132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "19800",
                      "costForTwoMessage": "₹198 FOR TWO",
                      "cuisines": [
                        "Mexican",
                        "Grill",
                        "Street Food",
                        "Snacks",
                        "Pastas",
                        "Fast Food",
                        "Burgers",
                        "Rolls & Wraps"
                      ],
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "737336",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 26,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1295003",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1295003",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1084797",
                      "name": "Karan Fast Food",
                      "city": "86",
                      "slugs": {
                        "restaurant": "karan-fast-food-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/23/195fce0d-8613-4241-acf3-71b767e430d2_1084797.jpg",
                      "address": "Shop no.1sector14 ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001\t",
                      "locality": "sector14",
                      "areaName": "Sector 14",
                      "costForTwo": "10900",
                      "costForTwoMessage": "₹109 FOR TWO",
                      "cuisines": [
                        "Chinese",
                        "Street Food",
                        "Snacks",
                        "Pastas",
                        "Home Food",
                        "Healthy Food",
                        "Fast Food",
                        "Burgers",
                        "Cafe"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "630772",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "12",
                      "sla": {
                        "deliveryTime": 27,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_5",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1084797",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1084797",
                        "query": "food"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1300954",
                      "name": "Golden Food Hut",
                      "city": "86",
                      "slugs": {
                        "restaurant": "golden-food-hut-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/29/9eb87619-ed3e-4c19-aed5-8a567f7f73e4_1300954.jpg",
                      "address": "183 C/O GOLDEN GYM,NEAR LIBAS SHOWROOM,COMMITTEE CHOWK ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "North Indian"
                      ],
                      "feeDetails": {},
                      "parentId": "740688",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 24,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 1.1,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "1.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1300954",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "1300954",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "203013",
                      "name": "Saurabh Bakers And Street food ",
                      "city": "86",
                      "slugs": {
                        "restaurant": "saurabh-bakers-and-street-food-chaman-garden-chaman-garden",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "oej8tw064d2xjurixpxu",
                      "address": "29/7, Ram Nagar, Karnal, Haryana 132001, India",
                      "locality": "Ram Nagar",
                      "areaName": "Ramesh Nagar",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Bakery",
                        "Snacks",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "179042",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "166",
                      "sla": {
                        "deliveryTime": 27,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "203013",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "203013",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1412165",
                      "name": "Chef Food Circle",
                      "city": "86",
                      "slugs": {
                        "restaurant": "chef-food-circle-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/22/d33e930b-498f-43ba-8579-d91e0745132c_1412165.jpg",
                      "address": "KRISHNA NAGAR ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Italian",
                        "Pizzas",
                        "Pastas",
                        "Indian"
                      ],
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "804727",
                      "avgRatingString": "NEW",
                      "sla": {
                        "deliveryTime": 23,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1412165",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1412165",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "133595",
                      "name": "The Food Berry Cafe",
                      "city": "86",
                      "slugs": {
                        "restaurant": "the-food-berry-cafe-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "anuusz6bydo8jise4vpd",
                      "address": "LIC COLONY, KUNJPURA ROAD, OPP HP PETROL PUMP, NEAR ADARSH PUBLIC SCHOOL, Karnal, Karnal, Haryana-132001",
                      "locality": "LIC COLONY",
                      "areaName": "Sector 9 Kunjpura Road",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Chinese",
                        "Beverages"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {},
                      "parentId": "208331",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "436",
                      "sla": {
                        "deliveryTime": 33,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "ABOVE ₹149",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "133595",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "133595"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1230035",
                      "name": "The Urban Food",
                      "city": "86",
                      "slugs": {
                        "restaurant": "the-urban-food-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/13/123afc80-1ccd-4831-bd65-36ac142bf6a9_1230035.jpg",
                      "address": "Shop No : Shop no. 46 , Floor : Ground , The urban food , Ram Nagar, Karnal, Haryana 132001, India 132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "10000",
                      "costForTwoMessage": "₹100 FOR TWO",
                      "cuisines": [
                        "Desserts",
                        "Salads",
                        "Pizzas",
                        "Pastas",
                        "Fast Food",
                        "Burgers",
                        "Cafe",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 3.6,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "258089",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "7",
                      "sla": {
                        "deliveryTime": 37,
                        "minDeliveryTime": 35,
                        "maxDeliveryTime": 40,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "35-40 MINS",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1230035",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1230035",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1266148",
                      "name": "Foodie Kavya",
                      "city": "86",
                      "slugs": {
                        "restaurant": "foodie-kavya-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/18/258429ae-b102-446d-a831-186471d538c7_1266148.jpg",
                      "address": "HOUSE NO-301,VAKILPURA SADAR BAZAR,KARNAL ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001",
                      "locality": "Sadar Bazar ",
                      "areaName": "Model Town",
                      "costForTwo": "19900",
                      "costForTwoMessage": "₹199 FOR TWO",
                      "cuisines": [
                        "Burgers"
                      ],
                      "feeDetails": {},
                      "parentId": "721427",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 23,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 25,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "20-25 MINS",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1266148",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "qrEnabled": "false",
                        "restaurant_id": "1266148",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1183723",
                      "name": "Pizza By Foodie Bite",
                      "city": "86",
                      "slugs": {
                        "restaurant": "pizza-by-foodie-bite-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/6/647b38a7-4dc2-460b-824f-b232cf9bc9cc_1183723.jpg",
                      "address": "Shop No : 02, Gali No-06 , Floor :  , Shiv Colony, Karnal , ",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "19900",
                      "costForTwoMessage": "₹199 FOR TWO",
                      "cuisines": [
                        "Cafe"
                      ],
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "678771",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 29,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1183723",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "restaurant_id": "1183723",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "696175",
                      "name": "Aggarwal Foods",
                      "city": "86",
                      "slugs": {
                        "restaurant": "aggarwal-foods-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "08084c5e7590cce9bc00e13ad9fa5a3d",
                      "address": "Shop No. 3, Near Palm Residency, Sec 36,  Karnal, Karnal (Rural)(Part)(1), Karnal,  Karnal, Haryana - 132001",
                      "locality": "Sec 36",
                      "areaName": "Model Town",
                      "costForTwo": "19900",
                      "costForTwoMessage": "₹199 FOR TWO",
                      "cuisines": [
                        "Pizzas",
                        "Fast Food",
                        "Beverages"
                      ],
                      "avgRating": 3.1,
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "416508",
                      "avgRatingString": "3.1",
                      "totalRatingsString": "10",
                      "sla": {
                        "deliveryTime": 32,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹175 OFF",
                        "subHeader": "ABOVE ₹699",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "696175",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "696175"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1283886",
                      "name": "Girdhar Foods",
                      "city": "86",
                      "slugs": {
                        "restaurant": "girdhar-foods-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/7c2ce7f9-f21d-4f89-bbcb-af8e9476cff4_1283886.jpg",
                      "address": "SCO 33, Sector 14, Main Market ,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "20000",
                      "costForTwoMessage": "₹200 FOR TWO",
                      "cuisines": [
                        "Chinese",
                        "Pizzas",
                        "North Indian"
                      ],
                      "veg": true,
                      "feeDetails": {},
                      "parentId": "731294",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 27,
                        "minDeliveryTime": 25,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "25-30 MINS",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {},
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1283886",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1283886"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1062689",
                      "name": "GR Foods",
                      "city": "86",
                      "slugs": {
                        "restaurant": "gr-foods-model-town-model-town",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/12/b125ac26-7e7c-4d31-81e8-f470e822aa1d_1062689.jpg",
                      "address": "Shop no 63,64,sec 6,Karnal (Rural)(Part)(1),Karnal,Karnal,Haryana-132001",
                      "locality": "Model Town",
                      "areaName": "Sector 6 ",
                      "costForTwo": "30000",
                      "costForTwoMessage": "₹300 FOR TWO",
                      "cuisines": [
                        "Chinese",
                        "Tandoor",
                        "Healthy Food",
                        "North Indian"
                      ],
                      "avgRating": 3.7,
                      "feeDetails": {},
                      "parentId": "616967",
                      "avgRatingString": "3.7",
                      "totalRatingsString": "31",
                      "sla": {
                        "deliveryTime": 33,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {}
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "Meals with high protein, low calorie and no added sugar"
                          }
                        ]
                      },
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "ratingSlab": "RATING_SLAB_4",
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "1062689",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "1062689"
                      }
                    }
                  }
                }
              },
              {
                "card": {
                  "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "534446",
                      "name": "Shivam Fast Food",
                      "city": "86",
                      "slugs": {
                        "restaurant": "new-punjabi-rasoi-model-town-model-town-4",
                        "city": "karnal"
                      },
                      "cloudinaryImageId": "puugj8ommdewndq9ysea",
                      "address": "Purani Subji Mandi Road, Mughal Canal Turn, Karnal, Haryana",
                      "locality": "Model Town",
                      "areaName": "Model Town",
                      "costForTwo": "25000",
                      "costForTwoMessage": "₹250 FOR TWO",
                      "cuisines": [
                        "North Indian",
                        "Biryani"
                      ],
                      "feeDetails": {},
                      "parentId": "183589",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 30,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 35,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "rainMode": "RAIN_MODE_NONE",
                        "slaString": "30-35 MINS",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "opened": true,
                        "restaurantClosedMeta": {
                          "title": "UNAVAILABLE",
                          "subtitle": "AT THE MOMENT"
                        }
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {},
                      "unorderableMessage": "Currently not taking orders for this location",
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "availabilityServiceabilityMessage": "Currently not accepting orders from your location for this outlet",
                      "orderabilityCommunication": {
                        "title": {
                          "text": "CURRENTLY"
                        },
                        "subTitle": {
                          "text": "UNAVAILABLE"
                        },
                        "message": {
                          "text": "Delivery partners in this area are busy",
                          "textColour": "primary"
                        },
                        "customIcon": {
                          "bgGradientColorStart": "#EB8322",
                          "bgGradientColorEnd": "#EE5803"
                        },
                        "commsStyling": {}
                      },
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {},
                        "presentation": {}
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "featuredSectionInfo": {
                        "sectionTitle": "More"
                      },
                      "showEoOffer": true,
                      "priceComparisonComms": {}
                    },
                    "analytics": {
                      "screenName": "explore",
                      "context": "{\"tid\":\"47a3179c-c7dc-5bb1-9879-b1621f370962\",\"grid\":\"3d6aea7d-44ea-40a6-9920-4e38488e07b3\",\"queryUniqueId\":\"574dd5b0-d440-ae15-613c-b091710c903f\",\"query\":\"food\"}",
                      "objectValue": "534446",
                      "impressionObjectName": "impression-restaurant",
                      "clickObjectName": "click-restaurant"
                    },
                    "ctaWithParams": {
                      "link": "swiggy://menu",
                      "type": "DEEPLINK",
                      "params": {
                        "source": "SEARCH",
                        "isSld": "false",
                        "sourceRequestId": "00000000000000000000000000000000",
                        "qrEnabled": "false",
                        "restaurant_id": "534446",
                        "query": "food",
                        "sourceSessionId": "sz6b4faf5c9-e798-495e-80db-52e7f42bd"
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
};

export default ResList;
