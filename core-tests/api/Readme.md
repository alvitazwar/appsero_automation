# Appsero API Testing using Codeceptjs 
This doc contains the automation scripts for appesero API test using Codeceptjs and puppeteers.
# Basic Configuration
For Basic Setups Please goto this docs for better understanding. https://docs.google.com/document/d/1MruPUAlbPazZ8Ctw16ia1fepdU--OzQ7ax3WNI8cnfs/edit?usp=sharing
# Run Guidelines
In order to run the basic api scripts there are some pre-requisite steps that are needed to configure,

1.`At first if user want to run the api scenarios on the staging or production server then configure the endpoint and write the url by selecting env file.`

2.`If User needs to run basic_api_test.js file then file user needs to edit data by providing his email and password. After running this scenario user will get response and from the response user needs to collect the bearer tocken and add this token into authorization header. Authotization header is mandatory for post request otherwise scenarios will throw "422" error.`

3.`The most used scenario for developer is tracking_scenario_test.js This scenario will generate All kinds of Site activation deactivation data for a specific project. It will helps to determine whether the analytics data is working properly or not. As it is Sending data in a specific project, thats why A project should be already in appsero web applcication, and from that plugin user needs to collect the uuid of the plugin from plugins usage guide. but user can also get the uuid by running basic_api_test.js files Get plugin info scenario. User needs to change the request url after "plugins/" and give the plugin slug to get the plugin info. After user get the "uuid", user need to put the uuid in the payload.js file's  getTrackingInfo(data) function's hash value. If user want to change the loop value as well as send only deactivation or activation data then he/she needs to change the if else according to the developers requirement.`

4.`For running the initialize_test.js Small configuration is needed. This scenario is mainly developed to create a new plugin in the appsero and on that plugin Stats and analytics data will be sent. User Can modify data of activation and deactivation by modifying in the loops. User must check the endpoint url and bearer token before running scenario.`

## Fastspring Scenario Running Changes
1. At first user needs to update the integration page. Fastspring credential will be given in the integration section. After successfully integrated the fastspring with appsero, user will get the webhook url which is unique per user so user needs to update the urls uuid from the env file.
2. Before running the fastspring scenarios please check the scenarios function names and make changes according to the need.
3. For Sending the request to the fastspring user need to configure in url and payload.js file
4. In every scenario different user will have seperate uuid which wont update. So when user will add integration with fastspring in the appsero web app he/she will get a uuid which will be used as request url(developer will help you so no worries.)
5. After getting the url for sending purchase and order data to a specific plugin user needs to change certain values in fastspring_payload.js file. On that file there is functions which contains item section. Item section needs to check properly for getting successfull output. User needs to put "product","display,"path" this values as the product is created in the fastspring product createation. For better result please fill up the "price", "subtotal","pricing","totalInPayoutCurrency","totalInPayoutCurrencyDisplay","subtotalInPayoutCurrencyDisplay" as the product price configured in the fastspring website.

#### Notes: [Same configuration is applicaple for Paddle payload.]

## API Scenario Coverage (Please Update here when you will develop more scenario)
1. Add new Plugin with Sending Analytics data.
2. Getting login info for a user.
3. Getting plugin details all and single from appsero web app.
4. Sending deactivation data for single plugin.
5. Sending analytics data of activation and deactivation for a specific plugin.
   
   #### Fastspring Coverage 
   1. Fastspring single product order scenario
   2. Fastspring single product refund scenario
   3. Fastspring single product order and refund scenario at same time.
   4. Fastspring subscription Single order scenario
   5. Fastspring subscription Single order refund scenario 
   6. Fastspring subscription partial Refund scenario
   7. Fastspring subscription partial variation scenario.

   #### Paddle Coverage
   1. Paddle single product order test
   2. paddle subscription product order test.

   ####  Woocommerce-Coverage

   #### EDD-Coverage