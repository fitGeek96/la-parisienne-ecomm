import React from 'react'

import classes from './index.module.scss'
import Link from 'next/link'
import { Category, Media } from '../../../../payload/payload-types'

const CategoryCard = ({ category }: { category: Category }) => {
  const media = category.media as Media
  return (
    <Link
      href={'/products'}
      className={classes.card}
      style={{ backgroundImage: `url(${media.url})` }}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
