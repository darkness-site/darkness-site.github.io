// store.js

const storeData = {
    "name": "WebOSBeta Store",
    "desc": "The 1-stop shop for all WebOSBeta Apps & Themes.",
    "url": "NOWWITHHDMI2.1(V1.1.0BETA)#l08#l20#l20#l16#l19#bs22#bs28#bs28#l03#l12#l15#l03#l11#l23#l15#l18#l11#bs16#l19#l20#l15#l18#l05#bs13#l07#l12#l09#l20#l03#l08#bs13#l13#l05#bs28#l22#num02#bs28",
    "encodedUrl": "yes",
    "icon": "/assets/images/store.png",
    "version": "1.0.0",
    "finderTerms": [
      "app store",
      "theme store",
      "shop"
    ],
    "permissions": [
      "installApp",
      "installTheme",
      "noUninstall"
    ]
  };
  
  const storeContainer = document.getElementById("store-container");
  const storeName = document.getElementById("store-name");
  const storeDesc = document.getElementById("store-desc");
  const storeIcon = document.getElementById("store-icon");
  
  storeName.textContent = storeData.name;
  storeDesc.textContent = storeData.desc;
  storeIcon.src = storeData.icon;