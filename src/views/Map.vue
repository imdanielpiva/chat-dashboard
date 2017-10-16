<template>
  <div class="row">
    <div id="mapid"></div>
    <div id="mapPanelId" style="background-color: 'red'"></div>
  </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import 'leaflet-pulse-icon/src/L.Icon.Pulse.css';

  import 'velocity-animate/velocity.ui';

  // import { Utils } from 'quasar-framework';
  import L from 'leaflet';
  import 'leaflet-pulse-icon';

  const token = 'pk.eyJ1IjoibWp1bmlvciIsImEiOiJjaXR2cTlsczMwMDVwMnhxdnl3YnV2bmVoIn0.AO_LdpfBlvlqLULn39y0Tg'; // eslint-disable-line
  let map;

  export default {
    mounted: function createMap() {
      map = new L.Map('mapid').setView([-23.308968, -51.169244], 13);

      L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v8/tiles/{z}/{x}/{y}?access_token=${token}`, {
        zoomOffset: -1,
        maxZoon: 21,
        tileSize: 512,
        detectRetina: true,
        attribution: 'Map data &copy; <a href="http://sattrack.com.br">SatTrack</a>'
      }).addTo(map);

      // window.map = map;
      const asset = this.$store.state.assets.find(asset => asset.sn === this.$route.params.id);
      const xy = asset.xy.coordinates;
      const icons = this.$constants.icons;

      setMarker([xy[1], xy[0]], icons[asset.tgType] || icons.CARRO);

      function setColor({ inputs, outputs }) {
        if (outputs[0] || outputs[1]) {
          return 'red';
        }
        if (inputs[0]) {
          return 'green';
        }

        return 'gray';
      }

      const panel = {
        isOpen: false,
        paneldiv: document.getElementById('mapPanelId'),
        mapdiv: document.getElementById('mapid'),

        toggle() {
          if (this.isOpen) {
            const seq1 = { e: this.paneldiv, p: { height: '0%' }, o: { duration: 400 } };
            const seq2 = { e: this.mapdiv, p: { height: '100%' }, o: { duration: 400, complete: () => map.invalidateSize() } };

            Velocity.RunSequence([seq1, seq2]);
            this.isOpen = false;
          } else {
            const seq1 = { e: this.mapdiv, p: { height: '30%' }, o: { duration: 400, complete: () => map.invalidateSize() } };
            const seq2 = { e: this.paneldiv, p: { height: '100%' }, o: { duration: 400 } };

            Velocity.RunSequence([seq1, seq2]);
            this.isOpen = true;
          }
        }
      };

      function setMarker(latLng, url) {
        const pulseIcon = L.icon.pulse({ color: setColor(asset) });

        const Icon = L.Icon.extend({
          options: {
            iconSize: [64, 64],
            iconAnchor: [32, 64]
          },

          initialize: function init(url, options) {
            L.Icon.prototype.initialize.call(this, options);
            L.Util.setOptions(this, options);
            this.options.iconUrl = url;
          }
        });

        const marker = new L.Marker(latLng, {
          icon: new Icon(url)
        });

        marker.on('click', () => panel.toggle());

        const pulseMarker = new L.Marker(latLng, { icon: pulseIcon });

        pulseMarker.addTo(map);


        marker.addTo(map);

        map.setView(latLng, 19);

        // window.openPanel = () => {
        //   const paneldiv = document.getElementById('mapPanelId');
        //   const mapdiv = document.getElementById('mapid');
        //   const seq1 = { e: mapdiv, p: { height: '30%' }, o: { duration: 400 } };
        //   const seq2 = { e: paneldiv, p: { height: '100%' }, o: { duration: 400 } };

        //   Velocity.RunSequence([seq1, seq2]);
        //   map.invalidateSize();
        // };
      }
    }
  };

</script>

<style type="text/css">
	#mapid {
		height: 100%;
		width: 100%;
	}
</style>
