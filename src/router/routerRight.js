import router from './index'
function getToken () {
    return sessionStorage.getItem('token')
}
router.beforeEach((to,from,next)=>{
    if(!getToken()){
        if(to.meta.token){
            next({
                path: 'goods'
            })
            }else{
                next()
        }
    }else{
        next()
    }
})