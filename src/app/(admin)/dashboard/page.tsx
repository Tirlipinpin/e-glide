import { FC, ReactNode } from "react"

interface IDashboardProps {
  children: ReactNode
}

const Dashboard: FC<IDashboardProps> = ({ children }) => {
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
