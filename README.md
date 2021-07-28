![LogoGoWaterReality](https://user-images.githubusercontent.com/66887439/127163915-ae6a34ad-a66e-48ba-9262-10626797bff1.png)
-----------------
## What's the the problem ?  

Many developing countries, mainly Sub-Saharan Africa, South Asia, and Latin America, are facing significant development challenges, which will likely increase their vulnerability to climate change risks, making climate-resilient development a critical imperative for these countries. Adapting to climate change is, therefore, not only about the long run, but also about making changes that ensure sustainable development right now. These countries tend to face rapid population growth and urbanization. The situation will be compounded by climate change effects, such as droughts, which are reducing the levels of the great lakes that are one of the main resources of the water supply networks in developing countries. Water supply is the first sector affected by shortages, resulting in reduced capacity to ensure water drinking for all, as well as the lack of access to clean water.

* __The first big issue__ that most developing countries face is a __lack of baseline data__ upon which to build, in order to cope with climate change impacts. In fact, in most developing countries, information and data on existing networks (that, obviously, have changed over the years: pipe replacement, new connections, extensions, etc.) are either completely missing or fragmented (scattered into non-coherent and missing papers...). This makes the __diagnostic phase__, which is required in every water and sanitation project, an oppressively burdensome, onerous, and even impossible mission, particularly in the world's poorest countries, where there is no chance of having even a rudimentary tool to keep and update data on networks in a consistent manner.  
 I have long worked on water and sanitation projects in sub-Saharan Africa and Tunisia. I can confirm that the diagnostic phase of these projects,in most developing countries (not just the poorest), always takes much longer than anticipated in the specification documents and the reference terms. This greatly slows down these projects, which can not wait, especially in the context of climate change. Unfortunately, it is very likely to end up with endless or unsuccessful projects. Furthermore, a focus on adaptation to climate change puts greater emphasis on the need to address this issue from the outset of new programs or projects and not as an afterthought.


* __The second big issue__: In Sub-Saharan Africa, South Asia an Latin America, access to water supply and sanitation networks is already low, and right management of water resources and networks is required __to avert a decline in progress.__ In North Africa, already dry regions with high coverage and service levels, there is an urgent need to better manage water resources and networks to avoid further water scarcity, especially in the context of the climate change. __This really implies technology shifts.__
To substantiate this, according to the World Bank, in developing countries, about 45 million cubic meters are lost daily through water leakage in the distribution networks, enough to serve nearly 200 million people. And concern about adapting to climate change creates strong pressure to better manage water resources and networks in order to avoid these excessive leakages.

__The 2030 Agenda for Sustainable Development__, adopted by all United Nations Member States in 2015, provides the basis for the formulation of the 17 Sustainable Development Goals (SDGs). __SDG6 focuses on clean, accessible water for all.__ The goal aims to address __water scarcity, poor water quality and inadequate sanitation globally.__   

As mentioned above, progress in Africa, South Asia and Latin America is already slow. Progress towards achieving SDG6 is badly off track. Increased loss of functioning infrastructure as a result, on one hand, of __inefficient and endless projects because of missing data__, and on the other hand, of __water and sanitation network mismanagement__ , would be compounded by climate change impacts and would set back progress in water and sanitation and, indirectly, towards other SDG targets.

The importance of taking actions to enhance developing countries’ resilience to climate change at local and international level can’t be stressed enough. The IPCC (Intergovernmental Panel on Climate Change), defines the resilience as: "The ability of a system and its components to anticipate, absorb, accommodate or recover from the effects of hazardous event in __timely and efficient manner__. This includes ensuring the preservation, restoration or __improvement of the system’s essential basic structures and functions".__


## How to tackle these big issues: ideas?
### First big issue
Developing countries face, so far, the tragedy of "water development path dependency due to __missing data.__" That is, if the current status quo of missing data on water and sanitation networks continues in the future without major changes in direction, significant challenges will be ahead. In other words, the missing data of the past will strain planners and policy-makers to evolve and remold the water and sanitation systems __to meet new expectations,__ like increasing demand and __resilience to climate change.__ Missing data could undo developing countries’ gains from the past decades (mainly the poorest countries), making the future development of the water sector even __more challenging and costly.__ We also need to be aware of the possibility of surprises and the tipping point exacerbated by climate change effects and we know that these latter are most pronounced for the world’s poorest, who are the most vulnerable.  
=> Thus, there is a need for urgent and scaled-up action to provide developing countries, mainly the poorest, with a __simple and free tool(via technology)__ to keep updated baseline data about water supply and sanitation networks over the years.  

### Second big issue  
Reducing water use and better water network management will be critical in managing increased piped water supply and water use sanitation, especially where rainfall declines.  
=> Resilience (as an improvement of the system’s essential basic structures and functions), needs to be integrated into drinking-water and sanitation network management to cope with present climate variability. It will be critical in controlling the adverse impacts of future variability. This will be possible via __technology that reforms water and sanitation networks' management__ from the outset of new programs and projects (and not simply as an afterthought).

## How can GoWaterReality help?
GoWaterReality is an application, that tackles the two big issues mentioned above, at the same time. 
* Concerning the first big issue: GoWaterReality consistently __updates the baseline data about water and sewer networks over time, on the cloud__. Therefore, it will be continuously "fully updated" and will become __"climate-proof"__, because we can build upon this baseline data to rapidly undertake new projects to meet the multidimensional challenges of climate change at any time, by avoiding time-consuming, very expensive, and endless projects. GoWaterReality will be the backbone of all future successful projects. It will strengthen developing countries’ capacity to plan, design, and operate climate-resilient and long-lived projects for their own water infrastructure. Furthermore, GoWaterReality will prepare the ground for __Artificial Intelligence projects__, such as __smart warning systems on networks__, which could never see the light of day without this database updated over time on the cloud.  

* Concerning the second big issue, GoWaterReality makes effective and efficient changes to __the management of water and sanitation networks__ in developing countries. In fact, GoWaterReality has developed a functionality to __report issues__ about all the components of a water or sanitation network (tanks, pipes, system valves, service meters, fire hydrants, pumps, water quality, etc), __in real time__, and directly update the database about them. Even in a rural area, (far from the utility), a technician from the regional unit could directly report the issue, such as a pipe break (for example), and update the database when reporting the issue. At the same time, the central utility (situated in the capital, for example), can monitor the issue in real time. As a result, the utility could act __quickly__ and make informed decisions __in record time__, to __avoid excessive water loss or water quality alteration__.

## The architecture  
![AppSheetPetit](https://user-images.githubusercontent.com/66887439/127314756-0186aa4c-22b7-4f2e-a714-e8471a4578a8.jpg)

__The steps :__  
1. Creation of the [FileGeodatabase](https://desktop.arcgis.com/en/arcmap/10.3/manage-data/administer-file-gdbs/file-geodatabases.htm) of the water or sanitation network, with [Arcgis Desktop](https://www.esri.com/en-us/arcgis/products/arcgis-for-personal-use/overview), using __ArcMap Geometric Network__. For more details, see: [Geometric Network](https://desktop.arcgis.com/en/arcmap/10.3/manage-data/geometric-networks/what-are-geometric-networks-.htm);
2. Exporting the [Feature Layers](https://doc.arcgis.com/en/arcgis-online/reference/feature-layers.htm) of the FileGeodatabase to [Shapefiles](https://doc.arcgis.com/en/arcgis-online/reference/shapefiles.htm), and publishing them on __Arcgis Server Online (the Cloud)__, as __hosted Feature Layers__. For more details, see: [Data publishing](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/data-publishing/#import-data);
3. The Code of GoWaterReality (JS,HTML,CSS,Node.JS), uses the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/), and the hosted Feature Layers on Arcgis Server Online(created in step 2);
4. The user opens the mobile or web application GoWaterReality. It has to add the username and password. Once logged in, the water network data is loaded (from the cloud: Arcgis Server Online). Then, he can use all the features of the application as well as the customized widgets: Edit any existing water network component or add a new one, report issue about any component (useful for utility technicians), filter, find network components in the database by attribute (ID, Diameter, etc), consult the attributes (data) of any selected component of the water network, etc. For more details, see the [Demo video ](#demo-video)

## How Does it work?
* To run the web and the mobile app of __GoWaterReality__, see the file __Instructions_to_run_the_app__, in the repository.  
* For all intents and purposes, I added, to the repository, the shapefiles created on [ArcGIS Desktop](https://www.esri.com/en-us/arcgis/products/arcgis-for-personal-use/overview) (before publishing them on ArcGIS Server Online, as hosted feature layers). These are the nine (09) zip files in the repository. Together, they form the components of any water network. They are openable with any GIS software. 
* I also added to the repository a file called: __description_feature_layers__. It contains the description of the nine (09) shapefiles (or of the hosted feature layers, after publishing the shapefiles on ArcGIS Server Online). 

__Note:__ 
* In __GoWaterReality__, I only used [Feature Layers](https://doc.arcgis.com/en/arcgis-online/reference/feature-layers.htm) for a piped water network (but it is almost the same thing as a sewer network: the latter is also composed of pipes, valves, fittings, etc). The application is, therefore, valid for sewer networks. 
* The database (data) used for the water network has nothing to do with reality. It is a database which was created as a demo for the call for code Global Challenge, but the __scheme__ (fields of all the Feature layers) is valid for any water network (it is even extensible, with new other fields). 
* The network has been created according the [Geometric Network](https://desktop.arcgis.com/en/arcmap/10.3/manage-data/geometric-networks/what-are-geometric-networks-.htm) rules with ArcMap ([ArcGIS Desktop](https://www.esri.com/en-us/arcgis/products/arcgis-for-personal-use/overview)
).  

## Demo video


## The Roadmap
y compris faire les shapefiles dès le début pour la zone

## Built with
* [ArcGIS Server Online](https://doc.arcgis.com/en/arcgis-online/reference/arcgis-server-services.htm)
* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/)
* [ArcGIS Desktop](https://www.esri.com/en-us/arcgis/products/arcgis-for-personal-use/overview)


## Contributing  
Please read [CONTRIBUTING.md](https://github.com/Call-for-Code/Project-Sample/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to me.

## Author
* [Abir ELTAIEF](https://github.com/Abirate)

