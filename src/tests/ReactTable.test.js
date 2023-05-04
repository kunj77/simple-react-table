import React from "react";
import { Provider } from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { columnData, tableData } from "./testData";
import * as ReactReduxHooks from "../hooks";
import ReactTable from "../components/ReactTable";

configure({ adapter: new Adapter() });

describe("ReactTable", () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    store = configureStore([thunk])({
      rowData: tableData,
      colData: columnData,
      selectedRows: []
    });
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();

    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation((state) => store.getState());

    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);
  });
  it("Should render table, header and body components", () => {
    wrapper = shallow(
      <Provider store={store}>
        <ReactTable columnData={columnData} tableData={tableData} />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toMatch(/table/);
    expect(wrapperHtml).toMatch(/thead/);
    expect(wrapperHtml).toMatch(/tbody/);
  });

  it("Should not render header component", () => {
    wrapper = shallow(
      <Provider store={store}>
        <ReactTable
          columnData={columnData}
          tableData={tableData}
          hideHeaderRow={true}
        />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toMatch(/table/);
    expect(wrapperHtml).not.toMatch(/thead/);
    expect(wrapperHtml).toMatch(/tbody/);
  });
});
