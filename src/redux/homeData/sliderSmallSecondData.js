import * as img  from '@assets/sliderSmallSecond';



export default ( content = 'Slide' ) => {

  const SLIDER_SMALL_SECOND_DATA = [
    {
      imageUrl: img.safariGray,
      title: 'Safari Gray',
      path: '#'
    },
    {
      imageUrl:img.safariGraphite,
      title: 'Safari Graphite',
      path: '#'
    },
    {
      imageUrl:img.safariBrown,
      title: 'Safari Brown',
      path: '#'
    },
    {
      imageUrl:img.safariBlue,
      title: 'Safari Blue',
      path: '#'
    },
    {
      imageUrl:img.leviGraphite,
      title: 'Levi Graphite',
      path: '#'
    },
    {
      imageUrl:img.leviGray,
      title: 'Levi Gray',
      path: '#'
    },
    {
      imageUrl:img.capriBlue,
      title: 'Capri Blue',
      path: '#'
    },
    {
      imageUrl:img.capriGold,
      title: 'Capri Gold',
      path: '#'
    },
    {
      imageUrl:img.capriBrown,
      title: 'Capri Brown',
      path: '#'
    },
    {
      imageUrl:img.capriGray,
      title: 'Capri Gray',
      path: '#'
    }
  ];


  return SLIDER_SMALL_SECOND_DATA.map ( ( item, idx ) => ({
    idx: idx + 1,
    content: `${ content } #${ idx + 1 }`,
    imageUrl : item.imageUrl,
    title: item.title,
    path: item.path,
    label : 'sliderSmallFirst.profit'
  }) );
};
