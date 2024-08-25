import 'App.css';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summaryAPI from 'common';
function App() {
  const fetchUserDetail = async(e) =>{
    const dataReponse = await fetch(summaryAPI.current_user.url,{
      method: summaryAPI.current_user.method,
      credentials: "include"
    })
    const dataApi = await dataReponse.json()
    console.log("data: ",dataApi)
  }
  useEffect(()=>{
    fetchUserDetail()
  }
  )
  return (
    <div className='flex flex-col min-h-screen'>
      <ToastContainer />
      <Header/>
      <main className='flex-1'>
        <Outlet/>
      </main>
      <Footer/>
    </div>

  );
}

export default App;
