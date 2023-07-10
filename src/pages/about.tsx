import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GraphAPI from '@/service/graphQL'

function about({themeoptions}:any) {
    return(
        <>
        <Header themeoptions={themeoptions}/>
        <section className="hero-banner sub-banner">
        <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
                <div className="col-md-8" data-aos="fade" data-aos-delay="50">
                    <div className="page-heading">About Us</div>
                    <h1>
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-1 d-inline-block">We are people making</span>
                        </span>
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-2 d-inline-block">products for</span>
                        </span> 
                        <span className="overflow-hidden d-inline-block title-one p-1">
                            <span className="overflow-hidden text-ani-one">people.</span> 
                        </span>
                        <span className="overflow-hidden d-inline-block">
                            <span className="anim-gsap-3 d-inline-block"><strong>Best In Class</strong></span>
                        </span>
                    </h1>
                </div>

                <div className="col-md-4">
                    <div className="hero-img">
                        <img src="assets/images/hero-shape.svg" alt="img" />
                    </div>
                </div>
            </div>
        </div>

        <div className="top-content mt-3 mt-xl-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>We’re a diverse group of designers, strategists, engineers and wordsmiths who make things people love to use. We help the world’s most progressive brands solve problems, seize opportunities and generate growth.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Footer themeoptions={themeoptions}/>
        </>
    )
}

export async function getStaticProps() {
    const themeOptions = await GraphAPI.themeOptions();
    const homepagedata = await GraphAPI.homePage();
    return {
        props: {
            themeoptions: themeOptions.data.data,
            homepagedata: homepagedata.data.data
        }
    }
  }
export default about;