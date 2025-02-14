


const selectBoolean = [
    {
        value: "Yes",
        label: "Yes"
    },
    {
        value: "No",
        label: "No"
    },
]

const selectActivationStatus = [
    {
        value: "Active",
        label: "Active"
    },
    {
        value: "Suspend",
        label: "Suspend"
    },
    {
        value: "Inactive",
        label: "Inactive"
    },
    {
        value: "Deleted",
        label: "Deleted"
    },

]

const selectLicenseType = [
    {
        value: "Standard",
        label: "Standard"
    },
    {
        value: "Volunteer",
        label: "Volunteer"
    },
    {
        value: "Exclusive",
        label: "Exclusive"
    },
    {
        value: "Professional",
        label: "Professional"
    },

]

const selectSystemType = [
    {
      value: "Development",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Development
        </>
      ),
    },
    {
      value: "Testing",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Testing
        </>
      ),
    },
    {
      value: "Training",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Training
        </>
      ),
    },
    {
      value: "Production",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Production
        </>
      ),
    },
  ];

  export { selectBoolean, selectSystemType, selectLicenseType, selectActivationStatus};