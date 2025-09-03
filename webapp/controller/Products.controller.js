sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("project3.controller.Products", {
    onInit: function () {
      // Initialization if needed
    },

    onSearch: function () {
      var oTable = this.byId("productsTable");
      var oBinding = oTable.getBinding("items");

      var oProdId = this.byId("cbProdId");
      var oProdName = this.byId("cbProdName");

      var aFilters = [];

      // ProductID filter (exact match, numeric)
      if (oProdId.getSelectedKey()) {
        aFilters.push(new Filter("ProductID", FilterOperator.EQ, parseInt(oProdId.getSelectedKey(), 10)));
      }

      // ProductName filter (contains, text)
      if (oProdName.getSelectedKey()) {
        aFilters.push(new Filter("ProductName", FilterOperator.Contains, oProdName.getSelectedKey()));
      }

      // Apply filters to table
      oBinding.filter(aFilters);
    }
  });
});
