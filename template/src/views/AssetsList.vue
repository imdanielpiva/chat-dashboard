<template>
  <div class="layout-view list">
    <div class="list-label">Veículos</div>
    <div class="item three-lines">
      <img class="item-primary" :src="'statics/boy-avatar.png'">
      <div class="item-content inset has-secondary">
        <div>Brunch this weekend?</div>
        <div>
          <span>John Doe</span>
          -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
        </div>
      </div>
      <div class="item-secondary stamp">
        1 week
      </div>
    </div>
    <hr class="inset">
    <div class="item three-lines">
      <img class="item-primary" :src="'statics/boy-avatar.png'">
      <div class="item-content inset has-secondary">
        <div>Brunch this weekend?</div>
        <div>
          <span>John Doe</span>
          -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
        </div>
      </div>
      <i class="item-secondary">info</i>
    </div>
    <hr>
    <div class="list-label">Yesterday</div>
    <div class="item three-lines">
      <img class="item-primary" :src="'statics/boy-avatar.png'">
      <div class="item-content inset">
        <div>Brunch this weekend?</div>
        <div>
          <span>John Doe</span>
          <br>
          I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
        </div>
      </div>
    </div>
    <hr class="inset">
    <div class="item three-lines">
      <img class="item-primary" :src="'statics/boy-avatar.png'">
      <div class="item-content inset has-secondary">
        <div>Brunch this weekend?</div>
        <div>
          <span>John Doe</span>
          <br>
          I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
        </div>
      </div>
      <div class="item-secondary stamp">
        1 week
      </div>
      <div class="item-secondary">
        <i slot="target">
          more_vert
          <q-popover ref="popover">
            <div class="list">
              <div class="item item-link" @click="$refs.popover.close()">
                <div class="item-content">Reply</div>
              </div>
              <div class="item item-link" @click="$refs.popover.close()">
                <div class="item-content">Forward</div>
              </div>
              <div class="item item-link" @click="$refs.popover.close()">
                <div class="item-content">Delete</div>
              </div>
            </div>
          </q-popover>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>
