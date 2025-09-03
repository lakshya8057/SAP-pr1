sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("project3.controller.Suppliers", {

    onInit: function () {
      // Initialization logic if needed
    },

    onSearch: function () {
      var oTable = this.byId("Suppliers_Table");
      var oBinding = oTable.getBinding("items");

      var oContactName = this.byId("cbContactName");
      var oContactTitle = this.byId("cbContactTitle");

      var aFilters = [];

      // Filter by Contact Name
      if (oContactName.getSelectedKey()) {
        aFilters.push(new Filter("ContactName", FilterOperator.Contains, oContactName.getSelectedKey()));
      }

      // Filter by Contact Title
      if (oContactTitle.getSelectedKey()) {
        aFilters.push(new Filter("ContactTitle", FilterOperator.Contains, oContactTitle.getSelectedKey()));
      }

      // Apply filters to the table binding
      oBinding.filter(aFilters);
    }

  });
});
