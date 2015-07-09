sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
], function (UIComponent, JSONModel) {
  "use strict";
  return UIComponent.extend("sap.ui.demo.wt.Component", {
    metadata : {
      manifest : "json"
    },

    init : function() {
      // call init of parent
      UIComponent.prototype.init.apply(this, arguments);

      // Set the data model
      var oData = {
        recipient : {
          name : "World"
        }
      };

      var oModel = new JSONModel(oData);
      this.setModel(oModel);
    }
  })
})
