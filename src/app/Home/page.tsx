import About from "../About/page";




export default function Home(){
    return (
    <div>
        <section id="Home">
            <div className="home-heading">
                <h1>Hello I am Ahmed</h1>
            </div>

            <div  className="home-content">
                <p>Hye..! I am A Front-end and Back-end Developer. Learning Cloud Native Generative AI from 
                    GIAIC (Governor Intiative Artifical Intelligence Computing). Learning Typescipt, JavaScript, Python, Next Js.
                </p>
            </div>

            <div  className="home-button">
                <a href="cv.html" target="_blank">
                    <button>View CV</button>
                </a>
            </div>

        </section>
        <About></About>
    </div>
    );
}