sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel",
  "sap/ui/demo/wt/controller/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
  "use strict";

  return UIComponent.extend("sap.ui.demo.wt.Component", {
    metadata : {
      manifest: "json"
    },

    init : function() {
      // call init function of the parent
      UIComponent.prototype.init.apply(this, arguments);

      // set data model
      var oData = {
        recipient : {
          name : "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);

      // Set our local Invoice model
      var oConfig = this.getMetadata().getConfig();
      var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;

      var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
      this.setModel(oInvoiceModel, "invoice");

      // Set the i18n model - This is not in Walkthrough
      var i18nModel = new ResourceModel({bundleUrl: jQuery.sap.getModulePath(sNamespace, oConfig.resourceBundle)});
      this.setModel(i18nModel, "i18n");

      // Set the dialog fragment
      this.helloDialog = new HelloDialog();
    }
  });
});
