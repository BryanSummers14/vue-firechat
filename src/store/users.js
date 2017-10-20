const state = {
    all: {},
    currentUser: 'mr_b'
  }
  
  const mutations = {
    SET_CONVERSATION (state, { conversation }) {
        const data = conversation.data()
        state.all = {
          ...state.all, 
          [conversation.id]: { users: data.users, created: data.created, messages: [] }
        } 
        state.allIds.push(conversation.id)
      }
  }
  
  const actions = {
    seed ({ rootState }) {
      let userRef = rootState.db.collection('users')
  
      userRef.doc('mr_a').set({
        firstName: 'Andy',
        lastName: 'Andyson'
      })
  
      userRef.doc('mr_b').set({
        firstName: 'Ben',
        lastName: 'Benson'
      })
  
      userRef.doc('mr_c').set({
        firstName: 'Cee',
        lastName: 'Ceeson'
      })
    },
    async get ({ commit, rootState }) {
        let convoRef = rootState.db.collection('conversations')
        let convos = await convoRef.get()
    
        convos.forEach(conversation => commit('SET_CONVERSATION', { conversation }))
    }
  }
  
  export default { 
    namespaced: true, state, mutations, actions
  }