import { FaGithub, FaFigma, } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <div className="footerpx">
                <div className="backicon ps-2 d-flex flex-column flex-start">

                    <a href="https://github.com/snb2323/portfolio" target="blank"> <FaGithub className=" mb-3"></FaGithub></a>

                    <a href="https://www.figma.com/proto/3ePwKovJqYTbLRALUgC49p/%EA%B0%9C%EC%9D%B8%ED%8F%AC%ED%8F%B4?type=design&node-id=511-19&t=jFKbgYuW4pDZIyMi-0&scaling=min-zoom&page-id=0%3A1" target="blank">   <FaFigma className=" mb-3"></FaFigma></a>

                    <a href="https://www.notion.so/1e7173072d194f90a7c2f3a8bb04b2ce"> <img src="./img/notion.svg" className="notionimg"></img></a>
                </div>
            </div>
        </>
    )

}
