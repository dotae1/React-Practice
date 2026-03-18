import './App.css';
import Practice from './component/Practice';



function App() {
  return (
    // 전체를 감싸는 div에 안쪽 여백 30을 주어 카드가 모서리에 너무 붙지 않도록 한다.
    <div className ="container" style={{ padding: 30 }}>
      {/* 가져온 CourseCard를 사용한다. */}
      <Practice
        img="https://i.namu.wiki/i/R0AhIJhNi8fkU2Al72pglkrT8QenAaCJd1as-d_iY6MC8nub1iI5VzIqzJlLa-1uzZm--TkB-KHFiT-P-t7bEg.webp"
        tags={['가수', '실력파', '국민여동생']}
        title="국민 여동생에서 실력파 가수로 거듭난 IU"
        firstDate= "2008-09-18"
        types={['R&B']}
      />
      <Practice
        img = "https://i.namu.wiki/i/Jqln2jnPbYOW_5i2KHs2oUKUmT-sC8NvKOR_RHu85UVnJtwrCXIqpFIrom9ro9S6F6kh6327x4o4JJg0NTvMKg.webp"
        tags={['가수', '실력파', '소울트리', '발라드']}
        title="대한민국의 4대 보컬 박효신"
        firstDate = "1999-11-04"
        types={['발라더']}
      />
      <Practice
      img="/stupid.jpeg"
      tags={['수원대', '바보', '광교쟁이']}
      title = "수원대 19학번에서 2년뒤 결혼까지"
      firstDate="2019-01-01"
      types={["예비 신랑"]}
      />
    </div>
  );
}

export default App;


