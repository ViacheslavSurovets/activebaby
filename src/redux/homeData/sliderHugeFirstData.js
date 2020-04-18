import { sliderHugeFirst_4, sliderHugeFirst_3, sliderHugeFirst_2, sliderHugeFirst_1 } from '@assets/sliderHugeFirst';

export default ( content = 'Slide' ) => {

  const SLIDER_HUGE_FIRST_DATA = [
    {
      title: 'Adamex',
      imageUrl: sliderHugeFirst_1,
      path: '#',
      popUp: {
        info: 'info',
        title: 'Title',
        text: 'text',
        button: 'button'
      }
    },
    {
      title: 'Adamex',
      imageUrl: sliderHugeFirst_2,
      path: '#',
      popUp: {
        info: 'info',
        title: 'Title',
        text: 'text',
        button: 'button'
      }
    },
    {
      title: 'Cristiano',
      imageUrl: sliderHugeFirst_3,
      path: '#',
      popUp: {
        info: 'ttt',
        title: 'ageag',
        text: 'text',
        button: 'button'
      }
    },
    {
      title: 'Chantal',
      imageUrl: sliderHugeFirst_4,
      path: '#',
      popUp: {
        info: 'ttt',
        title: 'ageag',
        text: 'text',
        button: 'button'
      }
    }
  ];


  return SLIDER_HUGE_FIRST_DATA.map ( ( item, idx ) => ({
    idx: idx + 1,
    content: `${ content } #${ idx + 1 }`,
    imageUrl: item.imageUrl,
    title: item.title,
    path: item.path,
    popUpData: {
      info: item.popUp.info,
      title: item.popUp.title,
      text: item.popUp.text,
      button: item.popUp.button
    }
  }) );

};
