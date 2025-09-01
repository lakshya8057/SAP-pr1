sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project3.controller.View1", {
        onInit() {
        },
         getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },

        onNavToProducts: function () {
            this.getRouter().navTo("products");
        },

        onNavToCustomers: function () {
            this.getRouter().navTo("customers");
        },

        onNavToEmployees: function () {
            this.getRouter().navTo("employees");
        },

        onNavToOrders: function () {
            this.getRouter().navTo("orders");
        },

        onNavToInvoices: function () {
            this.getRouter().navTo("invoices");
        },

        onNavToSuppliers: function () {
            this.getRouter().navTo("suppliers");
        }
    });
});