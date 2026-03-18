import { useState } from 'react';


function Accordion({ title, content }) {

  const[isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div
        style={{
          background: "#666",
          color: "white",
          fontWeight: "bold",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
       <div>{title}</div>

       <div
          onClick={() => {
            setIsOpened ((state) =>  !state);
          }}
          // 클릭 가능하다고 알려주는 UI힌트
          style={{cursor : 'pointer'}}
          >
            {isOpened ? '-' : '+'}
          </div>
      </div>
      {isOpened && (
        <div
        style={{
          border: "1px solid #999",
          padding: 20,
        }}
      >
        {content}
      </div>
    )}
    </div>
  );
}

export default Accordion;
