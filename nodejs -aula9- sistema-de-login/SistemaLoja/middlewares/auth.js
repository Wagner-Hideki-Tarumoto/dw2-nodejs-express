//middleware de auteticação

function Auth(req, res, next){
//verificar se existe uma sessão para o usuario
if(req.session.usuario != undefined){
    //permite o prosseguimento
    next();
    //se não existir a sessão
}else {
    //exibe a pagina de login para o usuario
    res.render("login");
    }
}

export default Auth;