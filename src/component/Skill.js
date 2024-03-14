import React from "react";


export default function Skill() {
    return (
        <>
            <div className="sli container px-5">
                <div className='skill m-5 '>
                    <h1 id="skillsSection">Skills</h1>
                </div>
                <div className='skillimg d-flex row mx-0 mb-5  justify-content-center align-items-center text-align-center'>
                    <div className='tp text-center col-md-4 col-10 '>
                        <img src="../img/react.svg" alt="" />
                        <div className="skillstext">
                            <div className="skkikls d-flex flex-column">
                                <p>React(70%)</p>
                                <p className="sks"># 동적이고 효율적인 사용자 인터페이스를 개발하는 데 특화되었습니다.</p>
                                <p className="sks"># 컴포넌트 기반 아키텍처를 적극 활용하여 모듈화된 코드 작성에 주력하였습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className='tp text-center col-md-4 col-10 '>
                        <img src="../img/js.svg" alt="" />
                        <div className="skillstext">
                            <p>JavaScript(70%)</p>
                            <p className="sks"># 동적이고 상호작용하는 웹 애플리케이션을 개발했습니다.</p>
                            <p className="sks"># 비동기 작업을 처리하여 데이터 흐름을 효율적으로 관리했습니다. </p>
                        </div>
                    </div>
                    <div className='tp text-center col-md-4 col-10 '>
                        <img src="../img/jquery.svg" alt="" />
                        <div className="skillstext">
                            <p>Jquery(70%)</p>
                            <p className="sks"># 특정 기능을 빠르게 구현하여 프로젝트 개발 속도를 향상시켰습니다. </p>
                            <p className="sks"># 현재는 jQuery 대신에 더 현대적이고 효율적인 기술 스택을 선호하고 있습니다.</p>
                        </div>
                    </div>

                    <div className='tp text-center col-md-4 col-10 '>
                        <img src="../img/html.svg" alt="" />
                        <div className="skillstext">
                            <p>HTML/CSS(70%)</p>
                            <p className="sks"># 웹 표준을 준수하며, 웹 접근성을 고려하여 사용자 친화적인 디자인을 제작. </p>
                            <p className="sks"># 다양한 디바이스에서 일관된 UI/UX를 제공하기 위해 반응형 웹 디자인에 중점. </p>
                        </div>
                    </div>
                    <div className='tp text-center col-md-4 col-10 '>
                        <img src="../img/bootstrap.svg" alt="" />
                        <div className="skillstext">
                            <p>BootStrap(70%)</p>
                            <p className="sks"># 반응형이며 시각적으로 매력적인 디자인을 개발했습니다.</p>
                            <p className="sks"># 그리드 시스템과 컴포넌트를 활용하여 빠르게 프로토타입을 제작.</p>
                        </div>
                    </div>
                    <div className='tp text-center col-md-4 col-10 '>
                        <img src="../img/figma.svg" alt="" />
                        <div className="skillstext">
                            <p>Figma(70%)</p>
                            <p className="sks"># 팀 프로젝트에서 협업하며 얻은 이점이 있습니다.</p>
                            <p className="sks"># Figma를 사용하여 디자인 작업을 효과적으로 수행했습니다.</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}