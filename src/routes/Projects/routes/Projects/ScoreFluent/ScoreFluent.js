import React from 'react'

import RandomText from '../../../../../components/RandomText'
import classes from '../../../styles/Project.scss'

export const scoreFluent = () => (
  <div className={classes.projectContainer}>
    <RandomText
      text='Score Fluent'
      className={classes.title}
      width={500}
      fontHeight={40}
      animationSpeed={1300}
      animationDuration={2000}
      animate='in' />
    <img className={classes.image} src='http://placehold.it/500x500' />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minima
      ullam officia ut cum iusto veritatis in officiis, facilis ratione
      excepturi unde delectus itaque eaque vitae voluptatem, sit nobis nostrum
      consequuntur maxime pariatur, eligendi cupiditate. Quidem laborum, ut,
      autem iusto corporis illum, nesciunt eos eligendi ipsum tempore expedita,
      harum maxime.
    </p>
    <p>
      Quisquam eveniet adipisci cupiditate, in eum deleniti ex suscipit error
      doloribus odio. Numquam voluptatibus fuga similique animi minima
      consectetur omnis, tempore, itaque culpa. Facilis ipsa facere voluptatibus
      enim voluptates nemo iste totam in iure sint inventore, esse voluptate
      laboriosam velit, fugit, maxime possimus itaque quidem quibusdam odit
      voluptas modi id!
    </p>
    <p>
      Esse quos optio voluptatibus voluptate nostrum reprehenderit earum
      inventore. Ducimus voluptas maxime ipsum libero. Maiores aliquam, hic
      ducimus libero non distinctio vero ex provident, alias omnis! Soluta
      corporis, architecto voluptates quo beatae, facere, quasi eos laudantium
      voluptatibus quibusdam veniam consequuntur tempora nostrum porro nulla
      repudiandae quidem dolorem. Voluptates, molestiae, reprehenderit.
    </p>
    <hr />
    <RandomText
      text='Stack'
      className={classes.title}
      width={500}
      fontHeight={40}
      animationSpeed={1300}
      animationDuration={2000}
      animate='in' />
    <div className={classes.stackContainer}>
      <img src='http://placehold.it/50x50' alt='blah' />
      <img src='http://placehold.it/50x50' alt='blah' />
      <img src='http://placehold.it/50x50' alt='blah' />
      <img src='http://placehold.it/50x50' alt='blah' />
      <img src='http://placehold.it/50x50' alt='blah' />
      <img src='http://placehold.it/50x50' alt='blah' />
      <img src='http://placehold.it/50x50' alt='blah' />
      <img src='http://placehold.it/50x50' alt='blah' />
      <img src='http://placehold.it/50x50' alt='blah' />
    </div>
  </div>
)

export default scoreFluent
