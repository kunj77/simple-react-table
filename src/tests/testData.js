export const tableData = [
    {
      name: "Kunjan",
      age: "32",
      gender: "Female",
      country: "India"
    },
    {
      name: "Abhishek",
      age: "28",
      gender: "Male",
      country: "Singapore"
    }
  ];
  
  export const columnData = [
    {
      displayTitle: "Name",
      selector: "name",
      isSortable: true
    },
    {
      displayTitle: "Age",
      selector: "age",
      isSortable: true
    },
    {
      displayTitle: "Gender",
      selector: "gender",
      isSortable: true
    },
    {
      displayTitle: "Country",
      selector: "country",
      isSortable: true,
      minWidth: "10px",
      maxWidth: "20px",
      allowOverflow: true
    }
  ];
  
  export const nonSortableColumnData = [
    {
      displayTitle: "Name",
      selector: "name",
      isSortable: false
    },
    {
      displayTitle: "Age",
      selector: "age",
      isSortable: false
    },
    {
      displayTitle: "Gender",
      selector: "gender",
      isSortable: false
    },
    {
      displayTitle: "Country",
      selector: "country",
      isSortable: false
    }
  ];
  