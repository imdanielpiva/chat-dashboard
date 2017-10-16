<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button v-if="isHomeRoute" @click="$refs.drawerLeft.open()">
        <i>menu</i>
      </button>
      <button v-else @click="goBack" class="within-iframe-hide">
        <i>arrow_back</i>
      </button>

      <img style="padding: 0px 10px 0px 10px;" src="statics/accounts/sattrack/topbar-logo-inverted.png">
      <q-toolbar-title :padding="2">
      </q-toolbar-title>
      <q-search placeholder="Busca" class="gt-sm primary" :padding="6"></q-search>

      <button class="gt-sm">
        <i>notifications</i>
      </button>

      <!-- ONLY ON SMALL WINDOWS -->
      <button class="sm">
        <i>search</i>
      </button>
      <button class="sm">
        <i>more_vert</i>
      </button>
    </div>

    <div slot="navigation">
      <router-view name="navigation"></router-view>
    </div>

    <q-drawer swipe-only ref="drawerLeft">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
           <img style="padding: 0px 10px 0px 10px;" src="~assets/accounts/sattrack/topbar-logo.png">
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <div class="list-label">Viasualização Padrão</div>
          <label class="item">
            <div class="item-primary">
              <q-radio v-model="option" val="listView"></q-radio>
            </div>
            <div class="item-content has-secondary">
              Lista
            </div>
            <i class="item-secondary">view_list</i>
          </label>

          <label class="item">
            <div class="item-primary">
              <q-radio v-model="option" val="cardView"></q-radio>
            </div>
            <div class="item-content has-secondary">
              Janelas
            </div>
            <i class="item-secondary">view_agenda</i>
          </label>

          <label class="item">
            <div class="item-primary">
              <q-radio v-model="option" val="mapView"></q-radio>
            </div>
            <div class="item-content has-secondary">
              Mapa
            </div>
            <i class="item-secondary">map</i>
          </label>

        <hr>
        <div class="list-label">Relatórios & Gráficos</div>
        <q-drawer-link icon="receipt" to="/showcase/layout/toolbar" exact>
          Relatório de Posições
        </q-drawer-link>
        <q-drawer-link icon="insert_chart" to="/showcase/layout/tabs" exact>
          Gráfico de Velocidade
        </q-drawer-link>
        <hr>
        <div v-if="$store.getters.isSegUser">
          <div class="list-label">Seguro</div>
          <q-drawer-link icon="verified_user" to="/usebens" exact>
            Usebens
          </q-drawer-link>
        </div>
        <hr v-if="$store.getters.isSegUser">
        <q-drawer-link icon="exit_to_app" to="/auth/logout" exact>
          Sair
        </q-drawer-link>
      </div>
    </q-drawer>


    <router-view class="layout-view"></router-view>

  </q-layout>
</template>

<script>

// import Quasar from 'quasar-framework';

// const { Utils } = Quasar;

export default {
  data() {
    return {
      option: 'listView'
    };
  },
  computed: {
    isHomeRoute() {
      return this.$store.state.route.name.split('.').length === 1;
    }
  },
  methods: {
    goBack() {
      const from = this.$store.state.route.from;

      if (from && from.fullPath) {
        this.$router.push(from.fullPath);
      } else {
        window.history.back();
      }
    }
  }
};
</script>

<style lang="styl">

</style>
