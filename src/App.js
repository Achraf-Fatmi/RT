
import './App.css';
import pic1 from "./pic1.jpg"
import './style.css'

function App() {
  return (
    <div className="App" >
     
      
      <div style={{border: "solid 1px black" ,maxWidth:"100vw"}}>

<h1 className='title red'>Your name here</h1>


 <img src="./pic2.jpg" alt='randompic' />

<br/>
 <img src={pic1} alt='randompic2' />


</div>

<iframe width="320" height="240" src="https://www.youtube.com/embed/fD2UExUhq-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



    </div>
  );
}

export default App;
