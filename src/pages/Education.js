import './Education.css'
import Tile from '../components/Tile';
import './Education.css'
import cap from '/home/suswetha/webdev/src/resources/cap.webp';
import study from '/home/suswetha/webdev/src/resources/study.webp';
import NavBar from '../components/NavBar';
import Socialicons from '../components/Socialicons';
function Education(){
  return(
    <>
    <NavBar/>
    <div className='Econtainer'>
      <div className='Educontainer'>
        <h1>EDUCATION</h1>;
        <div className='tileContainer'>
        <Tile 
          bgColor={'orange'}
          img={cap}
          header={'2008-2014'}
          paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia aut similique'} 
        />

        <Tile 
          bgColor={'orange'}
          img={cap}
          header={'2014-2020'}
          paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia aut similique'} 
        />
        
        <Tile 
          bgColor={'orange'}
          img={cap}
          header={'2020-2022'}
          paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia aut similique'} 
        />

        <Tile 
          bgColor={'orange'}
          img={cap}
          header={'2022-2024'}
          paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia aut similique'} 
        />

        </div>

      </div>
      <div className='EduImage'>
        <img src={study}/>
      </div>
      <Socialicons 
      bgColorIcon ={'orange'}/>
    </div>
    </>
  )
    
  
}
export default Education;