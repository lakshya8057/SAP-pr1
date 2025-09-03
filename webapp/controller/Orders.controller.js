sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("project3.controller.Orders", {

    onInit: function () {
      // Initialization logic if needed
    },

    onSearch: function () {
      var oTable = this.byId("Orders_Table");
      var oBinding = oTable.getBinding("items");

      var oEmployee = this.byId("cbOrderEmployeeId");

      var aFilters = [];

      // Filter by Employee ID
      if (oEmployee.getSelectedKey()) {
        aFilters.push(new Filter("EmployeeID", FilterOperator.EQ, oEmployee.getSelectedKey()));
      }

      //filter by cutomer id
      var oCustomer = this.byId("cbOrderCustomerId");
      if (oCustomer.getSelectedKey()) {
        aFilters.push(new Filter("CustomerID", FilterOperator.EQ, oCustomer.getSelectedKey()));
      }

      // Apply filters to the table binding
      oBinding.filter(aFilters);
    }

  });
});
