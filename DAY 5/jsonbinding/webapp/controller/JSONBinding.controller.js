sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter",
    "sap/m/library"
],
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
            formatter: formatter,

            onInit: function () {
                var oUserData = {
                    EID: "",
                    Enabled: true,
                    Address: {
                        Street: "Andres",
                        City: "Salcedo",
                        Zip: "2711",
                        Country: "Philippines"
                    },
                    SalesAmount: 10000,
                    CurrencyCode: "USD"
                };

                var oUserData = new JSONModel(oUserData);
                this.getView().setModel(oUserData, "userData");

                var oProductModel = new JSONModel("/model/ProductsModel.json");
                this.getView().setModel(oProductModel, "ProductsModel")
            },

            ProductsModel: function (oEvent) {
                var oList = oEvent.getSource();
                var oSelectedProduct = oList.getSelectedItem();
                var oBindingContext = oSelectedProduct.getBindingContext("ProductsModel");
                var sPath = oBindingContext.getPath();
                var oPanel = this.byId("sForm_prodDet");
                oPanel.bindElement({
                    path: sPath,
                    model: "ProductsModel"
                })
            }


            // handleEmailPress: function (evt) {
            // 	URLHelper.triggerEmail(this._getVal(evt), "Info Request", false, false, false, true);
            // },
        });
    });