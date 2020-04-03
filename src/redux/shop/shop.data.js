import * as cnl from '@assets/newPrams/Chantal';
import * as crno from '@assets/newPrams/Cristiano';
import * as nxt from '@assets/newPrams/Neonex';
import * as rgo from '@assets/newPrams/Reggio';
import * as sra from '@assets/newPrams/Sierra';
import * as cpr from '@assets/newStrollers/capri';
import * as lvy from '@assets/newStrollers/levi';
import * as sfr from '@assets/newStrollers/safari';
import * as crl from '@assets/carSeats/carlo';
import * as kt from '@assets/carSeats/Kite';
import * as adp from '@assets/accessories/adapters';
import * as cmr from '@assets/accessories/cameras';
import * as trs from '@assets/accessories/tires';
import * as mcs from '@assets/accessories/mechanism';
import * as lns from '@assets/linens';

const priceCapri = '450';
const priceCapriGold = '480';
const priceChantal = '1200';
const priceChantalSpEdition = '1300';
const priceCristiano = '1100';
const priceCristianoSpEdition = '1200';
const priceNeonex = '750';
const priceReggio = '1100';
const priceReggioSpEdition = '1300';
const priceSierra = '1100';
const priceSierraSpEd = '1200';
const priceLevi = '380';
const priceSafari = '300';
const priceKite = '180';
const priceCarlo = '150';
const priceAdapterKite = '40';
const priceAdapterCarlo = '35';
const priceAdapterGussio ='30';
const priceAdapterGalactic = '25';
const priceCameras = '10';
const priceTires = '10';
const priceMechanism = '50';
const priceLinens = '170';


