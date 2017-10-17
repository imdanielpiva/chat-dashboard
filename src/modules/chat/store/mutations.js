import * as TYPES from './mutation-types';
import state from './state';

function isMessageValid(message) {
  if (!message) return false;
  if (typeof message === 'object') {
    if (message.id === undefined || typeof message.id === 'undefined') return false;
    if (message.text === undefined || message.text === '' || message.text === ' ') return false;
    if (Array.isArray(message.text) === false || message.text.length === 0) return false;
    if (message.name === '' || message.name === undefined) return false;
    if (message.info.type === undefined || typeof message.info.type !== 'string') return false;

    return true;
  }

  return false;
}

export default {
  [TYPES.PUSH_ONLY_MESSAGE](message) {
    if (isMessageValid(message)) {
      state.messages.push(message);
      state.message = '';
    }
  },
  [TYPES.NOTIFY_CLIENT_IS_TYPING]() {
    state.isTyping.client = true;
    setTimeout(() => {
      state.isTyping.client = false;
    }, 1600);
  }
};
