import React, { useState } from "react";
import { Empty, Image, Input, Space, Spin } from "antd";
const { Search } = Input;

const onSearch = (value) => console.log(value);
function App() {
  // di86XcB_Kk6f4s5_z32Yx1kZUJuSt_plF8T3UmtUbWo
  // https://api.unsplash.com/search/photos/?client_id=YOUR_ACCESS_KEY
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  function getImage() {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=di86XcB_Kk6f4s5_z32Yx1kZUJuSt_plF8T3UmtUbWo&query=${input}`
    )
      .then((res) => res.json())
      .then((result) => setData(result.results))
  }

  console.log(data);
  return (
    <>
      <nav>
        <Space>
          <Search
            placeholder="search photo..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={getImage}
            onChange={(e) => setInput(e.target.value)}
          />
        </Space>
      </nav>
      <div className="img">
        {error ? (
          <Spin />
        ) : data.length > 5 ? (
          data.map((item) => {
            return <Image width={350} height={350} src={item.urls.regular} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
}

export default App;
