import React from "react";

function Soccer({name, picture}){
  return (
    <div>
      <h2>{name}</h2>
      <img src={picture} alt = {name}/>
    </div>
  );
}

const FootballPlayer = [
  { id : 1,
    name : "손흥민",
    image : 'https://dimg.donga.com/wps/NEWS/IMAGE/2023/04/12/118792073.1.jpg',
  },
  { id : 2,
    name : "김민재",
    image : 'https://biz.chosun.com/resizer/yYMKr39Lirp-GlcTN1u29jHQwKE=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/SWKOK2JKOJVWAHHBDMLTBKR42M.jpg',
  },
  { id : 3,
    name : "황희찬",
    image : 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202208/25/cd5191f9-646c-4d3c-8682-390dd576dbfd.jpg',
  },
  { id : 4,
    name : "이재성",
    image : 'https://cdn.footballist.co.kr/news/photo/202208/154466_81235_5236.jpg',
  }
];



function App(){

  return(<div>
   {FootballPlayer.map(sc => (<Soccer key={sc.id} name={sc.name} picture={sc.image}/>))}
  </div>);
}

export default App;