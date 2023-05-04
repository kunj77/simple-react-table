import React from "react";
import { Provider } from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { tableData, columnData } from "./testData";
import * as ReactReduxHooks from "../hooks";
import TableBody from "../components/TableBody";

configure({ adapter: new Adapter() });

describe("TableBody", () => {
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

  it("Should render concise view table body", () => {
    wrapper = shallow(
      <Provider store={store}>
        <TableBody
          columnData={columnData}
          rowData={tableData}
          showConciseMobileView={true}
        />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toMatch(/Kunjan 32 Female India/);
    expect(wrapperHtml).not.toMatch(/type="checkbox"/);
    expect(wrapperHtml).not.toMatch(/type="radio"/);
  });

  it("Should render multi column view table body", () => {
    wrapper = shallow(
      <Provider store={store}>
        <TableBody
          columnData={columnData}
          rowData={tableData}
          showConciseMobileView={false}
        />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toMatch(/Kunjan/);
    expect(wrapperHtml).not.toMatch(/Kunjan 32 Female India/);
    expect(wrapperHtml).not.toMatch(/type="checkbox"/);
    expect(wrapperHtml).not.toMatch(/type="radio"/);
  });

  it("Should render radio button when single select table body", () => {
    wrapper = shallow(
      <Provider store={store}>
        <TableBody
          columnData={columnData}
          rowData={tableData}
          isSingleSelectEnabled={true}
        />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).not.toMatch(/type="checkbox"/);
    expect(wrapperHtml).toMatch(/type="radio"/);
  });

  it("Should render radio button when single select table body", () => {
    wrapper = shallow(
      <Provider store={store}>
        <TableBody
          columnData={columnData}
          rowData={tableData}
          isMultiSelectEnabled={true}
        />
      </Provider>
    );
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toMatch(/type="checkbox"/);
    expect(wrapperHtml).not.toMatch(/type="radio"/);
  });
});
