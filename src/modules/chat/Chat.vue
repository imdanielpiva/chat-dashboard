<template>
  <div id="chat-wrapper">
    <div class="messages">
      <div class="status-bar flex justify-end">
        <q-btn flat><q-icon name="mail" color="blue" /></q-btn>
        <q-btn flat><q-icon name="info" color="blue" /></q-btn>
        <q-btn flat><q-icon name="settings" color="blue" /></q-btn>
      </div>
      <div
        class="message" 
        v-for="(d, i) in
        data" :key="i">
        <dash-chat
          :id="d.id"
          :name="d.name"
          :side="true"
          :text="d.text"
          :status="d.info"
          avatar="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.moddb.com%2Fimages%2Fmembers%2F4%2F3268%2F3267113%2Favatar.jpg&f=1"
        ></dash-chat>
        <!-- <pre>{{ messages }}</pre> -->
      </div>
      <div id="input-message">
        <q-field>
          <q-input float-label="Type your message" type="textarea" v-model="input" :after="[
            {
              icon: 'attach file',
            },
            {
              icon: 'send',
            }
          ]" />
        </q-field>
      </div>
    </div>
  </div>
</template>

<script>
import { QField, QInput, QBtn, QIcon } from 'quasar';
import DashChat from '../../components/DashChat/DashChat';
import { default as computed } from './options';

export default {
  name: 'chat',
  data() {
    return {
      // messages:'',
      data: [
        {
          id: '1a2s34f',
          name: 'Name',
          text: ['hi, there', 'how are you?'],
          info: {
            type: 'client',
            stamp: 123123321,
            sent: {
              state: true,
              at: 1222334
            },
            seen: {
              state: true,
              at: 12334897
            },
            delivered: {
              state: true,
              at: 1243837423
            }
          }
        }
      ],
      input: ''
    };
  },
  components: {
    DashChat,
    QField,
    QInput,
    QIcon,
    QBtn
  },
  computed
};
</script>

<style scoped>
#chat-wrapper {
  width: 50%;
  height: 94vh;
  margin: 0 auto;
  padding: 32px;
  box-shadow: 0 0 100px  rgba(0, 0, 0, .2);
  background: #f9f9f9;
}

#input-message {
  width: 45%;
  bottom: 42px;
  margin: 0 auto;
  position: fixed;
  border-top: 1px solid #e9e9e9;
}

.status-bar {

}
</style>
