<template>
  <div>
    Conversation ID: {{ id }}
    <hr>
    <Message 
      v-for="message in conversation.messages" 
      :message="message" 
      :key="message.created" 
    />
  </div>
</template>

<script>
  import Message from './Message.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'ConversationContainer',

    props: {
      conversation: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },

    created () {
      // todo: LOAD MESSAGES
    },

    components: {
      Message
    }
  }
</script>

<style scoped>
</style>