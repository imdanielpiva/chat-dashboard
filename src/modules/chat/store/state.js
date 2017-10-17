export default {
  messages: [
    {
      id: 'String',
      name: 'String',
      text: ['hi, there', 'how are you'],
      avatar: 'String',
      side: true,
      info: {
        type: 'String',
        stamp: Date.now(),
        sent: {
          state: true,
          at: Date.now()
        },
        seen: {
          state: true,
          at: Date.now()
        },
        delivered: {
          state: true,
          at: Date.now()
        }
      }
    }
  ]
};
