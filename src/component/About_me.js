import React, { useEffect, useState } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { CiMenuBurger } from "react-icons/ci";

// 나의 정보를 객체로 정의
const Leedongmin = {
    name: "이동민",
    age: 28,
    address: "경기도 성남시 수정구",
    tel: "010-5378-1047",
    email: "dheltus1r@naver.com",
    MBTI: "INFJ",
};

// 나의 객체를 문자열로 표현한 코드
const codeString = `
<div class="lee">
  <p class="code"><span class="con">const</span> <span class="leename">Leedongmin</span> <span><span class="colwhite"> ={</span></span></p>
  <p class="code">  name <span class="colwhite">:</span> <span class="daddd"> "${Leedongmin.name}"</span><span class="colwhite">,</span></p>
  <p class="code">  age <span class="colwhite">:</span> <span class="daddd2"> ${Leedongmin.age}</span><span class="colwhite">,</span></p>
  <p class="code">  address <span class="colwhite">:</span> <span class="daddd"> "${Leedongmin.address}"</span><span class="colwhite">,</span></p>
  <p class="code">  tel<span class="colwhite">:</span> <span class="daddd"> "${Leedongmin.tel}"</span> <span class="colwhite">,</span></p>
  <p class="code">  email<span class="colwhite">:</span> <span class="daddd"> "${Leedongmin.email}"</span> <span class="colwhite">,</span></p>
  <p class="code">  MBTI<span class="colwhite">:</span><span class="daddd"> "${Leedongmin.MBTI}"</span><span class="colwhite">};</span></p>
</div>
`;

export default function About() {
    // 텍스트가 보여지는 상태를 관리하는 state
    const [displayText, setDisplayText] = useState("");
    // 클릭된 섹션을 저장하는 state
    const [clickedSection, setClickedSection] = useState(null);
    // 메뉴가 열려있는지 상태를 관리하는 state
    const [showmenu, setshowmenu] = useState(false)

    // 클릭된 섹션을 설정하는 함수
    const handleclick = (section) => {
        setClickedSection(section);
    };

    // 코드 타이핑 효과를 구현하는 useEffect
    useEffect(() => {
        let i = 0;
        let animationFrameId;
        const typingSpeed = 7;

        const animateTyping = () => {
            for (let j = 0; j < typingSpeed && i < codeString.length; j++) {
                let txt = codeString[i++];
                if (txt !== "\n") {
                    setDisplayText((prevText) => prevText + txt);
                }
            }

            if (i < codeString.length) {
                animationFrameId = requestAnimationFrame(animateTyping);
            }
        };

        animateTyping();

        return () => cancelAnimationFrame(animationFrameId);
    }, [codeString]);

    // 메뉴를 토글하는 함수
    const togglemenu = () => {
        setshowmenu(!showmenu)
    };

    // useEffect를 사용하여 모바일에서 메뉴를 토글할 수 있도록 구현
    useEffect(() => {
        const allmenu = document.querySelector(".btni button");
        allmenu.addEventListener('click', () => {
            document.querySelector(".btni").classList.toggle("toggle")
        })
        console.log("allmenu")
    }, [])

    return (
        <>
            {/* 네비게이션 바 */}
            <Navbar bg="dark" variant="dark" className="my_navar d-lg-flex  justify-content-space-between">
                <Navbar.Brand href="#home" className="aboutlogo d-block d-lg-flex ">LDM Portfolio</Navbar.Brand>
                {/* 모바일에서 메뉴를 토글하는 버튼 */}
                <div className={`btni  d-lg-none `}>
                    <button onClick={togglemenu} className='border-0 bg-transparent '><CiMenuBurger></CiMenuBurger></button>
                </div>
                {/* 네비게이션 메뉴 */}
                <Nav className="mx-4 gnb">
                    {/* 각 섹션에 대한 링크 */}
                    <Nav.Link
                        className={clickedSection === "about" ? "section clicked" : "section"}
                        onClick={() => handleclick("about")}
                        href="#aboutSection"
                    >
                        About Me
                    </Nav.Link>
                    <Nav.Link
                        className={clickedSection === "skills" ? "section clicked" : "section"}
                        onClick={() => handleclick("skills")}
                        href="#skillsSection"
                    >
                        Skills
                    </Nav.Link>
                    <Nav.Link
                        className={clickedSection === "projects" ? "section clicked" : "section"}
                        onClick={() => handleclick("projects")}
                        href="#projectsSection"
                    >
                        Portfolio
                    </Nav.Link>
                    <Nav.Link
                        className={clickedSection === "preinterview" ? "section clicked" : "section"}
                        onClick={() => handleclick("preinterview")}
                        href="#Preinterview"
                    >
                        Preinterview
                    </Nav.Link>
                    <Nav.Link
                        className={clickedSection === "Contact" ? "section clicked" : "section"}
                        onClick={() => handleclick("Contact")}
                        href="#Contact"
                    >
                        Contact me
                    </Nav.Link>
                </Nav>
            </Navbar>

            {/* About 섹션 */}
            <div id="home" className="container">
                <div className="ldm px-5 mx-5">
                    <div className="leeabout">
                        <div className="leetext">
                            <div id="aboutSection" className="abouttitle text-center">
                                <strong className="en">FRONTEND</strong>
                                <strong className="kr">이동민</strong>
                            </div>
                            <div className="abtext text-center">
                                <p>안녕하세요 저는 프론트엔드 개발자가 되고 싶은 이동민입니다. 시간을 내어 제 포트폴리오를 봐주셔서 감사합니다.</p>
                            </div>
                            {/* 코드가 타이핑되는 부분 */}
                            <div className="leeobj" dangerouslySetInnerHTML={{ __html: displayText }} />
                        </div>
                    </div>
                    <div className="myphto">
                        <img src="../project/about.png" alt="about" />
                    </div>
                </div>
            </div>
        </>
    );
}
