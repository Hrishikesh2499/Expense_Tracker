import { ColDef } from "@ag-grid-community/all-modules";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import { getAllLabsAsync } from "../../../rtk/thunks/lab.thunks";
import Actions from "./actions";
import ExpenseCategory from "./grid.component";

const GridContainer = () => {
  const dispatch = useAppDispatch();
  const { labs } = useAppSelector((state) => state.lab);
  const { spinner } = useAppSelector((state) => state.spinner);

  useEffect(() => {
    dispatch(getAllLabsAsync());
  }, [dispatch]);

  const colDefs: Array<ColDef> = [
    {
      headerName: "Handle",
      field: "handle",
      tooltipField: "handle",
      headerTooltip: "Handle",
    },
    {
      headerName: "Title",
      field: "title",
      tooltipField: "title",
      headerTooltip: "Title",
    },
    {
      headerName: "Body",
      field: "body",
      tooltipField: "body",
      headerTooltip: "Body",
    },
    {
      headerName: "Image Source",
      field: "imgSrc",
      tooltipField: "imgSrc",
      headerTooltip: "Image Source",
    },
    {
      headerName: "Vendor",
      field: "vendor.name",
      tooltipField: "vendor.name",
      headerTooltip: "Vendor",
    },
    {
      headerName: "Type",
      field: "type.name",
      tooltipField: "type.name",
      headerTooltip: "Type",
    },
    {
      headerName: "Tags",
      field: "type.tags",
      tooltipField: "type.tags",
      headerTooltip: "Tags",
    },
    {
      headerName: "Variant SKU",
      field: "variant.sku",
      tooltipField: "variant.sku",
      headerTooltip: "Variant SKU",
    },
    {
      headerName: "Variant Grams",
      field: "variant.grams",
      tooltipField: "variant.grams",
      headerTooltip: "Variant Grams",
    },
    {
      headerName: "Variant Inventory Tracker",
      field: "variant.inventoryTracker",
      tooltipField: "variant.inventoryTracker",
      headerTooltip: "Variant Inventory Tracker",
    },
    {
      headerName: "Variant Inventory Qty",
      field: "variant.quantity",
      tooltipField: "variant.quantity",
      headerTooltip: "Variant Inventory Quantity",
    },
    {
      headerName: "Variant Inventory Policy",
      field: "variant.policy",
      tooltipField: "variant.policy",
      headerTooltip: "Variant Inventory Policy",
    },
    {
      headerName: "Variant Fulfillment Service",
      field: "variant.ffmService",
      tooltipField: "variant.ffmService",
      headerTooltip: "Variant Fulfillment Service",
    },
    {
      headerName: "Variant Price",
      field: "variant.price",
      tooltipField: "variant.price",
      headerTooltip: "Variant Price",
    },
    {
      headerName: "Variant Compare At Price",
      field: "variant.compareAtPrice",
      tooltipField: "variant.compareAtPrice",
      headerTooltip: "Variant Compare At Price",
    },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: Actions,
    },
  ];
  return <ExpenseCategory colDefs={colDefs} rowData={labs} spinner={spinner} />;
};

export default GridContainer;
