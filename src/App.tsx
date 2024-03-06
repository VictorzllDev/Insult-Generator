import { Header, Modal } from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <>
      <Header />
      <Modal />
      <ToastContainer />
    </>
  )
}
