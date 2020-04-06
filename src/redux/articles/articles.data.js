import { v4 as uuidv4 } from 'uuid';

export const ARTICLES_DATA = {
  howToChoosePram: {
    id: uuidv4 (),
    title: 'articles.howToChoosePram.title',
    content: 'articles.howToChoosePram.content',
    routePath: '/articles/howToChoosePram'
  },
  howToChooseLinen: {
    id: uuidv4 (),
    title: 'articles.linenSelection.title',
    content: 'articles.linenSelection.content',
    routePath: '/articles/howToChooseLinen'
  },
  interesting: {
    id: uuidv4 (),
    title: 'articles.interesting.title',
    content: 'articles.interesting.content',
    routePath: '/articles/interesting'
  },
};
