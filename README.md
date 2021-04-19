# Dishwashers webapp
## Main Requirements
Build a webapp that allows customers to see the range of dishwashers.  
Should work on a tablet (seems to be the main focus) such as an iPad (768x1024), in landscape and portrait mode.   
The initial page (product grid) should show the first 20 results returned by the API.  


## GRID Page API
API for the product grid
https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI

ProductListItem 
- productId
- price (use ->now, assumed GBP)

    {
    "was": "",
    "then1": "", 
    "then2": "",
    "now": "239.00", 
    "uom": "", 
    "currency": "GBP"
   },

- title // title used on the product grid page
- image // the url of the image to show on the grid page
 
## Product Page API
For the product page please use the following API using the productId from the Product Grid API
https://api.johnlewis.com/mobile-apps/api/v1/products/{productId}

- title //The title of the product
- media //The image urls returned here should be used on the product page.
- Price -> Now //The now price is the price of the product, and should be assumed this price is in £
- Details -> productInformation //Text to display in the product information 
- displaySpecialOffer // When data is present here, this is shown on the product page under the price
- additionalServices -> includedServices //Guarantee information
- code // Product Code
- Features[0] -> Attributes -> name //Product Specification Name
- Features[0] -> Attributes ->value //Value for the product specification


## Tech
- Next.js to start with React, make use of pre-rendering, for SEO 
- 


