let lang = {
"Number of speakers": 7506502,
"Languages": [
    {
      "Name in English": "South Italian",
      "Number of speakers": 7500000,
      "Degree of endangerment": "Vulnerable"
    },
    {
      "Name in English": "Cashinahua (Brazil)",
      "Number of speakers": 6000,
      "Degree of endangerment": "Vulnerable"
    },
    {
      "Name in English": "Critically Endangered",
      "Number of speakers": 421,
      "Languages": [
            {
              "Name in English": "Kiowa Apache",
              "Number of speakers": 3,
              "Degree of endangerment": "Critically endangered"
            },
            {
              "Name in English": "Konkow",
              "Number of speakers": 3,
              "Degree of endangerment": "Critically endangered"
            },
            {
              "Name in English": "Lake Miwok",
              "Number of speakers": 3,
              "Degree of endangerment": "Critically endangered"
            },
            {
              "Name in English": "Mabiri",
              "Number of speakers": 3,
              "Degree of endangerment": "Critically endangered"
            },
            {
              "Name in English": "Mescalero-Chiricahua Apache (Oklahoma)",
              "Number of speakers": 3,
              "Degree of endangerment": "Critically endangered"
            }
      ]
  },
  {
    "Name in English": "Extinct",
    "Number of speakers": 81,
    "Languages": [
          {
            "Name in English": "|'Auni",
            "Number of speakers": 0,
            "Degree of endangerment": "Extinct"
          },
          {
            "Name in English": "|Xam",
            "Number of speakers": 0,
            "Degree of endangerment": "Extinct"
          },
          {
            "Name in English": "ǁKu ǁ'e",
            "Number of speakers": 0,
            "Degree of endangerment": "Extinct"
          },
          {
            "Name in English": "ǁKx'au",
            "Number of speakers": 0,
            "Degree of endangerment": "Extinct"
          },
          {
            "Name in English": "ǁXegwi",
            "Number of speakers": 0,
            "Degree of endangerment": "Extinct"
          }
        ]
      }
    ]
  };

let canvas = d3.select('#canvas')
let drawTreeMap = () => {
  let hierarchy = d3.hierarchy(lang, (node) => {
    return node['Languages']
  }).sum((node) => {
    return node['Number of speakers']
  }).sort((node1,node2) => {
    return node2['Number of speakers'] - node1['Number of speakers']
  })

  let createTreeMap = d3.treemap()
                              .size([1000, 600])

  let dataTiles = hierarchy.leaves()
  console.log(dataTiles)
};
// console.log(lang);

// drawTreeMap();