sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
 
    return Controller.extend("com.training.exer1galleta.controller.MainView", {
        onInit: function () {
			this._Page = this.byId("page");
            this._Page.setFloatingFooter(!this._Page.getFloatingFooter());
			},
 
        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            // For Gcash phone number
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            // For Credit Card Details
            var oCrdtLabel = this.getView().byId("idLblCrdtDetails");
            var oCrdtInput = this.getView().byId("idInputCrdt");

            if (sSelectedKey === "COD") {
                sap.m.MessageToast.show("Cash on Delivery");
            }
 
            if (sSelectedKey === "GCASH") {
                // show the mobile field
                sap.m.MessageToast.show("Gcash");
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            }

            if (sSelectedKey === "CC") {
                // show the credit card details field
                sap.m.MessageToast.show("Credit Card");
                oCrdtLabel.setVisible(true);
                oCrdtInput.setVisible(true);
            } else {
                oCrdtLabel.setVisible(false);
                oCrdtInput.setVisible(false);
            }
        },
 
        onPressCheckout: function () {
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idLblLName").getValue();
 
            // Check if first name and last name is blank
            if (oInputFNameValue === "" && oInputLNameValue === "") {
                sap.m.MessageToast.show("Required Field is blank");
            }
        },
 
        onAddItem: function () {
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        }
 
    });
});