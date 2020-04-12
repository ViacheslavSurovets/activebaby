import { v4 as uuidv4 } from 'uuid';

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
const priceAdapterGussio = '30';
const priceAdapterGalactic = '25';
const priceCameras = '10';
const priceTires = '10';
const priceMechanism = '50';
const priceLinens = '170';


const SHOP_DATA = {
  newPrams: {
    id: 'newPrams',
    title: 'shopData.titles.newPrams',
    routeName: 'newPrams',
    items: [
      {
        title: 'Chantal',
        info: 'good pram',
        types: [
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal1.jpeg?alt=media&token=d1701d2d-539f-45be-92bb-f0eeb70ae471' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal2.jpeg?alt=media&token=7d02d015-5d40-4159-a9c5-052877369deb' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal3.jpeg?alt=media&token=9b619383-871d-4ad9-a1c7-61acd3f623cd' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal Sp.Ed.',
            price: priceChantalSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal4.jpeg?alt=media&token=311efda9-ebe7-4881-8b74-e8308316bbb4' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: ['https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal5.jpeg?alt=media&token=45acb107-1923-4e0a-8aed-736eccf791bd' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal Sp.Ed.',
            price: priceChantalSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal6.jpeg?alt=media&token=b50032e3-2528-4bfe-957c-fa20b0cd1800']
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal7.jpeg?alt=media&token=228b31dd-fccb-46cd-974c-03e36f79323b' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal Sp.Ed.',
            price: priceChantalSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal8.jpeg?alt=media&token=0e6357e4-0eda-4c80-9ee5-00e90cc56cf2']
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal9.jpeg?alt=media&token=f9b8988c-5c15-4368-9a86-688c792b9779' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal10.jpeg?alt=media&token=f3a73254-599a-4140-b2eb-2e78538c57d0' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal11.jpeg?alt=media&token=dfbef901-bf91-4d0c-9286-90f71efa5cde' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal12.jpeg?alt=media&token=0fec68c6-1712-4d18-b4c8-9db80056be0f' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal13.jpeg?alt=media&token=f466b062-df89-4254-b82f-5daa2963c8c9' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal',
            price: priceChantal,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal14.jpeg?alt=media&token=ede2ce24-b277-4232-9846-49101aa557a0' ]
          },
          {
            id: uuidv4 (),
            title: 'Chantal Sp.Ed.',
            price: priceChantalSpEdition,
            images: ['https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fchantal%2Fchantal15.jpeg?alt=media&token=76d9f1ff-1712-4c3c-9e31-504763e8f5cf' ]
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
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano1.jpg?alt=media&token=d76d6778-64ed-4f47-bcde-a900d31eaec4' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano2.jpeg?alt=media&token=314dcff3-f84f-4820-a40d-7438283415b1' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano3.jpg?alt=media&token=7f8ff782-e5af-4712-aaec-16307ffb1fed' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano4.jpg?alt=media&token=983d6f09-52f5-4ede-a58f-3a562c1809ea' ]
          },
          {
            title: 'Cristiano Sp.Ed.',
            price: priceCristianoSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano5.jpeg?alt=media&token=b81804f0-7911-4bd6-9aea-1220ecf89ae9' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano6.jpeg?alt=media&token=96e1be40-3746-4bf0-a79e-938404c1787c' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano7.jpeg?alt=media&token=a653e948-f791-4662-bdb7-fc3c3cbdc710' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano8.jpeg?alt=media&token=2e5ea309-cf99-4729-a31a-762a909def6f' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano9.jpeg?alt=media&token=89393667-f981-4c85-84c0-10394d0705f2' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano10.jpeg?alt=media&token=63ee105b-85a3-4852-8eb8-e3f1bc5338d6' ]
          },
          {
            title: 'Cristiano Sp.Ed.',
            price: priceCristianoSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano11.jpeg?alt=media&token=dee9709a-6f5b-42ed-b786-0cbbf6ee6865' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano12.jpeg?alt=media&token=64a18243-a31b-4c70-aead-de9953da58ab' ]
          },
          {
            title: 'Cristiano Sp.Ed.',
            price: priceCristianoSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano13.jpeg?alt=media&token=79d11731-57df-40fe-9209-143a76fe4eb4' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano14.jpeg?alt=media&token=a69d1b82-aa7d-4f9b-b722-2311d27660f5' ]
          },
          {
            title: 'Cristiano',
            price: priceCristiano,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano15.jpeg?alt=media&token=837206fc-b4d9-4a88-aac1-0a8ecf269f6b' ]
          },
          {
            title: 'Cristiano Sp.Ed.',
            price: priceCristianoSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fcristiano%2Fcristiano16.jpeg?alt=media&token=fd776b7d-6af5-4abb-8a2a-fd37907c31d6' ]
          },
        ],
      },
      {
        title: 'neonex',
        info: 'good pram',
        types: [
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: ['https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex1.jpg?alt=media&token=a6bf4226-41e2-44c1-a9bb-0c0892f05c20' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex7.jpg?alt=media&token=bc324a46-d6a3-4b7d-ac72-91a2c38cb474' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex8.jpg?alt=media&token=db1c17e7-548e-4c6c-beb2-ed7dfcd8c07f' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex9.jpg?alt=media&token=1534869d-d2b6-47f6-b068-1e26537f8630' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex10.jpg?alt=media&token=d9f84f09-ec09-407e-abf7-84c14643843a' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex11.jpg?alt=media&token=00dec3e2-5549-4edb-b190-5a4b01e7dbae' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex12.jpg?alt=media&token=64eb4294-bf8f-46e7-9583-9c5e47418253' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex13.jpg?alt=media&token=87063dbe-4249-4c9b-b70c-90fb81dd58ff' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex14.jpg?alt=media&token=6bc7ceb7-46f6-4c1e-9cb0-ebe4a71873d3']
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex15.jpg?alt=media&token=c9b25241-7d39-48d5-88ec-8998b4567ee5' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex16.jpg?alt=media&token=42adaac5-ed62-49bb-a4d0-842888360724' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex17.jpg?alt=media&token=8f12f51f-ac4c-4a29-86f2-92baa5227f2d' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: ['https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex18.jpg?alt=media&token=35008005-2193-4155-b146-de4e73d86827' ]
          },
          {
            id: uuidv4 (),
            title: 'Neonex',
            price: priceNeonex,
            images: ['https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fneonex%2Fneonex19.jpg?alt=media&token=81eef29d-429a-4c6a-a389-9f6559ef94f8' ]
          },
        ],
      },
      {
        title: 'reggio',
        info: 'goodPram',
        types: [
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio1.jpeg?alt=media&token=52562ae5-1235-4716-a0b2-6c83c9739759' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio Sp.Ed.',
            price: priceReggioSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio2.jpeg?alt=media&token=c136ca66-6bee-46c5-bd0e-ba99ccc52622' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio3.jpeg?alt=media&token=54963da3-c64b-42be-9780-25fe29afcb8f' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: ['https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio4.jpeg?alt=media&token=fe5a9f58-9dfd-4a60-8a91-a675c06b4842' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio5.jpeg?alt=media&token=4a460e4d-49ff-4105-bfd3-c10921129591' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio6.jpeg?alt=media&token=6a00224a-64fd-42b7-811f-df8d3f2e25ad' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio7.jpeg?alt=media&token=b9b59f9c-47f9-4953-968a-b9251ad18c27' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio8.jpeg?alt=media&token=d6369430-e5c9-4095-96ce-47b9e71d96b6' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio9.jpeg?alt=media&token=3b1d45e3-bf09-42c7-8661-f22ee9c09c4b' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio10.jpeg?alt=media&token=9a03945f-92bf-4a8c-995c-4283373005b0' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio11.jpeg?alt=media&token=e5636b55-8350-47fb-a0f2-ffccbbc4768e' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio12.jpeg?alt=media&token=0d3bcfa5-d1a5-4150-a4c9-8fe72670e96d' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio13.jpeg?alt=media&token=b5260dfc-b3c9-4e4d-af37-812cb5947f61' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio14.jpeg?alt=media&token=f5178886-2ff9-45c1-9550-b11ea4a1b16e' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio15.jpeg?alt=media&token=aa380b3f-575a-4869-b60b-603701023718' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio16.jpeg?alt=media&token=039001af-2dba-493d-bd88-66998aeeafe1' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio Sp.Ed.',
            price: priceReggioSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio17.jpeg?alt=media&token=60db3923-c014-4c3b-a348-663d97be5b64' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio18.jpeg?alt=media&token=61c596d7-c569-45da-8d2e-b53fcbfa0bc0' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio Sp.Ed',
            price: priceReggioSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio19.jpeg?alt=media&token=f55067b6-fb42-4133-86e5-0b1682f553b7' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: ['https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio20.jpeg?alt=media&token=bc504e04-4cfa-4560-9c73-86eb49157496' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio21.jpeg?alt=media&token=88a6efbe-ad6a-4633-bbe7-a14c9c5a9178' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio Sp.Ed.',
            price: priceReggioSpEdition,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio22.jpeg?alt=media&token=581ff097-3f06-4f6d-adee-99b9d5d4b0b7' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio23.jpeg?alt=media&token=a1afb750-ecaa-46b4-b9f2-eb3c2e28ea10' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio24.jpeg?alt=media&token=1ea73c0f-88ef-4faa-b616-399c84c7dd04' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio25.jpeg?alt=media&token=799921a1-c85e-4e58-ab0e-adaf13a29aaf' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio26.jpeg?alt=media&token=85ed2ad3-2992-4eae-a51e-9dfce3d7e8f7' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio Sp.Ed.',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio27.jpeg?alt=media&token=2ca4978e-d119-4702-ae46-692322a1d956' ]
          },
          {
            id: uuidv4 (),
            title: 'Reggio',
            price: priceReggio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Freggio%2Freggio28.jpeg?alt=media&token=bbb36c4c-6c27-48e8-a5e6-f0f0c77a325e' ]
          },
        ],
      },
      {
        title: 'sierra',
        info: 'good pram',
        types: [
          {
            id: uuidv4 (),
            title: 'Sierra',
            price: priceSierra,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra1.jpeg?alt=media&token=207ec8c5-1616-4dd1-8962-8e718633e297' ]
          },
          {
            id: uuidv4 (),
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra2.jpeg?alt=media&token=ad2b7444-53f1-480c-b610-d0611bd72c65' ]
          },
          {
            id: uuidv4 (),
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra3.jpeg?alt=media&token=8725dffe-ce32-4524-b146-c67fac1f4a74' ]
          },
          {
            id: uuidv4 (),
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra4.jpeg?alt=media&token=06baa9ee-e1fc-4f1f-930c-17832b687536' ]
          },
          {
            id: uuidv4 (),
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra5.jpeg?alt=media&token=0297802e-5a79-42e8-8c07-221a3f88ad0c']
          },
          {
            id: uuidv4 (),
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra6.jpeg?alt=media&token=034b739f-3a0c-4116-9e29-a0db092461c1' ]
          },
          {
            id: uuidv4 (),
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra7.jpeg?alt=media&token=b8326650-b03f-40ae-9d14-05bf5762d04b',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra8.jpeg?alt=media&token=6695b563-93d8-44f2-8af4-b8419cdd8afb'
            ]
          },
          {
            id: uuidv4 (),
            title: 'Sierra Sp.Ed.',
            price: priceSierraSpEd,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newPrams%2Fsierra%2Fsierra9.jpeg?alt=media&token=5a823839-7d49-41ee-ac4c-59b3e4e17e91' ]
          },
        ],
      }
    ]
  },
  newStrollers: {
    id: 'newStrollers',
    title: 'shopData.titles.newStrollers',
    routeName: 'newStrollers',
    items: [
      {
        title: 'Capri',
        info: 'good pram',
        types: [
          {
            id: uuidv4 (),
            title: 'Capri Gray',
            price: priceCapri,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fcapri%2Fcapri6.jpeg?alt=media&token=447c6dfe-cb05-42a7-a1b3-59fa2d37cead' ]
          },
          {
            id: uuidv4 (),
            title: 'Capri Blue',
            price: priceCapri,
            images: [
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fcapri%2Fcapri3.jpeg?alt=media&token=610fc56c-b947-49a6-bc1a-995123dbc4ac',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fcapri%2Fcapri4.jpeg?alt=media&token=8b102245-c53a-432f-8784-2e526b836250',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fcapri%2Fcapri7.jpeg?alt=media&token=f61058eb-cf8c-4118-a602-3ffbe0a7478e'
            ]
          },
          {
            id: uuidv4 (),
            title: 'Capri Brown',
            price: priceCapri,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fcapri%2Fcapri5.jpeg?alt=media&token=5cab9a35-0cd6-4891-8ef2-b63a257076b1' ]
          },
          {
            id: uuidv4 (),
            title: 'Capri Gold',
            price: priceCapriGold,
            images: [
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fcapri%2Fcapri1.jpeg?alt=media&token=5652ac17-5cfc-4c28-9c7b-9554dfb1a952',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fcapri%2Fcapri2.jpeg?alt=media&token=cc71fb7a-476f-48a6-8908-818a53510a70',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fcapri%2Fcapri8.jpeg?alt=media&token=b497651c-3c37-4a13-9e89-e75c2309daec'
            ]
          }
        ],
      },
      {
        title: 'Levi',
        info: 'good pram',
        types: [
          {
            id: uuidv4 (),
            title: 'Levi Blue',
            price: priceLevi,
            images: [
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Flevi%2Flevi1.jpeg?alt=media&token=cdec0e97-2694-4f34-b8a5-6f83c67d1123',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Flevi%2Flevi5.jpeg?alt=media&token=c53a3521-05bf-41f3-922b-0c578fac94c7',
             'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Flevi%2Flevi6.jpeg?alt=media&token=c55241be-62d2-42fb-9458-767ecd3d8b1f'
            ]
          },
          {
            id: uuidv4 (),
            title: 'Levi Brown',
            price: priceLevi,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Flevi%2Flevi4.jpeg?alt=media&token=1940ac9c-16ca-4b03-8834-d4c33bc683d0' ]
          },
          {
            id: uuidv4 (),
            title: 'Levi Gray',
            price: priceLevi,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Flevi%2Flevi2.jpeg?alt=media&token=1e86190b-2cfa-4f4c-b89d-3a235b08fc8d' ]
          },
          {
            id: uuidv4 (),
            title: 'Levi Graphite',
            price: priceLevi,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Flevi%2Flevi3.jpeg?alt=media&token=99687c2e-27eb-4437-9336-c4bb4bd0eee4' ]
          },
        ],
      },
      {
        title: 'Safary',
        info: 'good pram',
        types: [
          {
            id: uuidv4 (),
            title: 'Safari Brown',
            price: priceSafari,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari1.jpeg?alt=media&token=84d36563-250c-425c-b6e5-f4294d3d7b16' ]
          },
          {
            id: uuidv4 (),
            title: 'Safari Graphite',
            price: priceSafari,
            images: [
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari2.jpeg?alt=media&token=6ccd733e-8f72-43e5-8f80-d73ce85df77a',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari3.jpeg?alt=media&token=89b1010c-a29a-4f53-bca5-93ff81e19b30',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari4.jpeg?alt=media&token=fa96e808-e41b-4412-8084-2f38b9fef9f7',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari5.jpeg?alt=media&token=5ac06c7e-0cd0-4fba-86fe-05bf3495e60c'
            ]
          },
          {
            id: uuidv4 (),
            title: 'Safari Gray',
            price: priceSafari,
            images: [
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari6.jpeg?alt=media&token=547ed075-40ed-4e68-8122-ad3c9b41b68b',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari7.jpeg?alt=media&token=1b049e2e-2375-4a9d-847c-f77450fecf5f',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari8.jpeg?alt=media&token=7276310a-eee7-4c4a-a6e3-095b85c99497',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari9.jpeg?alt=media&token=576faed1-2964-46a5-9af6-5d1841f38fe9',
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari10.jpeg?alt=media&token=80cce530-134c-4f69-a457-48976e8900d6' ]
          },
          {
            id: uuidv4 (),
            title: 'Safari Blue',
            price: priceSafari,
            images: [
              'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari11.jpeg?alt=media&token=75135ab7-3099-435a-8e93-6f18d7654c50',
             'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari12.jpeg?alt=media&token=f9465e0f-758a-43a4-b52a-aa71a42b6682',
             'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/newStrollers%2Fsafari%2Fsafari13.jpeg?alt=media&token=3f71d4de-999c-42a5-8fb9-6fb4e52695f5'
            ]
          }
        ],
      }
    ]
  },
  newCarSeats: {
    id: 'newCarSeats',
    title: 'shopData.titles.newCarSeats',
    routeName: 'newCarSeats',
    items: [
      {
        title: 'Kite',
        info: 'good car seat',
        types: [
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite1.jpg?alt=media&token=f24187f1-4ed5-4e3e-a0e1-e5be2ed202f8' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite2.jpg?alt=media&token=11979da0-af2f-47aa-9801-1e2f8709aa6e' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite3.jpg?alt=media&token=c544ab36-d5fa-4a53-90db-4d84ffd969c2' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite4.jpg?alt=media&token=0aea67ec-dfcc-4bdc-8755-087ed4fa2007' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite5.jpg?alt=media&token=ab74e142-4ffa-405d-825c-48e871af86dc']
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite6.jpg?alt=media&token=973509dc-03a3-4e88-a6ee-7483f83fe101' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite7.jpg?alt=media&token=e95a43f8-7e48-40d7-b34d-396adece3079' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite8.png?alt=media&token=45479a9e-fcd2-4eb9-a5f1-6b09d4dcc24e' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: ['https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite9.jpg?alt=media&token=366a36a2-66c1-45a5-9050-17cc8ac6bf16' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite10.jpg?alt=media&token=b484797b-e57d-4fdb-b64e-d044621304c8' ]
          },
          {
            id: uuidv4 (),
            title: 'Kite',
            price: priceKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fkite%2Fkite11.jpg?alt=media&token=d931a8ff-9eba-49cc-ad9f-dce029c13304' ]
          },
        ],
      },
      {
        title: 'Carlo',
        info: 'good car seat',
        types: [
          {
            id: uuidv4 (),
            title: 'Carlo',
            price: priceCarlo,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fcarlo%2Fcarlo1.jpeg?alt=media&token=7c7dec71-92ea-4361-ac3b-0ea13b082858' ]
          },
          {
            id: uuidv4 (),
            title: 'Carlo',
            price: priceCarlo,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fcarlo%2Fcarlo2.jpeg?alt=media&token=3e31d882-57aa-4db7-adae-d545ddca52f5' ]
          },
          {
            id: uuidv4 (),
            title: 'Carlo',
            price: priceCarlo,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fcarlo%2Fcarlo3.jpeg?alt=media&token=018cb72c-6f39-40a0-81d1-45d31a02860a']
          },
          {
            id: uuidv4 (),
            title: 'Carlo',
            price: priceCarlo,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fcarlo%2Fcarlo4.jpeg?alt=media&token=50404b01-682e-4cc7-a8e9-d1f6303327cb' ]
          },
          {
            id: uuidv4 (),
            title: 'Carlo',
            price: priceCarlo,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fcarlo%2Fcarlo5.jpeg?alt=media&token=6bf2634d-6390-4903-86c5-5001267abdc4' ]
          },
          {
            id: uuidv4 (),
            title: 'Carlo',
            price: priceCarlo,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/carSeats%2Fcarlo%2Fcarlo6.jpeg?alt=media&token=dd86c74a-1b01-47df-9093-eb20d32ee6b4' ]
          },
        ],
      }
    ]
  },
  accessories: {
    id: 'accessories',
    title: 'shopData.titles.accessories',
    routeName: 'accessories',
    items: [
      {
        title: 'shopData.accessories.adaptersTitle.adapters',
        info: 'good adapter',
        types: [
          {
            id: uuidv4 (),
            title: 'shopData.accessories.adaptersTitle.adaptersKite',
            price: priceAdapterKite,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/accessories%2Fadapters%2Fadapter-kite.jpg?alt=media&token=56f0e6c3-aafe-46d7-b47a-a18cb8544b94' ]
          },
          {
            id: uuidv4 (),
            title: 'shopData.accessories.adaptersTitle.adaptersCarlo',
            price: priceAdapterCarlo,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/accessories%2Fadapters%2Fadapter-carlo.jpg?alt=media&token=9961b77a-ba03-4664-affb-6fd741c81a9e' ]
          },
          {
            id: uuidv4 (),
            title: 'shopData.accessories.adaptersTitle.adaptersGussio',
            price: priceAdapterGussio,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/accessories%2Fadapters%2Fadapter-gussio.jpg?alt=media&token=66dc73d9-26ed-46e5-96bb-37cc7b186b27']
          },
          {
            id: uuidv4 (),
            title: 'shopData.accessories.adaptersTitle.adaptersGalactic',
            price: priceAdapterGalactic,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/accessories%2Fadapters%2Fadapter-galactic.jpg?alt=media&token=2469b5dd-ba8b-4094-8137-6e05ee79a2d9' ]
          },
        ],
      },
      {
        title: 'shopData.accessories.camerasAndTires.title',
        info: 'good cameras and tires',
        types: [
          {
            id: uuidv4 (),
            title: 'shopData.accessories.camerasAndTires.cameras',
            price: priceCameras,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/accessories%2Fcameras%2Fcamera.jpg?alt=media&token=798591b7-618a-4a4e-adc9-90b2d5b5c596' ]
          },
          {
            id: uuidv4 (),
            title: 'shopData.accessories.camerasAndTires.tires',
            price: priceTires,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/accessories%2Ftires%2Ftire.jpg?alt=media&token=72c23e9e-f0f0-4248-901f-d60bc8517bd8' ],
          },
        ]
      },
      {
        title: 'shopData.accessories.mechanisms.title',
        info: 'mechanism',
        types: [
          {
            id: uuidv4 (),
            title: 'shopData.accessories.mechanisms.mechanism',
            price: priceMechanism,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/accessories%2Fmechanism%2Fmechanism.jpg?alt=media&token=cc5afad2-bebd-4447-9a6f-2174f40af4f8' ],
          },
        ]
      }
    ]
  },
  linens: {
    id: 'linens',
    title: 'shopData.titles.linens',
    routeName: 'linens',
    items: [
      {
        title: 'linens',
        info: 'good linens',
        types: [
          {
            id: uuidv4 (),
            title: 'Linens',
            price: priceLinens,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/linens%2Flinens1.jpeg?alt=media&token=b5cc66d1-17bd-43ed-870d-4ecbab67af71' ],
          },
          {
            id: uuidv4 (),
            title: 'Linens',
            price: priceLinens,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/linens%2Flinens2.jpeg?alt=media&token=88d62eff-7dd3-4790-9786-a1a171176b01' ],
          },
          {
            id: uuidv4 (),
            title: 'Linens',
            price: priceLinens,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/linens%2Flinens3.jpeg?alt=media&token=b07ce8c8-101c-4615-9d7f-f80a72c637d9' ],
          },
          {
            id: uuidv4 (),
            title: 'Linens',
            price: priceLinens,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/linens%2Flinens4.jpeg?alt=media&token=01cb43f8-0c5c-4478-ad92-22d3edae96d1' ],
          },
          {
            id: uuidv4 (),
            title: 'Linens',
            price: priceLinens,
            images: [ 'https://firebasestorage.googleapis.com/v0/b/active-baby-271312.appspot.com/o/linens%2Flinens5.jpeg?alt=media&token=695b5bb2-bcc9-4d0c-8993-45e651141503' ],
          },
        ],
      }
    ]
  }
};

export default SHOP_DATA;

