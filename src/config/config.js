// src/config/config.js

export const AppConfig = {
  api: {
    baseUrl: "https://swapi.tech/api",
    endpoints: ["people", "planets", "species"],
  },

  navbar:{
    imageurl:"https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
  },

  fieldsToShowInCard: {
    people: [
      { key: "height", label: "Height" },
      { key: "eye_color", label: "Eye Color" },
      { key: "gender", label: "Gender" },
    ],
    planets: [
      { key: "population", label: "Population" },
      { key: "climate", label: "Climate" },
      { key: "gravity", label: "Gravity" },
    ],
    species: [
      { key: "classification", label: "Classification" },
      { key: "language", label: "Language" },
      { key: "average_lifespan", label: "Lifespan" },
    ],
    starships: [
      { key: "model", label: "Model" },
      { key: "manufacturer", label: "Manufacturer" },
      { key: "starship_class", label: "Class" },
    ],
  },
    fieldsToShowInDetails: {
    people: [
      { key: "height", label: "Height" },
      { key: "eye_color", label: "Eye Color" },
      { key: "gender", label: "Gender" },
      { key: "birth_year", label: "Birth Year" },
      { key: "hair_color", label: "Hair Color" },
      { key: "mass", label: "Mass" },
      { key: "skin_color", label: "Skin color" },
    ],
    planets: [
      { key: "population", label: "Population" },
      { key: "climate", label: "Climate" },
      { key: "gravity", label: "Gravity" },
      { key: "diameter", label: "Diameter" },
      { key: "orbital_period", label: "Orbital period" },
      { key: "terrain", label: "Terrain" },
      { key: "rotation_period", label: "Rotation period" },
    ],
    species: [
      { key: "classification", label: "Classification" },
      { key: "language", label: "Language" },
      { key: "average_lifespan", label: "Lifespan" },
      { key: "average_height", label: "Average height" },
      { key: "designation", label: "Designation" },
      { key: "eye_colors", label: "Eye colors" },
      { key: "hair_colors", label: "Hair colors" },
    ],
  },

  images: {
    people: [
      "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
      "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536",
      "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
      "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720",
      "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
      "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593",
      "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527",
      "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666",
      "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",
    ],
    planets: [
      "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg?region=165%2C0%2C949%2C534",
      "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
      "https://lumiere-a.akamaihd.net/v1/images/yavin-4-main_bd23f447.jpeg?region=331%2C0%2C949%2C534",
      "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675",
      "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711",
      "https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/coruscant-main_d2fad5f2.jpeg?region=245%2C0%2C1430%2C804",
      "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542",
    ],
    species: [
      "https://lumiere-a.akamaihd.net/v1/images/databank_lobot_01_169_8a50d7ae.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/2-1b-droid-main-image_546a90ad.jpeg?region=0%2C107%2C1560%2C880",
      "https://lumiere-a.akamaihd.net/v1/images/wookiees-main-b_fc850c5b.jpeg?region=8%2C0%2C1543%2C868",
      "https://lumiere-a.akamaihd.net/v1/images/rodian-main_de29c78f.jpeg?region=0%2C0%2C1280%2C721",
      "https://lumiere-a.akamaihd.net/v1/images/databank_hutt_01_169_5d0535d2.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/databank_yaddle_01_169_3cfd7068.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/trandoshian-main_19804be7.jpeg?region=0%2C67%2C1280%2C720",
      "https://lumiere-a.akamaihd.net/v1/images/databank_moncalamari_01_169_135967d9.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C0%2C1560%2C878",
      "https://lumiere-a.akamaihd.net/v1/images/databank_sullustan_01_169_01e4c3e0.jpeg?region=0%2C0%2C1560%2C878",
    ],
  },

  values: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};
