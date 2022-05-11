import Cookie from 'js-cookie'
export default{
    state:{
        token:'',
        name:'',
        id:''
    },
    mutations:{
        setToken(state,val){
            // state.token=val
            Cookie.set('token',val)
        },
        clearToken(state){
            Cookie.remove('token')
        },
        getToken(state){
            state.token=state.token||Cookie.get('token')
        },
        // setName(state,val){
        //     state.name=val
        // },
        // setId(state,val){
        //     state.name=val
        // },
        // clearName(state){
        //     state.name=''
        // },
        // clearId(state){
        //     state.id=''
        // }
    }
}