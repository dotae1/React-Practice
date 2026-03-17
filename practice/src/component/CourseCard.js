import './CourseCard.css'

// CourseCard라는 함수 ()안의 값은 App.js에서 전달받을 데이터들
function CourseCard({
    img,
    tags,
    title,
    startPrice,
    types
}) {
    //return안에는 화면에 보여줄 HTML (JSX)구조가 들어갑니다. 
        return (
        <div className="CourseCard">
            {/* 썸네일 이미지 영역 */}
            <div className="cover">
            {/* img 변수에 담긴 주소를 src에 넣어 이미지를 보여준다.*/}
                <img alt="" src={img} />
                </div>
            {/* 상세 정보 */}
            <div className="info">
                <ul className="tags">
                    {/* tag 배열안에 있는 단어를 .map 함수를 사용하여 하나씩 꺼낸다.
                    item은 꺼낸 단어, i는 순서 번호이다. React에서 반복문 사용시 Key값이 꼭 필요하다!*/}
                    {tags.map((item, i) => (
                        
                        <li key={i}class="tag">{item}</li>
                    ))}
                </ul>
                <h4 className="name">{title}</h4>
                {/* 보기 편하게 쉼표가 찍힌 문자열로 바꿔주는 기능 (toLocaleString()*/}
                <p className="price">{startPrice.toLocaleString()}원부터</p>
                <ul className="types">
                    {types.map((item, i) => (
                        <li key={i}class="type">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
{/* 이 CourseCard 컴포넌트를 다른 파일에서 쓸 수 있도록 내보낸다. */}
export default CourseCard;