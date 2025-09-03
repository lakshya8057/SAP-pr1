sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("project3.controller.Invoices", {

    onInit: function () {
      // Initialization logic if needed
    },

    onSearch: function () {
      var oTable = this.byId("Invoices_Table");
      var oBinding = oTable.getBinding("items");

      var oCustomerName = this.byId("cbInvoiceCustomerName");
      var oProductName = this.byId("cbInvoiceProductName");
      var oCustomerId = this.byId("cbInvoiceCustomerId");

      var aFilters = [];

      // Filter by Customer Name
      if (oCustomerName.getSelectedKey()) {
        aFilters.push(new Filter("CustomerName", FilterOperator.Contains, oCustomerName.getSelectedKey()));
      }

      // Filter by Product Name
      if (oProductName.getSelectedKey()) {
        aFilters.push(new Filter("ProductName", FilterOperator.Contains, oProductName.getSelectedKey()));
      }

      // Filter by Customer ID
      if (oCustomerId.getSelectedKey()) {
        aFilters.push(new Filter("CustomerID", FilterOperator.EQ, oCustomerId.getSelectedKey()));
      }

      // Apply filters to the table binding
      oBinding.filter(aFilters);
    }

  });
});
