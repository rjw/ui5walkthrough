sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/demo/wt/model/formatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("sap.ui.demo.wt.controller.InvoiceList", {

    formatter: formatter,
    onInit : function() {
      var oViewModel = new JSONModel({currency: "GBP"});
      this.getView().setModel(oViewModel, "view");
    },

    onFilterInvoice : function(oEvent) {
      var aFilter = [];
      var sQuery = oEvent.getParameter("query");

      // Build a list of all matching ProductNames
      if (sQuery) {
        aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
      }

      // Filter binding
      var oList = this.getView().byId("invoiceList");
      var oBinding = oList.getBinding("items");
      oBinding.filter(aFilter);
    }
  });
});
