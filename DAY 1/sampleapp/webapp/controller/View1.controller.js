sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sample.app.sampleapp.controller.View1", {
        onInit() {
        },

        /**
         * Clear inputs when button clear is pressed
         * @param {*} oEvent 
         */
        onPressClear: function(oEvent){
            var oView = this.getView();
 
            oView.byId("name_input").setValue("");
            oView.byId("street_input1").setValue("");
            oView.byId("street_input2").setValue("");
            oView.byId("zip_input1").setValue("");
            oView.byId("zip_input2").setValue("");
            oView.byId("selectCountry").setSelectedKey(null);
        }
    });
});