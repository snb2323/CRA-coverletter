import React, { useState, useEffect } from "react";

const Contact = () => {
    // useState 훅을 사용하여 상태 변수를 정의합니다.
    const [msg, setMsg] = useState(null); // 메시지 응답을 저장하는 상태 변수
    const [formData, setFormData] = useState({ // 폼 데이터를 저장하는 상태 변수
        company_name: "",
        interview_date_time: "",
        contact_person_info: "",
        interview_location_address: ""
    });

    // 입력 변경을 처리하는 이벤트 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        // 입력 변경에 따라 폼 데이터 상태를 업데이트합니다.
        setFormData({ ...formData, [name]: value });
    };

    // 폼 제출을 처리하는 이벤트 핸들러
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 동작을 방지합니다.

        // 서버로 폼 데이터를 포함한 POST 요청을 보냅니다.
        fetch("/form/contact_info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json()) // 응답 JSON을 파싱합니다.
            .then(data => {
                console.log(data); // 응답 데이터를 로그합니다.
                // 응답 메시지를 상태 변수에 설정합니다.
                setMsg(data.msg)
            })
            .catch(error => {
                console.error("Error:", error); // 발생한 오류를 로그합니다.
            });
    };

    // 폼을 재설정하는 이벤트 핸들러
    const handleReset = () => {
        // 메시지 상태와 폼 데이터 상태를 초기화합니다.
        setMsg(null);
        setFormData({
            company_name: "",
            interview_date_time: "",
            contact_person_info: "",
            interview_location_address: ""
        });
    };

    // useEffect 훅을 사용하여 추가적인 부수 효과를 처리합니다.
    useEffect(() => {
        // 필요한 경우 추가 코드를 작성합니다.
    }, []); // 의존성 배열이 비어 있으므로 이 효과는 한 번만 실행됩니다.

    // 컴포넌트 UI를 나타내는 JSX 구조
    return (
        <div className="container">
            <div id="Contact" className="contact d-flex justify-content-center align-items-center">
                <h1> Contact me</h1>
            </div>

            {msg ? // 메시지 상태에 따른 조건부 렌더링
                // 메시지가 있는 경우 해당 메시지와 재설정 버튼을 표시.
                <div>감사합니다. 빠른 응답드리도록 하겠습니다. <button onClick={handleReset}>다시작성하기</button></div> :

                // 메시지가 없는 경우 폼을 표시.
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>
                            <div className="d-flex flex-column align-items-center">
                                {/* 다양한 폼 필드에 대한 입력 필드 */}
                                <div className="py-3">
                                    <label htmlFor="company_name"></label>
                                    <input
                                        className="contactin py-1"
                                        type="text"
                                        name="company_name"
                                        placeholder="회사명"
                                        value={formData.company_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="interview_date_time"></label>
                                    <input
                                        className="contactin py-1"
                                        type="text"
                                        name="interview_date_time"
                                        placeholder="면접날짜와 시간"
                                        value={formData.interview_date_time}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="contact_person_info"></label>
                                    <input
                                        className="contactin py-1"
                                        type="text"
                                        name="contact_person_info"
                                        placeholder="담당자 정보 및 연락처"
                                        value={formData.contact_person_info}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="interview_location_address"></label>
                                    <input
                                        className="contactin py-1"
                                        type="text"
                                        name="interview_location_address"
                                        placeholder="면접장 소재지 및 주소"
                                        value={formData.interview_location_address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            {/* 폼 제출 버튼 */}
                            <div className="contactbtn d-flex justify-content-center py-5">
                                <button type="submit">제안하기</button>
                            </div>
                        </legend>
                    </fieldset>
                </form>
            }
        </div>
    );
};

// Contact 컴포넌트를 기본으로 내보냅니다.
export default Contact;
