import React from "react";
import getDataAction from "../../redux/action/getdata.action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Input, message } from "antd";
const { Search } = Input;

const SearchComponent = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.getDataReducer);

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Username Must be Between 1 and 39 in Length",
    });
  };

  const onSearch = (value) => {
    if (value.length < 1 || value.length > 39 || value.trim() === "") {
      error();
    } else {
      dispatch(getDataAction(`${value}`));
    }
  };
  return (
    <div>
      {contextHolder}
      <Search
        status={Data?.error !== undefined ? "error" : "success"}
        loading={Data?.loading}
        placeholder="Enter the GitHub UserName. . . ."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchComponent;
