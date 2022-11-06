var config = {
    style: 'mapbox://styles/nicholassavasta/cl938ike6000u14ohu2pvsa62',
    accessToken: 'pk.eyJ1IjoibmljaG9sYXNzYXZhc3RhIiwiYSI6ImNsOGs2Mmd6eTA4cDczb254ZjRmazdvbHMifQ.cJe9qgn0vYrpOgwdZydLig',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: 'Assignment 1: Crime in Ottawa:',
    subtitle: 'A Comparison of Wellbeing with Crime Rates <br> <a href="https://geom4001-group.github.io/"></a> Homepage </a>',
    byline: 'Mahnaz T.D. ; Nick S. ; Elise B.',
    footer: '<a href="https://geom4001-group.github.io/"></a> Homepage </a> <br> Bibliography:<ul><li>Levi, M. (2001). Business, cities and fears about crimes. Urban Studies, 38(5-6), 849-868.</li><li>Sariaslan, A., Långström, N., D’Onofrio, B., Hallqvist, J., Franck, J., & Lichtenstein, P. (2013). The impact of neighbourhood deprivation on adolescent violent criminality and substance misuse: a longitudinal, quasi-experimental study of the total Swedish population. International journal of epidemiology, 42(4), 1057-1066.</li><li><a href="https://ottawa.ca/en/city-hall/open-transparent-and-accountable-government/open-data#section-b3817ea6-5aba-4442-9865-1cc3707cc29a">City of Ottawa Open Data Site</a></li><li><a href="https://ottawa.ctvnews.ca/ottawa-wards-with-the-highest-and-lowest-crime-rates-1.5963846">Ottawa crime rate</a></li> <li><a href="https://ottawa.ctvnews.ca/ottawa-police-reporting-spike-in-bike-thefts-1.5402565"> CTV Ottawa: Police Reports Spike in Bike Thefts </a></li></ul>',
    chapters: [
        {
            id: 'chapter-1',
            title: 'Introduction',
            image: 'img/crime.jpg',
            description: "It is generally believed that urban areas with low income are correlated to high crime rates. Systemic racism and classism enforced this notion as events like 'white flight' have proven detrimental to local economies. This StoryMap looks into a selection of Ottawa's wards, the distribution of 2 different types of crime data - hatecrimes and bike theft - and compare them with the wards' Crime Rates and NEI, to show that despite initial prejudice, there are several other factors at play in crime distribution in Ottawa.",
            location: {
                center: [-76.42317, 45.35986],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'o_ward',
                opacity: 0.5
              },
            ],
            onChapterExit: [
              {
                layer: 'o_ward',
                opacity: 0
              }
            ]
        },
        {
            id: 'chapter-2',
            title: 'Methodology I : Using NEI Data',
            description: 'The NEI takes 5 domains of livelihood into account -	Health,	Economic, Social and human development,	Physical environment,	Community and belonging - to rank neighbourhoods in an area. NEI scores are out of 100, and are represented on the map as green when the values are near 100 (dubbed "Not A Concern"), and as red when the values are near 0 (dubbed "Equity Concern"). This assignment uses the NEI as a basis for comparison as it opens the discussion of crime rates to more than social class.',
            location: {
              center: [-76.13245, 45.27583],
              zoom: 8.9,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'o_ward',
                opacity: 0
              },
              {
                layer: 'o_neigh',
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'o_neigh',
                opacity: 0
              },

            ]
        },
        {
            id: 'chapter-3',
            title: 'Methodology II: Using Crime Rate data from 10 Wards for Comparison',
            description: 'Crime Rate per 100 000 residents was used from 10 wards - the five with the highest crime rate, and the 5 with the Lowest. Hover on the bars for crime rate per 100 000 residents: <table id="bar-chart" class="charts-css bar show-primary-axis show-labels show-heading show-data-on-hover"><caption>  Wards with the 5 Highest Crime Rates </caption><tbody><tr><th scope="row", style="font-size:10px">Somerset</th><td style="--size: calc(15496/15496); font-size:10px;"><span class="data">15496</span></td></tr><tr><th scope="row", style="font-size:10px"> Rideau Vanier</th><td style="--size: calc(11165/15496); font-size:10px;"><span class="data">11165</span></td></tr><tr><th scope="row", style="font-size:10px"> Capital</th>  <td style="--size: calc(4413/15496); font-size:10px;"><span class="data">4413</span></td></tr><tr><th scope="row", style="font-size:10px"> Rideau-Rockcliffe</th><td style="--size: calc(4241/15496); font-size:10px;"><span class="data">4241</span></td></tr><tr><th scope="row", style="font-size:10px"> Alta Vista</th><td style="--size: calc(4084/15496); font-size:10px;"><span class="data">4084</span></td></tr></tbody></table><table id="bar-chart" class="charts-css bar show-primary-axis show-labels show-heading show-data-on-hover"><caption> Wards with the 5 Lowest Crime Rates</caption><tbody><tr><th scope="row", style="font-size:10px"> Osgoode</th><td style="--size: calc(1582/1582); font-size:10px;"><span class="data">1582</span></td></tr><tr><th scope="row", style="font-size:10px"> Stittsville</th><td style="--size: calc(1547/1582); font-size:10px;"><span class="data">1547 </span></td></tr><tr><th scope="row", style="font-size:10px"> Kanata South</th><td style="--size: calc(1538/1582); font-size:10px;"><span class="data">1538</span></td></tr><tr><th scope="row", style="font-size:10px"> Rideau Goulbourn</th><td style="--size: calc(1179/1582); font-size:10px;"><span class="data">1179</span></td></tr><tr><th scope="row", style="font-size:10px"> West Carleton</th><td style="--size: calc(945/1582); font-size:10px;"><span class="data">945</span></td></tr></tbody></table> <br> Data Collected From <a href="https://ottawa.ctvnews.ca/ottawa-wards-with-the-highest-and-lowest-crime-rates-1.5963846"> CTV News Ottawa </a>',
            location: {
              center: [-76.13245, 45.27583],
              zoom: 8.9,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'o_neigh',
                opacity: 0.5
              },
              {
                layer: ' o_ward',
                opacity: 1
              }
            ],
            onChapterExit: [

            ]
        },
