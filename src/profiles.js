const profiles = {
  "ER28-0653": {
    "id": "ER28-0653",
    "name": "Ilya Peshekhonov",
    "contacts": [
      {
        "link": "https://github.com/thepeshka",
        "label": "Github"
      }, {
        "link": "tg://resolve?domain=thepeshka",
        "label": "Telegram"
      },
      {
        "link": "mailto://ilya@thepeshka.ru",
        "label": "ilya@thepeshka.ru"
      }
    ],
    "location": "Russia, Veliky Novgorod",
    "dob": "19970602",
    "showAge": true,
    "career": [
      "07/17 - Jun QA @ SPL - 07/18",
      "07/18 - Jun Dev @ SPL - 07/19",
      "07/19 - Mid Dev @ SPL - 12/19",
      "12/19 - Mid Web-dev @ ZenCat - 07/21",
      "07/21 - Mid Back-dev @ The Coders - 06/22"
    ],
    "specialty": ["Backend development", "Django", "DRF"]
  },
  "ER28-0652": {
    "id": "ER28-0652",
    "name": "Elliot Alderson",
    "contacts": [
      {
        "link": "tel:2125550179",
        "label": "(212) 555-0179"
      }
    ],
    "location": "NYC, USA",
    "dob": "19860917",
    "showAge": false,
    "career": ["AllSafe CyberSecurity -> fsociety -> E Corp -> fsociety"],
    "specialty": ["Cybersecurity", "Social engineering", "Hacking"]
  }
};
profiles["ER28-0653"].career = profiles["ER28-0653"].career.map(
  line => line.replaceAll(" ", " ")
)

export default profiles;
