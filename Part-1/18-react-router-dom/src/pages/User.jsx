import { useParams } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function User() {
    const {userId} = useParams()
    const { darkMode } = useTheme()
  return (
    <div 
        className={`
            min-h-screen
            px-[8%]
            py-25
            flex
            items-center
            transition-all
            duration-300
            max-[800px]:px-6.25
            max-[800px]:py-17.5

            ${
            darkMode
                ? "bg-[#080808] text-white"
                : "bg-[#f5f5f5] text-black"
            }
        `}
    >
      User: {userId}
    </div>
  )
}

export default User
