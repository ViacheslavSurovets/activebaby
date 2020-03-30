import { cristiano, chantal, adamex } from '@assets/sliderMain';

export default ( content = 'Slide' ) => {

  const dataSliderMain = [
    {
      url:cristiano,
      title: 'Cristiano',

    },
    {
      url:chantal,
      title: 'Chantal'
    },
    {
      url:adamex,
      title: 'Adamex'
    },
  ];


  return dataSliderMain.map ( ( item, idx ) => ({
    idx: idx + 1,
    content: `${ content } #${ idx + 1 }`,
    url : item.url,
    title: item.title,
    label : 'label'
  }) );
};
