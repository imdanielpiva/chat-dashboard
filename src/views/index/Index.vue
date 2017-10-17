<template>
  <q-layout>
    <q-toolbar color="dark">
      <q-toolbar-title>Chat Dashboard</q-toolbar-title>
    </q-toolbar>
    <div>
      <chat></chat>
    </div>
  </q-layout>
</template>

<script>
import { QLayout, QToolbar, QToolbarTitle } from 'quasar';
import Chat from '../chat/Chat';

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    Chat
  }
};
</script>

<style>

</style>
