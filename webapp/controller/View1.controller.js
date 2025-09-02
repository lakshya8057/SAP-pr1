sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project3.controller.View1", {
        onInit() {

            var odataModel = this.getOwnerComponent().getModel();
            if (!odataModel) {
                console.error("OData model is not loaded");
                return;
            }
            //count products
            odataModel.read("/Products/$count", {
                success: (oData) => {
                    this.getView().byId("total_products").setText(oData);
                },
                error: (err) => {
                    this.getView().byId("total_products").setText("0");
                }
            });
            //count customers
            odataModel.read("/Customers/$count", {
                success: (oData) => {
                    this.getView().byId("total_customers").setText(oData);
                },
                error: (err) => {
                    this.getView().byId("total_customers").setText("0");
                }
            });
            //count employees
            odataModel.read("/Employees/$count", {
                success: (oData) => {
                    this.getView().byId("total_employees").setText(oData);
                },
                error: (err) => {
                    this.getView().byId("total_employees").setText("0");
                }
            });
            //count orders
            odataModel.read("/Orders/$count", {
                success: (oData) => {
                    this.getView().byId("total_orders").setText(oData);
                },
                error: (err) => {
                    this.getView().byId("total_orders").setText("0");
                }
            });
            //count invoices
            odataModel.read("/Invoices/$count", {
                success: (oData) => {
                    this.getView().byId("total_invoices").setText(oData);
                },
                error: (err) => {
                    this.getView().byId("total_invoices").setText("0");
                }
            });
            //count suppliers
            odataModel.read("/Suppliers/$count", {
                success: (oData) => {
                    this.getView().byId("total_suppliers").setText(oData);
                },
                error: (err) => {
                    this.getView().byId("total_suppliers").setText("0");
                }
            });
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