import { createControlComponent } from "@react-leaflet/core";
import { Control, DomUtil } from "leaflet";

export const WatermarkControl = createControlComponent(
    (props) => new Control.Watermark()
);