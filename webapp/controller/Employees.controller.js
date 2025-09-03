sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("project3.controller.Employees", {

    onInit: function () {
      // Initialization logic if needed
    },

    onSearch: function () {
      var oTable = this.byId("Employees_Table");
      var oBinding = oTable.getBinding("items");

      var oFirstName = this.byId("cbFirstName");
      var oLastName = this.byId("cbLastName");
      var oAddress = this.byId("cbAddress"); // renamed for clarity

      var aFilters = [];

      // Filter by First Name
      if (oFirstName.getSelectedKey()) {
        aFilters.push(new Filter("FirstName", FilterOperator.Contains, oFirstName.getSelectedKey()));
      }

      // Filter by Last Name
      if (oLastName.getSelectedKey()) {
        aFilters.push(new Filter("LastName", FilterOperator.Contains, oLastName.getSelectedKey()));
      }

      // Filter by Address
      if (oAddress.getSelectedKey()) {
        aFilters.push(new Filter("Address", FilterOperator.Contains, oAddress.getSelectedKey()));
      }

      // Apply filters to the table
      oBinding.filter(aFilters);
    }

  });
});
