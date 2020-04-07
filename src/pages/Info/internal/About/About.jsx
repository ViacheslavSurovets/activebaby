import React from 'react';
import { Paragraph } from '@commonStyles';
import { TextBlue, TextPink } from '../../styles';

const About = ( props ) => (
  <>
    <Paragraph>
      <TextBlue>ACTIVE</TextBlue> <TextPink>BABY</TextPink> - первый в Гродно магазин, где вы можете купить б/у
      (модульные) коляски для детей. Так же реализуются в наличии и под заказ новые коляски и автолюльки фирмы "ADAMEX".
    </Paragraph>
    <Paragraph>👍Рассрочка по карте "ХАЛВА"</Paragraph>
    <Paragraph>👍 наличии:</Paragraph>
    <Paragraph>✔модульные коляски (2 в 1 и 3 в 1);</Paragraph>
    <Paragraph>✔прогулочные коляски(новые);</Paragraph>
    <Paragraph>✔автолюльки с адаптерами под вашу коляску.</Paragraph>

    <Paragraph>г.Гродно, ул.Курчатова 47🏡</Paragraph>
    <Paragraph>Пн-Пт. 11.00-19.00⌛</Paragraph>
    <Paragraph>Сб.,Вс. выходной🎈</Paragraph>
  </>
);

export default About;
