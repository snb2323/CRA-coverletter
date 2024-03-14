import React from "react";
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub, FaFigma, } from "react-icons/fa";
// import { BsLink45Deg } from "react-icons/bs";
import { HiLink } from "react-icons/hi2";


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';


export default function Project() {



    return (
        <>
            <div className="pjc">
                <div className='project d-flex justify-content-center align-items-center mt-5'>
                    <Link to="projectsSection" smooth={true} duration={500}></Link>

                    <h1 id="projectsSection">
                        Projects
                    </h1>
                </div>

                <Swiper
                    modules={[Navigation,]}
                    navigation
                    pagination={{ clickable: true }}
                    className="d-md-flex  mt-4 mx-5"
                >
                    <SwiperSlide>
                        <div className="phtoflilo container d-lg-flex justify-content-center align-items-center flex-lg-row-reverse ">
                            <div className="works col-10 col-lg-6 mx-auto">
                                <div className="period b-flex">
                                    <h4 className="pt-5"> <span># 개인프로젝트</span> / <span className="prohece">아인서점</span>
                                    </h4>
                                    <p className="wors">
                                        독립서점 웹 프로젝트를 선정한 이유는 다른 서점들과 달리 <br></br>편안하고 직관적인 디자인으로 사용자들이 쉽게 원하는 작품을 <br></br>찾을 수 있는 경험을 제공하고자 했습니다. 또한,  <br></br> 독자들 간의 소통을 촉진하는 리뷰 및 추천 기능을 도입하여 더욱 풍부한 사용자 경험을 제공하고자 합니다.
                                    </p>
                                </div>


                                <div className="period  pt-5 b-flex ">
                                    <h4># Period</h4>
                                    <p>2022.02.10 ~ 2022.03.15</p>
                                </div>
                                <div className="period  pt-5 b-flex ">
                                    <h4># Tech</h4>
                                    <p> - React<br></br>
                                        -Javascript <br></br>
                                        - Node.js<br></br>
                                        - mysql<br></br>
                                        - SCSS<br></br>
                                        - Styled-components<br></br>
                                        - Bootstrap 4.6.2<br></br>
                                        - bootsstrap icon 1.11.1<br></br>
                                        - Swiper 11<br></br>
                                    </p>
                                </div>
                                <div className="period b-flex">

                                </div>
                                <div className="backicon d-flex ">
                                    <a href="https://github.com/snb2323/portfolio" target="blank"> <FaGithub className=" mb-3"></FaGithub></a>
                                    <a href="https://www.figma.com/file/3ePwKovJqYTbLRALUgC49p/%EA%B0%9C%EC%9D%B8%ED%8F%AC%ED%8F%B4?type=design&node-id=0%3A1&mode=dev&t=092PlsjjVsTcTqbL-1" target="blank">   <FaFigma className="mx-3 mb-3"></FaFigma></a>
                                    <a href="https://www.notion.so/1e7173072d194f90a7c2f3a8bb04b2ce"> <img src="./img/notion.svg" className="notionimg"></img></a>
                                    <a href="http://ainbook.cafe24app.com/" target="blank">
                                        <HiLink className="sitelink" />
                                    </a>
                                </div>
                            </div>

                            <div className="works col-lg-6 py-5 py-lg-0 d-flex justify-content-center">
                                <img className="worksimg col-lg-8 col-8 my-5 my-lg-0" src="../project/ainproject.png" alt="ainbook" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="phtoflilo container d-lg-flex justify-content-center align-items-center flex-lg-row-reverse ">
                            <div className="works col-10 col-lg-6 mx-auto">
                                <div className="period b-flex">
                                    <h4 className="pt-5"> <span># 개인프로젝트</span> / <span className="prohece">CRA SPA자소서</span>
                                    </h4>
                                    <p className="petwors">

                                    </p>
                                </div>


                                <div className="period  pt-5 b-flex ">
                                    <h4># Period</h4>
                                    <p>2022.02.10 ~ 2022.03.15</p>
                                </div>
                                <div className="period  pt-5 b-flex ">
                                    <h4># Tech</h4>
                                    <p> - React<br></br>
                                        -Javascript <br></br>
                                        - Node.js<br></br>
                                        - mysql<br></br>
                                        - SCSS<br></br>
                                        - Styled-components<br></br>
                                        - Bootstrap 4.6.2<br></br>
                                        - bootsstrap icon 1.11.1<br></br>
                                        - Swiper 11<br></br>
                                    </p>
                                </div>
                                <div className="period b-flex">

                                </div>
                                <div className="backicon d-flex ">
                                    <a href="https://github.com/snb2323/portfolio" target="blank"> <FaGithub className=" mb-3"></FaGithub></a>
                                    <a href="https://www.figma.com/file/3ePwKovJqYTbLRALUgC49p/%EA%B0%9C%EC%9D%B8%ED%8F%AC%ED%8F%B4?type=design&node-id=0%3A1&mode=dev&t=092PlsjjVsTcTqbL-1" target="blank">   <FaFigma className="mx-3 mb-3"></FaFigma></a>
                                    <a href="https://www.notion.so/1e7173072d194f90a7c2f3a8bb04b2ce"> <img src="./img/notion.svg" className="notionimg"></img></a>
                                    <a href="http://ainbook.cafe24app.com/" target="blank">
                                        <HiLink className="sitelink" />
                                    </a>
                                </div>
                            </div>

                            <div className="works col-lg-6 py-5 py-lg-0 d-flex justify-content-center">
                                <img className="worksimg col-lg-8 col-8 my-5 my-lg-0" src="../project/lee1.png" alt="ainbook" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="phtoflilo container d-lg-flex justify-content-center align-items-center flex-lg-row-reverse ">
                            <div className="works col-10 col-lg-6 mx-auto">
                                <div className="period b-flex">
                                    <h4 className="pt-5"> <span># 팀프로젝트</span> / <span className="prohece">하림펫푸드 홍보&체험사이트</span>
                                    </h4>
                                    <p className="petwors">
                                        반려동물을 키우는 비율이 늘어나고 있는 오늘날,
                                        펫푸드를 선호하는 반려인들의 소비경향은 당분간 상승될 것으로 보였고.
                                        특히 요즘 세대들은 기존 세대들보다 반려동물을 더 가족같이 여기는 경향이 높기에,
                                        건강한 먹거리에 관한 관심과  반려동물도 그대로 누리게 해 주고 싶은 성향이 강하다고 생각합니다.
                                        펫푸드를 구매하는 데에 있어서도 관심들이 높고 구매를 주저하지 않는다 생각합니다
                                    </p>
                                </div>


                                <div className="period  pt-5 b-flex ">
                                    <h4># Period</h4>
                                    <p>2022.02.10 ~ 2022.03.15</p>
                                </div>
                                <div className="period  pt-5 b-flex ">
                                    <h4># Tech</h4>
                                    <p> - React<br></br>
                                        -Javascript <br></br>
                                        - Node.js<br></br>
                                        - mysql<br></br>
                                        - SCSS<br></br>
                                        - Styled-components<br></br>
                                        - Bootstrap 4.6.2<br></br>
                                        - bootsstrap icon 1.11.1<br></br>
                                        - Swiper 11<br></br>
                                    </p>
                                </div>
                                <div className="period b-flex">

                                </div>
                                <div className="backicon d-flex ">
                                    <a href="https://github.com/snb2323/portfolio" target="blank"> <FaGithub className=" mb-3"></FaGithub></a>
                                    <a href="https://www.figma.com/file/3ePwKovJqYTbLRALUgC49p/%EA%B0%9C%EC%9D%B8%ED%8F%AC%ED%8F%B4?type=design&node-id=0%3A1&mode=dev&t=092PlsjjVsTcTqbL-1" target="blank">   <FaFigma className="mx-3 mb-3"></FaFigma></a>
                                    <a href="https://www.notion.so/1e7173072d194f90a7c2f3a8bb04b2ce"> <img src="./img/notion.svg" className="notionimg"></img></a>
                                    <a href="http://ainbook.cafe24app.com/" target="blank">
                                        <HiLink className="sitelink" />
                                    </a>
                                </div>
                            </div>

                            <div className="works col-lg-6 py-5 py-lg-0 d-flex justify-content-center">
                                <img className="worksimg col-lg-8 col-8 my-5 my-lg-0" src="../project/petfood.png" alt="ainbook" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div >
        </>
    );
}
