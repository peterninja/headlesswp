import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import GraphAPI from '@/service/graphQL'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home({themeoptions,homepagedata}:any) {

      const settingsTopSlider = {
        // Install modules
        modules: [Autoplay],
        slidesPerView:'auto' as 'auto',
        // allowTouchMove: false,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
          delay: 1000,
        },
        disableOnInteraction: true,
        breakpoints: {
            300: {
              spaceBetween: 10,
            },
            767: {
              spaceBetween: 20,
            },
          }
      };
      const settingsBottomSlider = {
        modules: [Autoplay],
        slidesPerView : 'auto' as 'auto',
        // allowTouchMove: false,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
          delay: 1000,
          reverseDirection: true
        },
        disableOnInteraction: true,
        breakpoints: {
            300: {
              spaceBetween: 10,
            },
            767: {
              spaceBetween: 20,
            },
          }
      };
    const homedata = homepagedata.pageBy.homepage;
    const counterData = homedata.counter;
    const topIndustrySlider = homedata.topIndustrySlider;
    const bottomIndustrySlider = homedata.bottomIndustrySlider;
  return (
    <>
      <Header themeoptions={themeoptions}/>
        <section className="hero-banner">
            <div className="container">
                <div className="row justify-content-md-between justify-content-center align-items-center">
                    <div className="col-md-10" data-aos="fade" data-aos-delay="50">
                        <h1>
                            {homedata.textLine1 && (
                                <span className="overflow-hidden d-inline-block">
                                    <span className="anim-gsap-1 d-inline-block">{homedata.textLine1}</span>
                                </span> 
                            )}
                            {homedata.textLine2 && (
                                <span className="overflow-hidden d-inline-block title-one pb-1">
                                    <span className="overflow-hidden text-ani-one">{homedata.textLine2}</span> 
                                </span>
                            )}
                            {homedata.textLine3 && (
                                <span className="overflow-hidden d-inline-block">
                                    <span className="anim-gsap-2 d-inline-block">{homedata.textLine3}</span>
                                </span>
                            )}
                            {homedata.textLine4 && (
                                <span className="overflow-hidden d-inline-block">
                                    <span className="anim-gsap-3 d-inline-block">{homedata.textLine4}</span>
                                </span>
                            )}
                            {homedata.textLine5 && (
                                <span className="overflow-hidden d-block">
                                    <span className="anim-gsap-4 d-inline-block">
                                        <strong><span id="changingword">{homedata.textLine5}</span></strong>
                                    </span>
                                </span>
                            )}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section>
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-8">
                    <div className="who-we-info secondary-light-bg">
                        <h2 data-aos="fade-up">{homedata.wHeading}</h2>
                        <h3 data-aos="fade-up">{homedata.wSubHeading}</h3>
                        <p dangerouslySetInnerHTML={{__html:homedata.wDescription}} />
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                    <div className="who-we-img wrapper-gsap" data-aos="fade" data-aos-delay="50">
                        {homedata.wImage.mediaItemUrl &&(
                            <img src={homedata.wImage.mediaItemUrl} alt=""/>
                        )}
                        {counterData &&(
                        <div className="counters p-xl-4 p-md-3 p-2" id="counter">
                            {counterData.map((counterItem: any,index: any) => {
                            // console.log(index);
                            return (
                                <div className="counter-info" key={index}>
                                    <div className="number"><span className="counter-value" data-count={counterItem.counterNumber}>{counterItem.counterNumber}</span>+</div>
                                    <div className="counter-name">{counterItem.counterName}</div>
                                </div>
                                );
                            })}
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="section-space pt-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12 served-industries-outer">
                <h2>{homedata.iHeading}</h2>
                <div className="swiper-container industry-slide-top mt-xl-5 mt-4">
                    <Swiper className="swiper-wrapper" {...settingsTopSlider}>
                            {topIndustrySlider.map((topsliderItem: any,index: any) => {
                                return(
                                <SwiperSlide>
                                    <a className="served-link" href="#">
                                        {topsliderItem.industryName}
                                    </a>
                                </SwiperSlide>
                                );
                            })}

                        {/* <SwiperSlide>
                            <a className="served-link" href="#">
                                UI&UX
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="served-link" href="#">
                                BRANDING
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="served-link" href="#">
                                FRONT-END DEVELOPMENT
                            </a>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
                <div className="swiper-container industry-slide-bottom mt-4">
                    <Swiper className="swiper-wrapper" {...settingsBottomSlider}>
                            {bottomIndustrySlider.map((bottomsliderItem: any,index: any) => {
                                return(
                                <SwiperSlide>
                                    <a className="served-link" href="#">
                                        {bottomsliderItem.industryName}
                                    </a>
                                </SwiperSlide>
                                );
                            })}
                        {/* <SwiperSlide>
                            <a className="served-link" href="#">
                                UI&UX
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="served-link" href="#">
                                BRANDING
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a className="served-link" href="#">
                                FRONT-END DEVELOPMENT
                            </a>
                        </SwiperSlide> */}
                    </Swiper>
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