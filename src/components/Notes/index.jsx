import LandingPage from "components/LandingPage"
import NotePage from "components/NotePage"

const Notes = () => {
  return <>
    {
      window.localStorage.getItem('token') === null
        ? <LandingPage />
        : <NotePage />
    }
    
  </>
}

export default Notes
