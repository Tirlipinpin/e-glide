'use client'

import { FC } from 'react'

import styles from './filterBar.module.scss'

import filterCategories from './filters.json'

interface IFilterBarProps {
  dict: any
}

export const FilterBar: FC<IFilterBarProps> = ({ dict }) => {
  const handleFilterSelect = (id: string) => {
    console.log('filtered on ', id)
  }

  return (
    <section className={styles.filterBar}>
      <h3>{dict['categories']}</h3>
      <div className={styles.categoriesContainer}>
        {filterCategories?.map((category) => (
          <div key={category.id} className={styles.categoryContainer}>
            <h4>{category.label}</h4>
            <ul className={styles.category}>
              {category.filters?.map((filter) => (
                <li key={filter.id} className={styles.filter}>
                  <input
                    type='checkbox'
                    id={filter.id}
                    onChange={() => handleFilterSelect(filter.id)}
                    className={styles.checkbox}
                  />
                  <label htmlFor={filter.id}>{filter.label}</label>
                </li>
              ))}
            </ul>
            <div className={styles.overflowEffect} />
          </div>
        ))}
      </div>
    </section>
  )
}
