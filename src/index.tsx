import { lazy, Suspense } from 'react'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './redux/store'
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
)
