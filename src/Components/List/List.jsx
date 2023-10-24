import React, { useEffect, useState } from "react";
import "./List.css";
import Slider from "react-slick";

function List() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const getAPI = () => {
    fetch("https://randomuser.me/api?results=50")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.results);
      });
  };

  useEffect(() => {
    getAPI();
  }, []);

  // const searchData = data.filter((item, index) => {
  //   if (search === item.name.first) {
  //     return (
  //       <div>
  //         {item.name.first}
  //         <img src={item.picture.large} alt="" />
  //       </div>
  //     );
  //   } else {
  //     return console.log("không tìm thấy giá trị");
  //   }
  // });

  // console.log(searchData);

  return (
    <div className="list-data">
      <input type="text" name="" onChange={onChangeSearch} />
      <div className="container-data">
        {data
          .filter((item) =>
            item.name.first?.toLowerCase?.().includes?.(search?.toLowerCase?.())
          )
          .map((item, index) => (
            <>
              <div key={index} className="data">
                {item.name.first} {item.name.last}
                <img src={item.picture.large} alt="avatar" />
                {item.email}
              </div>
              {/* <Slider setting={settings}> */}

              {/* </Slider> */}
            </>
          ))}
      </div>
    </div>
  );
}

export default List;
