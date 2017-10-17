import { mapState } from 'vuex';

export default {
  ...mapState({
    messages: state => state.chat.messages
  })
};
