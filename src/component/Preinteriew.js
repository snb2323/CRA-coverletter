import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function Preinterview() {
    const [selectedQuestion, setSelectedQuestion] = useState(null); //선택된 질문을 추척

    const questions = [
        "프론트 엔드 개발자가 된 동기",
        "팀 프로젝트를 하면서 느낀점",
        "react 하면서 가장 힘들었던점",
        "귀사에 들어갔을때 할수있는업무"
    ];


    const answers = [
        "요식업에서의 경험을 통해 디지털 플랫폼의 중요성을 깨닫고, 레스토랑에서의 효율적인 서비스와 빠른 응대 경험에서 웹과 개발에 대한 흥미가 동시에 자라게 되었습니다. 이로 인해 프론트엔드 개발자로의 전향을 결정하게 되었으며, 사용자 중심의 디지털 경험을 창조하고 싶은 열망이 높아졌습니다. 지금은 디지털 환경에서 놀라운 기술과 창의적인 디자인을 결합하여 사용자들에게 새로운 가치를 제공하기 위해 열심히 노력하고 있습니다.",
        "팀 프로젝트를 통해 협업의 중요성과 소통이 프로젝트 성패에 큰 영향을 미친다는 것을 몸소 깨닫게 되었습니다. 또한, 팀원들과의 의견 충돌과 문제 해결 과정에서 자신들의 생각하는것을 전달하고 타협점을 찾는 능력이 중요하다는 것을 깨달았습니다. 이러한 경험을 통해 팀 프로젝트에서의 성공은 개인의 기술뿐만 아니라 팀원 간의 원활한 협업과 소통에서 비롯된다는 것을 명확히 이해하고 있습니다. 감사합니다.",
        "논리 연산자의 중요성과 Return 문의 역할을 깨닫게 되었습니다. React에서 이러한 개념은 상태(State)나 조건부 렌더링에서 핵심적인 역할을 하며, 특히 &&, ||와 같은 논리 연산자를 효과적으로 활용하면 컴포넌트의 동적인 렌더링을 구현하는 데 도움이 됩니다. Return 문은 React 컴포넌트에서 어떻게 UI를 생성하는지를 정의하며, 조건부 렌더링 시에는 삼항 연산자나 논리 연산자를 활용하여 명확하게 표현해야 합니다. 또한, 라이프사이클 메서드를 이해하는 데 어려움을 겪었으며, 특히 componentDidMount, componentDidUpdate, componentWillUnmount와 같은 메서드를 사용하여 비동기 작업이나 상태 업데이트를 조절하는 것이 처음에는 복잡하게 느껴졌습니다. 이러한 어려움을 극복하기 위해 공식 문서와 개발 커뮤니티에서의 토론과 자료들을 참고하며 지속적인 학습과 연습을 통해 실력을 향상시켰습니다. 프로젝트를 진행하면서 경험을 쌓아가며 렌더링 최적화 및 컴포넌트 재사용성에 대한 이해를 높여나갔습니다.",
        "귀사에 입사하게 되면, 피그마를 활용하여 디자인을 수정하고, 부트스트랩과 같은 그리드 시스템을 활용하여 반응형 웹을 개발할 수 있는 역량을 보유하고 있습니다. 이를 통해 사용자 경험을 향상시키고, 웹 애플리케이션의 시각적인 품질을 유지하는 데 기여할 수 있습니다.또한, 업무 중 발생하는 이슈에 대응할 때는 빠른 피드백과 해결방안을 제시하는 능력을 발휘합니다. 협업 도구인 노션과 같은 협업 도구를 적극적으로 활용하여 팀 간의 원활한 커뮤니케이션을 유지하며, 프로젝트의 진행을 원할하게 이끌어 나갈 수 있도록 지원하겠습니다. 귀사에서의 업무에 최선을 다해 기여하겠습니다."
    ];

    const handleQuestionClick = (index) => { //handleQuestionClick` 함수: 질문을 클릭했을 때 호출되는 함수로, 선택된 질문의 인덱스를 변경합니다.
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    return (
        <>
            <div className="prewrap d-flex  text-center justify-content-center align-items-center">
                <div id="Preinterview" className="Preinterview ">
                    <h1>Preinterview</h1>
                </div>
                <fieldset>
                    <legend>
                        {questions.map((question, index) => (
                            <div className=" mb-5 " key={index}>
                                <i className="bi bi-hand-index"></i>
                                <div className="interview">
                                    <p
                                        className={`p-2 ${selectedQuestion === index ? "about" : ""}`}
                                        onClick={() => handleQuestionClick(index)}
                                    >
                                        <div className="question d-flex jusify-content-space-between">
                                            <strong className="px-3">{question}</strong>
                                            {selectedQuestion === index ? (
                                                <IoIosArrowUp className="iodrop" />
                                            ) : (
                                                <IoIosArrowDown className="iodrop" />
                                            )}
                                        </div>
                                    </p>
                                    {selectedQuestion === index && (
                                        <p className="answer">{answers[index]}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </legend>
                </fieldset>
            </div>
        </>
    );
}
