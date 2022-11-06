var config = {
    style: 'mapbox://styles/nicholassavasta/cl938ike6000u14ohu2pvsa62',
    accessToken: 'pk.eyJ1IjoibmljaG9sYXNzYXZhc3RhIiwiYSI6ImNsOGs2Mmd6eTA4cDczb254ZjRmazdvbHMifQ.cJe9qgn0vYrpOgwdZydLig',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: 'Crime in Ottawa:',
    subtitle: 'A Comparison of Wellbeing with Crime Rates',
    byline: 'Mahnaz T.D. ; Nick S. ; Elise B.',
    footer: 'Bibliography:<ul><li>Levi, M. (2001). Business, cities and fears about crimes. Urban Studies, 38(5-6), 849-868.</li><li>Sariaslan, A., Långström, N., D’Onofrio, B., Hallqvist, J., Franck, J., & Lichtenstein, P. (2013). The impact of neighbourhood deprivation on adolescent violent criminality and substance misuse: a longitudinal, quasi-experimental study of the total Swedish population. International journal of epidemiology, 42(4), 1057-1066.</li><li><a href="https://davidandmarie.com/resources/crime-in-ottawa-neighbourhoods/">Crime in Ottawa neighborhoods</a></li><li><a href="https://ottawa.ctvnews.ca/ottawa-wards-with-the-highest-and-lowest-crime-rates-1.5963846">Ottawa crime rate</a></li><li><a href="https://ottawasun.com/category/news/crime/">Ottawa crime news</a></li> <li><a href="https://storymaps.arcgis.com/stories/b5ab6df3741649c4bcc0a5fbd9e3b45b">Sample of Storymap</a></li></ul>',
    chapters: [
        {
            id: 'chapter-1',
            title: 'Introduction',
            image: 'img/crime.jpg',
            description: "It is generally believed that urban areas with low income is correlated to high crime rates. Systemic racism and classism enforced this notion as events like 'white flight' have proven detrimental to local economies. This StoryMap looks into a selection of Ottawa's wards, the distribution of 3 different types of crime data - hatecrimes, gun violence/negligence, and bike theft - and compare them with the wards' Crime Rates and NEI.",
            location: {
                center: [-76.08356, 45.46935],
                zoom: 8.9,
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
              },
            ]
        },
        {
            id: 'chapter-2',
            title: 'Methodology I : Using NEI Data',
            description: 'What is Neighbourhood Equity Index (NEI)? The NEI takes 5 domains of livelihood into account -	Health,	Economic, Social and human development,	Physical environment,	Community and belonging - to rank neighbourhoods in an area. NEI scores are out of 100, and are represented on the map as green when the values are near 100 (dubbed "Not A Concern"), and as red when the values are near 0 (dubbed "Equity Concern". ',
            location: {
              center: [-76.08356, 45.47045],
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
              }
            ]
        },
        {
            id: 'chapter-3',
            title: 'Methodology II: Using Crime Rate data from 10 Wards for Comparison',
            description: 'Crime Rate per 100 000 residents was used from 10 wards - the five with the highest crime rate, and the 5 with the Lowest. Hover on the bars for crime rate per 100 000 residents: <table id="bar-chart" class="charts-css bar show-primary-axis show-labels show-heading show-data-on-hover"><caption>  Wards with the 5 Highest Crime Rates </caption><tbody><tr><th scope="row", style="font-size:10px">Somerset</th><td style="--size: calc(15496/15496); font-size:10px;"><span class="data">15496</span></td></tr><tr><th scope="row", style="font-size:10px"> Rideau Vanier</th><td style="--size: calc(11165/15496); font-size:10px;"><span class="data">11165</span></td></tr><tr><th scope="row", style="font-size:10px"> Capital</th>  <td style="--size: calc(4413/15496); font-size:10px;"><span class="data">4413</span></td></tr><tr><th scope="row", style="font-size:10px"> Rideau-Rockcliffe</th><td style="--size: calc(4241/15496); font-size:10px;"><span class="data">4241</span></td></tr><tr><th scope="row", style="font-size:10px"> Alta Vista</th><td style="--size: calc(4084/15496); font-size:10px;"><span class="data">4084</span></td></tr></tbody></table><table id="bar-chart" class="charts-css bar show-primary-axis show-labels show-heading show-data-on-hover"><caption> Wards with the 5 Lowest Crime Rates</caption><tbody><tr><th scope="row", style="font-size:10px"> Osgoode</th><td style="--size: calc(1582/1582); font-size:10px;"><span class="data">1582</span></td></tr><tr><th scope="row", style="font-size:10px"> Stittsville</th><td style="--size: calc(1547/1582); font-size:10px;"><span class="data">1547 </span></td></tr><tr><th scope="row", style="font-size:10px"> Kanata South</th><td style="--size: calc(1538/1582); font-size:10px;"><span class="data">1538</span></td></tr><tr><th scope="row", style="font-size:10px"> Rideau Goulbourn</th><td style="--size: calc(1179/1582); font-size:10px;"><span class="data">1179</span></td></tr><tr><th scope="row", style="font-size:10px"> West Carleton</th><td style="--size: calc(945/1582); font-size:10px;"><span class="data">945</span></td></tr></tbody></table>',
            location: {
              center: [-76.08356, 45.46935],
              zoom: 8.9,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'o_neigh',
                opacity: 0
              },
              {
                layer: ' o_ward_10',
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: ' o_ward_10',
                opacity: 0
              }
            ]
        },
        {
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
        {
            id: 'chapter-5',
            title: 'Case Study Two: Hate Crimes',
            description: '<iframe width="333.95" height="202.76" src="https://www.youtube.com/embed/9guhVkQi1m0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
              center: [-76.08356, 45.46935],
              zoom: 8.9,
              pitch: 0,
              bearing: 0
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
            title: 'Case Study Three: Bike Theft',
            description: '',
            location: {
              center: [-76.08356, 45.46935],
              zoom: 8.9,
              pitch: 0,
              bearing: 0
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
            description: 'Last few statements about NEI and crime patterns across Ottawa',
            location: {
              center: [-76.08356, 45.46935],
              zoom: 8.9,
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
