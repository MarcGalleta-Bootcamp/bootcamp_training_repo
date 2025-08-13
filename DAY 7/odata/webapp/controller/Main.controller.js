sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/odata/v2/ODataModel"
], (Controller, Sorter, ODataModel) => {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {
        onInit() {
            // var oModel = new ODataModel("https://services.odata.org/V2/Northwind/Northwind.svc/Products");
            // this.getView().setModel(oModel);
        },

        // SortProdName: function () {
            // var oTable = this.byId("tbl_products");
            // oBinding = oTable.getBinding("items");

            // var oSorter = new Sorter("ProductName", false);
            // oBinding.sort(oSorter);
        // }
    });
});