/*         {
            id: 'chapter-4',
            title: 'Case Study One: Shootings and Discharges',
            description: '',
            location: {
              center: [-76.08356, 45.46935],
              zoom: 8.9,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'cs1_crime',
                opacity: 1
              },
              {
                layer: 'o_ward',
                opacity: 0.5
              }
            ],
            onChapterExit: [
              {
                layer: 'cs1_crime',
                opacity: 0
              }
            ]
        },
Chapter No longer in Use: ward layers didn't want to work*/
        {
            id: 'chapter-5',
            title: 'Case Study One: Hate Crimes',
            description: 'Hate crimes have been on the increase in the past few years in Ottawa. These crimes have only been exasperated by the economic recession, global pandemic, and extremist polticians blaming and targetting minorities as scapegoats. Among the factors listed in the report below, low income is not mentioned as a factor to this crime. Furthermore, the wards with the highest number of hate crimes are also the most densily populated. <iframe width="333.95" height="202.76" src="https://www.youtube.com/embed/9guhVkQi1m0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
              center: [-75.71614, 45.42959],
              zoom: 12,
              pitch: 60,
              bearing: 107.28
            },
            onChapterEnter: [
              {
                layer: '3D-extrusions',
                opacity: 0.9
              },
              {
                layer: '3D-extrusions-labels',
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: '3D-extrusions',
                opacity: 0
              },
              {
                layer: '3D-extrusions-labels',
                opacity: 0
              }
            ]
        },
        {
            id: 'chapter-6',
            title: 'Case Study Two: Bike Theft',
            image: 'img/bike.jpg',
            description: 'While the data on bike theft is limited to 2015-2020, police also announced in 2021 an increase in bike theft. The article pictured above relates the increase in bike use during the pandemic with the surge in bike theft. Just like the number of hate crimes, bike theft density occurs mainly along urban and residential areas. <br> Source: from <a href="https://ottawa.ctvnews.ca/ottawa-police-reporting-spike-in-bike-thefts-1.5402565"> CTV Ottawa </a>',
            location: {
              center: [-75.69500, 45.41318],
              zoom: 12.76,
              pitch: 45.00,
              bearing: -0.50

            },
            onChapterEnter: [
              {
                layer: 'cs3_path',
                opacity: 1
              },
              {
                layer: 'cs3_crime',
                opacity: 1
              },
              {
                layer: 'o_ward',
                opacity: 0.5
              }
            ],
            onChapterExit: [
              {
                layer: 'cs3_path',
                opacity: 0
              },
              {
                layer: 'cs3_crime',
                opacity: 0
              }
            ]
        },
        {
            id: 'chapter-7',
            title: 'Conclusion',
            description: 'These two cases of crime in Ottawa are evidence of how individual welfare is influenced by the presence of crime among other socio-political factor, rather than solely the economic state of a neighbourhood. Further research would be necessary in understanding the nature of other crimes in Ottawa and whether they are distributed any differently. ',
            location: {
                  center: [-76.42317, 45.35986],
                  zoom: 8.5,
                  pitch: 0,
                  bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'o_ward',
                opacity: 0.5
              }
            ],
            onChapterExit: [

            ]
        }
    ]
};
