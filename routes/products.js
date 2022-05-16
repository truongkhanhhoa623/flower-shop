
export default (router) => {
    router.get('/', (req, res) =>{
        res.send({
            data: "hello world"
        })
    })
} 