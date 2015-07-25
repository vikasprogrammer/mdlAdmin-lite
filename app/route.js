//setting up routes using Grapnel Library. 

var routes = {
    '/' : function(req, e){
        mdlAdmin.initActive('#/');
        mdlAdmin.loadContent('pages/dashboard.html');
        mdlAdmin.setTitle('Dashboard');
    },
    '/todo' : function(req, e){
        mdlAdmin.initActive('#/todo');
        mdlAdmin.loadContent('pages/todo.html');
        mdlAdmin.setTitle('Todo');
    },
    '/charts' : function(req, e){
        mdlAdmin.initActive('#/charts');
       
        mdlAdmin.loadContent('pages/charts.html', function() {
            // alert(1);
            mdlAdmin.loadCharts();
        });
        mdlAdmin.setTitle('Charts');
    },
    '/elements/:type' : function(req, e){

        var element_type = req.params.type;
        mdlAdmin.initActive('#/elements/' + req.params.type);
        mdlAdmin.loadContent('pages/elements-' + element_type + '.html');
        mdlAdmin.setTitle('Elements', element_type);

    },
    '/*' : function(req, e){
        if(!e.parent()){
            // Handle 404
            mdlAdmin.setTitle('Not Found');
            mdlAdmin.loadContent('pages/404.html');
        }
    }
}




var router = Grapnel.listen({ pushState : false }, routes);