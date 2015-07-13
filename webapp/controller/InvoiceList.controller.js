sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";

  return Controller.extend("sap.ui.demo.wt.controller.InvoiceList", {

    onInit : function() {
      var oViewModel = new JSONModel({currency: "GBP"});
      this.getView().setModel(oViewModel, "view");
    }
  });
});
