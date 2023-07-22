import { FC, ReactNode } from "react"

interface IDirectoryProps {
  children: ReactNode
}

const Directory: FC<IDirectoryProps> = ({ children }) => {
  return (
    <div>
      Directory
    </div>
  )
}

export default Directory
