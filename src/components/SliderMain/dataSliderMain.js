import { cristiano, chantal, adamex } from '@assets/sliderMain';

export default ( content = 'Slide' ) => {

  const slideData = [
    {
      title: 'Adamex',
      url: adamex,
      popUp: {
        info: 'info',
        title: 'Title',
        text: 'text',
        button: 'button'
      }
    },
    {
      title: 'Cristiano',
      url: cristiano,
      popUp: {
        info: 'ttt',
        title: 'ageag',
        text: 'text',
        button: 'button'
      }
    },
    {
      title: 'Chantal',
      url: chantal,
      popUp: {
        info: 'ttt',
        title: 'ageag',
        text: 'text',
        button: 'button'
      }
    }
  ];


  return  slideData.map ( ( item, idx ) => ({
    idx: idx + 1,
    content: `${ content } #${ idx + 1 }`,
    url : item.url,
    title: item.title,
    popUpData: {
      info: item.popUp.info,
      title: item.popUp.title,
      text: item.popUp.text,
      button: item.popUp.button
    }
  }) );

};
