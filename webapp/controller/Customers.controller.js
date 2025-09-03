sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("project3.controller.Customers", {
    onInit: function () {
      // Initialization logic if needed
    },

    onSearch: function () {
      var oTable = this.byId("CustomersTable");
      var oBinding = oTable.getBinding("items");

      var oCustomerId = this.byId("cbCustomerId");
      var oCustomerName = this.byId("cbCustomerName");

      var aFilters = [];

      // Filter by CompanyName (Company)
      if (oCustomerId.getSelectedKey()) {
        aFilters.push(new Filter("CompanyName", FilterOperator.Contains, oCustomerId.getSelectedKey()));
      }

      // Filter by Country (Nationality)
      if (oCustomerName.getSelectedKey()) {
        aFilters.push(new Filter("Country", FilterOperator.Contains, oCustomerName.getSelectedKey()));
      }

      // Apply filters to table binding
      oBinding.filter(aFilters);
    }
  });
});
