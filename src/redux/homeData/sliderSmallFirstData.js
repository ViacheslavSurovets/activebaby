import * as img  from '@assets/sliderSmallFirst';



export default ( content = 'Slide' ) => {

  const SLIDER_SMALL_FIRST_DATA = [
    {
      imageUrl: img.cristiano,
      title: 'Cristiano',
      path: '#'
    },
    {
      imageUrl:img.neonex,
      title: 'Chantal',
      path: '#'
    },
    {
      imageUrl:img.monte,
      title: 'Adamex',
      path: '#'
    },
    {
      imageUrl:img.sierra,
      title: 'Adamex',
      path: '#'
    },
    {
      imageUrl:img.riccio,
      title: 'Adamex',
      path: '#'
    },
    {
      imageUrl:img.massimo,
      title: 'Adamex',
      path: '#'
    },
    {
      imageUrl:img.benita,
      title: 'Adamex',
      path: '#'
    },
    {
      imageUrl:img.chantal,
      title: 'Adamex',
      path: '#'
    },
    {
      imageUrl:img.barcelona,
      title: 'Adamex',
      path: '#'
    },
    {
      imageUrl:img.barletta,
      title: 'Adamex',
      path: '#'
    },
    {
      imageUrl:img.giano,
      title: 'Adamex',
      path: '#'
    }
  ];


  return SLIDER_SMALL_FIRST_DATA.map ( ( item, idx ) => ({
    idx: idx + 1,
    content: `${ content } #${ idx + 1 }`,
    imageUrl : item.imageUrl,
    title: item.title,
    path: item.path,
    label : 'sliderSmallSecond.label'
  }) );
};
