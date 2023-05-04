import React from "react";
import { Provider } from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { tableData, columnData, nonSortableColumnData } from "./testData";
import * as ReactReduxHooks from "../hooks";
import TableHeader from "../components/TableHeader";

configure({ adapter: new Adapter() });

describe("TableHeader", () => {
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

  it("Should render concise view header", () => {
    wrapper = shallow(
      <Provider store={store}>
        <TableHeader
          headerData={columnData}
          showConciseMobileView={true}
          onClickHandler={() => {}}
        />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toMatch(/Details/);
    expect(wrapperHtml).toMatch(/<img/);
    expect(wrapperHtml).not.toMatch(columnData[0].displayTitle);
  });

  it("Should render concise view header", () => {
    wrapper = shallow(
      <Provider store={store}>
        <TableHeader
          headerData={columnData}
          showConciseMobileView={false}
          onClickHandler={() => {}}
        />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toMatch(columnData[0].displayTitle);
    expect(wrapperHtml).toMatch(/<img/);
  });

  it("Should not render icon if columns are non sortable", () => {
    wrapper = shallow(
      <Provider store={store}>
        <TableHeader
          headerData={nonSortableColumnData}
          showConciseMobileView={false}
          onClickHandler={() => {}}
        />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toMatch(columnData[0].displayTitle);
    expect(wrapperHtml).not.toMatch(/<img/);
  });
});
