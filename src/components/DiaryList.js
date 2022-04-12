import { useState } from "react";
import MyButton from './MyButton';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
const sortOptionList = [
  {value:"latest", name: "최신순"},
  {value:"oldest", name: "오래된 순"},
];

const filterOptionList = [
  {value:"all", name:"전부다"},
  {value: "good", name: "좋은감정만"},
  {value: "bad", name:"안좋은감정만"}

]

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};
const DiaryList = ({ diaryList }) => {  
  const navigate = useNavigate();
  console.log(diaryList);
  const [sortType, setSortType] = useState("lastest");
  const [filter,setFilter] = useState("all");

  const getProcessdDiaryList = ()=> {

    const filterCallBack = (item) => {
      if(filter === 'good'){
        return parseInt(item.emotion) <= 3;
      }else{
        return parseInt(item.emotion) > 3;
      }
    }

    const compare = (a,b) => {
      if(sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallBack(it))
    const sortedList = filteredList.sort(compare);
    return sortedList;
  }
  
  // console.log(getProcessdDiaryList());
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"success"}
            text={"새 일기쓰기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {/* getProcessdDiaryList~ 부분을 주석처리 했다가 다시 주석해제하면 에러가 없어진다? */}
      {/* 문제: 갑자기 diaryList를 배열로 인식 못함 */}
      {getProcessdDiaryList().map((it) => (
        <DiaryItem key={it.id}
          {...it}
        />
       
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;