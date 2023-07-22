import { FC, ReactNode, useState } from 'react'
import styles from './admin.module.scss'

interface IAdminProps {
  children: ReactNode
}

const AdminPanel: FC<IAdminProps> = ({ children }) => {


  return (
    <div className={styles.adminPanel}>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  )
}

export default AdminPanel