const SHOP_DATA = [
  {
    id: 'new-prams',
    title: 'shopData.titles.newPrams',
    routeName: 'new-prams',
    items: [
      {
        title: 'Chantal',
        info: 'good pram',
        types: [
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal1]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal2]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal3]
          },
          {
            title: 'Chantal Sp.Ed.',
            price: priceChantalSpEdition,
            images: [cnl.chantal4]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal5]
          },
          {
            title: 'Chantal Sp.Ed.',
            price: priceChantalSpEdition,
            images: [cnl.chantal6]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal7]
          },
          {
            title: 'Chantal Sp.Ed.',
            price: priceChantalSpEdition,
            images: [cnl.chantal8]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal9]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal10]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal11]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal12]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal13]
          },
          {
            title: 'Chantal',
            price: priceChantal,
            images: [cnl.chantal14]
          },
          {
            title: 'Chantal Sp.Ed.',
            price: priceChantalSpEdition,
            images: [cnl.chantal15]
          },
        ]
      },
      {
        title: 'cristiano',
        info: 'good pram',
        types: [
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano1]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano2]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano3]
          },
          {
            title: 'Cristiano Sp.Ed.',
            price: priceCristianoSpEdition,
            images: [crno.cristiano5]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano6]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano7]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano8]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano9]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano10]
          },
          {
            title: 'Cristiano Sp.Ed.',
            price: priceCristianoSpEdition,
            images: [crno.cristiano11]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano12]
          },
          {
            title: 'Cristiano Sp.Ed.',
            price: priceCristianoSpEdition,
            images: [crno.cristiano13]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano14]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [crno.cristiano15]
          },
          {
            title: 'Cristiano Sp.Ed.',
            price: priceCristianoSpEdition,
            images: [crno.cristiano16]
          },
        ],
      },
      {
        title: 'neonex',
        info: 'good pram',
        types: [
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex1]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex7]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex8]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex9]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex10]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex11]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex12]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex13]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex14]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex15]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex16]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex17]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex18]
          },
          {
            title: 'Neonex',
            price: priceNeonex,
            images: [nxt.neonex19]
          },
        ],
      },
      {
        title: 'reggio',
        info: 'goodPram',
        types: [
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio1]
          },
          {
            title: 'Reggio Sp.Ed.',
            price: priceReggioSpEdition,
            images: [rgo.reggio2]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio3]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio4]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio5]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio6]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio7]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio8]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio9]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio10]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio11]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio13]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio14]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio15]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio16]
          },
          {
            title: 'Reggio Sp.Ed.',
            price: priceReggioSpEdition,
            images: [rgo.reggio17]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio18]
          },
          {
            title: 'Reggio Sp.Ed',
            price: priceReggioSpEdition,
            images: [rgo.reggio19]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio20]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio21]
          },
          {
            title: 'Reggio Sp.Ed.',
            price: priceReggioSpEdition,
            images: [rgo.reggio22]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio23]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio24]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio25]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio26]
          },
          {
            title: 'Reggio Sp.Ed.',
            price: priceReggio,
            images: [rgo.reggio27]
          },
          {
            title: 'Reggio',
            price: priceReggio,
            images: [rgo.reggio28]
          },
        ],
      },
      {
        title: 'sierra',
        info: 'good pram',
        types: [
          {
            title: 'Sierra',
            price: priceSierra,
            images: [sra.sierra1]
          },
          {
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [sra.sierra2]
          },
          {
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [sra.sierra3]
          },
          {
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [sra.sierra4]
          },
          {
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [sra.sierra5]
          },
          {
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [sra.sierra6]
          },
          {
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [sra.sierra7,sra.sierra8]
          },
          {
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [sra.sierra9]
          },
        ],
      }
    ]
  },
  {
    id: 'new-strollers',
    title: 'shopData.titles.newStrollers',
    routeName: 'new-strollers',
    items: [
      {
        title: 'Capri',
        info: 'good pram',
        types: [
          {
            title: 'Capri Gray',
            price: priceCapri,
            images: [cpr.capri6]
          },
          {
            title: 'Capri Blue',
            price: priceCapri,
            images: [cpr.capri3, cpr.capri4, cpr.capri7]
          },
          {
            title: 'Capri Brown',
            price: priceCapri,
            images: [cpr.capri5]
          },
          {
            title: 'Capri Gold',
            price: priceCapriGold,
            images: [cpr.capri1,cpr.capri2,cpr.capri8]
          }
        ],
      },
      {
        title: 'Levi',
        info: 'good pram',
        types: [
          {
            title: 'Levi Blue',
            price: priceLevi,
            images: [lvy.levi1, lvy.levi5,lvy.levi6]
          },
          {
            title: 'Levi Brown',
            price: priceLevi,
            images: [lvy.levi4]
          },
          {
            title: 'Levi Gray',
            price: priceLevi,
            images: [lvy.levi2]
          },
          {
            title: 'Levi Graphite',
            price: priceLevi,
            images: [lvy.levi3]
          },
        ],
      },
      {
        title: 'Safary',
        info: 'good pram',
        types: [
          {
            title: 'Safari Brown',
            price: priceSafari,
            images: [sfr.safari1]
          },
          {
            title: 'Safari Graphite',
            price: priceSafari,
            images: [sfr.safari2, sfr.safari3, sfr.safari4, sfr.safari5]
          },
          {
            title: 'Safari Gray',
            price:priceSafari,
            images:[
              sfr.safari6,
              sfr.safari7,
              sfr.safari8,
              sfr.safari9,
              sfr.safari10]
          },
          {
            title: 'Safari Blue',
            price:priceSafari,
            images:[ sfr.safari11, sfr.safari12, sfr.safari13]
          }
        ],
      }
    ]
  },
  {
    id: 'new-car-seats',
    title: 'shopData.titles.newCarSeats',
    routeName: 'new-car-seats',
    items: [
      {
        title: 'Kite',
        info: 'good car seat',
        types: [
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite1]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite2]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite3]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite4]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite5]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite6]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite7]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite8]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite9]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite10]
          },
          {
            title: 'Kite',
            price: priceKite,
            images: [kt.kite11]
          },
        ],
      },
      {
        title: 'Carlo',
        info: 'good car seat',
        types: [
          {
            title: 'Carlo',
            price: priceCarlo,
            images: [crl.carlo1]
          },
          {
            title: 'Carlo',
            price: priceCarlo,
            images: [crl.carlo2]
          },
          {
            title: 'Carlo',
            price: priceCarlo,
            images: [crl.carlo3]
          },
          {
            title: 'Carlo',
            price: priceCarlo,
            images: [crl.carlo4]
          },
          {
            title: 'Carlo',
            price: priceCarlo,
            images: [crl.carlo5]
          },
          {
            title: 'Carlo',
            price: priceCarlo,
            images: [crl.carlo6]
          },
        ],
      }
    ]
  },
  {
    id: 'accessories',
    title: 'shopData.titles.accessories',
    routeName: 'accessories',
    items: [
      {
        title: 'adapters',
        info: 'good adapter',
        types: [
          {
            title: 'shopData.accessories.adaptersTitle.adaptersKite',
            price: priceAdapterKite,
            images: [adp.adapterKite]
          },
          {
            title: 'shopData.accessories.adaptersTitle.adaptersCarlo',
            price: priceAdapterCarlo,
            images: [adp.adapterCarlo]
          },
          {
            title: 'shopData.accessories.adaptersTitle.adaptersGussio',
            price: priceAdapterGussio,
            images: [adp.adapterGussio]
          },
          {
            title: 'shopData.accessories.adaptersTitle.adaptersGalactic',
            price: priceAdapterGalactic,
            images: [adp.adapterGalactic]
          },
        ],
      },
      {
        title: 'shopData.accessories.camerasAndTires.title',
        info: 'good cameras and tires',
        types:[
          {
            title: 'shopData.accessories.camerasAndTires.cameras',
            price: priceCameras,
            images: [cmr.camera]
          },
          {
            title: 'shopData.accessories.camerasAndTires.tires',
            price: priceTires,
            images: [ trs.tire ],
          },
        ]
      },
      {
        title: 'shopData.accessories.mechanisms.title',
        info: 'mechanism',
        types: [
          {
            title: 'shopData.accessories.mechanisms.mechanism',
            price: priceMechanism,
            images: [ mcs.mechanism ],
          },
        ]
      }
    ]
  },
  {
    id: 'linens',
    title: 'shopData.titles.linens',
    routeName: 'linens',
    items: [
      {
        title: 'linens',
        info: 'good linens',
        types: [
          {
            title: 'Linens',
            price: priceLinens,
            images: [ lns.linens1 ],
          },
          {
            title: 'Linens',
            price: priceLinens,
            images: [ lns.linens2 ],
          },
          {
            title: 'Linens',
            price: priceLinens,
            images: [ lns.linens3 ],
          },
          {
            title: 'Linens',
            price: priceLinens,
            images: [ lns.linens4 ],
          },
          {
            title: 'Linens',
            price: priceLinens,
            images: [ lns.linens5 ],
          },
        ],
      }
    ]
  }
];

export default SHOP_DATA;

