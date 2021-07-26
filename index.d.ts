/// <reference types="leaflet" />

import * as L from 'leaflet';

declare module 'leaflet' {
  namespace TileLayer {
    class MVTSource extends Layer {
      constructor(options?:any);
    }
  }
}
