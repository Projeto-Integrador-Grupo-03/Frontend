import './Home.css'
import carroLogo from '../../assets/carroLogo.jpg'


function Home() {
    return (
        <>
        <div className="bg-gray-800 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo ao futuro!</h2>
              <p className='text-xl'>Onde você vai andar com responsabilidade</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-black py-2 px-4'>Veja nossos catálogos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={carroLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;