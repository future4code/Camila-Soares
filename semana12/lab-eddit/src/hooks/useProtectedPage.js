import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToLoginPage } from '../routes/Cordinators'

const useProtectedPage = () => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
        goToLoginPage(history)
    }
  }, [history])
}

export default useProtectedPage
