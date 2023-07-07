import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GraphAPI from '@/service/graphQL'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({themeoptions}:any) {
    console.log(themeoptions);
  return (
    <>
      <Header themeoptions={themeoptions}/>
      <section className="section-space pt-0">
        <div className="container">
            <div className="row d-none d-md-block">
                <div className="col-12">
                    <hr className="m-0"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 blog-outer-line mt-4 mt-md-0">
                    <div className="blog-block">
                        <div className="img-tag wrapper-gsap">
                            <img src="assets/images/blog1.webp" alt=""/>
                            <div className="cover"></div>
                        </div>
                        <div className="info">
                            <div className="post">Web Development</div>
                            <a title="FD Forex Platform" href="#"><h3>FD Forex Platform</h3></a>
                            <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war. Tolle Unterstützung, ich würde immer wieder mit Lavorg zusammenarbeiten.</p>
                            <div className="pt-2 mt-auto">
                                <a className="viewLink" href="#">Ream more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 blog-outer-line mt-4 mt-md-0">
                    <div className="blog-block">
                        <div className="img-tag wrapper-gsap">
                            <img src="assets/images/blog2.webp" alt=""/>
                            <div className="cover"></div>
                        </div>
                        <div className="info">
                            <div className="post">Web Development</div>
                            <a title="Adobe Firefly: Early Access Release" href="#"><h3>Adobe Firefly: Early Access Release</h3></a>
                            <p>Lavorg war superschnell und hatte sogar eine zusätzliche Lösung parat, obwohl die Aufgabe eigentlich schon erledigt war</p>
                            <div className="pt-2 mt-auto">
                                <a className="viewLink" href="#">Ream more</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </section>

      <section className="hero-banner">
        <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
                <div className="col-md-10" data-aos="fade" data-aos-delay="50">
                    <h1>
                        <span className="overflow-hidden d-inline-block"><span className="anim-gsap-1 d-inline-block">Revolutionizing</span></span> <span className="overflow-hidden d-inline-block title-one pb-1"><span className="overflow-hidden text-ani-one">the way</span> </span>
                        <span className="overflow-hidden d-inline-block"><span className="anim-gsap-2 d-inline-block">businesses operate in the</span></span> 
                        <span className="overflow-hidden d-inline-block"><span className="anim-gsap-3 d-inline-block">digital world with &ensp;</span></span>
                        <span className="overflow-hidden d-block"><span className="anim-gsap-4 d-inline-block"><strong><span id="changingword">Software Development</span></strong></span></span>
                    </h1>
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
    // const themeOption = await themeOptions.json();
    return {
        props: {
            themeoptions: themeOptions.data.data,
        }
    }
  }