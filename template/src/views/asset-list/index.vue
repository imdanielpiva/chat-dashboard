<template>
  <div class="list item-inset-delimiter">
      <asset-item @click.native="openMap(asset.sn)" v-for="asset in assets" :key="asset.sn" :item="asset"></asset-item>
  </div>

</template>

<script>
import AssetItem from './asset-item';

export default {
  components: {
    'asset-item': AssetItem
  },
  computed: {
    assets: function getAssets() {
      return this.$store.state.assets;
    },

    assetsLen: function getAssetsLen() {
      return this.$store.state.assets.length;
    }
  },
  methods: {
    openMap(id) {
      this.$router.push({ name: 'list.map', params: { id } });
    }
  }
};
</script>

<style></style>
