var APP_DATA = {
  "scenes": [
    {
      "id": "0-pokj-dzienny",
      "name": "Pokój dzienny",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.574098027088386,
          "pitch": 0.07331928452213177,
          "rotation": 0,
          "target": "1-komunikacja-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-komunikacja-parter",
      "name": "Komunikacja parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5705241058802795,
          "pitch": 0.09219179911209707,
          "rotation": 0,
          "target": "0-pokj-dzienny"
        },
        {
          "yaw": 1.8584215015850445,
          "pitch": 0.13598086756693206,
          "rotation": 0,
          "target": "4-komunikacja-pitro"
        },
        {
          "yaw": -3.0888996925106973,
          "pitch": 0.06568302751967536,
          "rotation": 0,
          "target": "2-siownia"
        },
        {
          "yaw": 2.9033510623153287,
          "pitch": 0.06797023807069458,
          "rotation": 0,
          "target": "3-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-siownia",
      "name": "Siłownia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3295648891419898,
          "pitch": 0.055907981328264356,
          "rotation": 0,
          "target": "1-komunikacja-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-azienka",
      "name": "Łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5929182960036776,
          "pitch": 0.03837088259114729,
          "rotation": 0,
          "target": "1-komunikacja-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-komunikacja-pitro",
      "name": "Komunikacja piętro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12614960772922146,
          "pitch": 0.0662431027720487,
          "rotation": 0,
          "target": "1-komunikacja-parter"
        },
        {
          "yaw": -0.367372619165387,
          "pitch": 0.06230330945127349,
          "rotation": 0,
          "target": "5-biuro"
        },
        {
          "yaw": -2.9548556946208375,
          "pitch": 0.0533350302591451,
          "rotation": 0,
          "target": "6-pokj-"
        },
        {
          "yaw": 2.5340731795886438,
          "pitch": 0.04802514101656463,
          "rotation": 0,
          "target": "7-sypialnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-biuro",
      "name": "Biuro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.082307468763421,
          "pitch": 0.03231884261817797,
          "rotation": 0,
          "target": "4-komunikacja-pitro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pokj-",
      "name": "Pokój ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.603680477476667,
          "pitch": -0.04311352752559827,
          "rotation": 0,
          "target": "4-komunikacja-pitro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sypialnia",
      "name": "Sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.621108484270457,
          "pitch": 0.02533446220847857,
          "rotation": 0,
          "target": "4-komunikacja-pitro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Stare Iganie Akacjowa",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
