<template>
  <div class="item three-lines item-link">
    <img :style="isEngineOn(item.inputs) ? 'background-color: green;' : 'background-color: gray;'" class="item-primary" :src="getIcon(item.tgType)">
      <div class="item-content inset has-secondary">
        <div>{{ `${item.tgPlate} | ${item.desc}` }}</div>
        <div>
          <span>{{ item.gpstime | time }}</span>
          -- {{ item.loc }}
        </div>
      </div>
      <div class="item-secondary stamp">
        {{ item.spd }} km/h
      </div>

      <div class="item-secondary">
        <i slot="target">
          more_vert
          <q-popover ref="popover">
            <div class="list">
              <div class="item item-link" @click="$refs.popover.close()">
                <div class="item-content">Enviar Comando</div>
              </div>
              <div class="item item-link" @click="viewOnMap(item.sn)">
                <div class="item-content">Ver no Mapa</div>
              </div>
              <div class="item item-link" @click="$refs.popover.close()">
                <div class="item-content">Ver Histórico</div>
              </div>
            </div>
          </q-popover>
        </i>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'asset-item',
    props: ['item'],
    filters: {
      time: function time(value) {
        const d = new Date(value);
        const day = ('00' + d.getDate()).slice(-2);
        const month = ('00' + (d.getMonth() + 1)).slice(-2);
        const year = d.getFullYear();
        const hour = ('00' + d.getHours()).slice(-2);
        const minute = ('00' + d.getMinutes()).slice(-2);
        const second = ('00' + d.getSeconds()).slice(-2);

        return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
      }
    },
    methods: {
      getIcon(type) {
        const icons = this.$constants.icons;

        return icons[type] || icons.CARRO;
      },
      isEngineOn(inputs) {
        return !!inputs[0];
      },
      viewOnMap(id, $event) {
        if ($event) $event.target.setAttribute('style', 'backbround-color: white');
        this.$router.push({ name: 'list.map', params: { id } });
      }
    }
  };
</script>

<style lang="styl">
.item
  img.item-primary
    cursor pointer
</style>
