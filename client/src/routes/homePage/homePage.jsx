import './homePage.scss'
import SearchBar from "../../components/searchBar/SearchBar"

function HomePage(){
  return (
    <div className='homePage'>
        <div className="textcontainer">
            <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Labore tempora unde animi, iusto eligendi voluptatem doloribus sed tenetur 
                dignissimos tempore.
            </p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>2000</h1>
                    <h2>Property Ready</h2>
                </div>
                
            </div>
            </div>
        </div>
        <div className="imgcontainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage