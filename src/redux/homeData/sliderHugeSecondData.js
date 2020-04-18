import { sliderHugeSecond_1,sliderHugeSecond_2,sliderHugeSecond_3,sliderHugeSecond_4 } from '@assets/sliderHugeSecond';

export default ( content = 'Slide' ) => {

  const SLIDER_HUGE_FIRST_DATA = [
    {
      title: 'Adamex',
      imageUrl: sliderHugeSecond_1,
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
      imageUrl: sliderHugeSecond_2,
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
      imageUrl: sliderHugeSecond_3,
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
      imageUrl: sliderHugeSecond_4,
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
