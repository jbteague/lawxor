(function () {

    var Hapi = require("hapi");
    var server = new Hapi.Server();
    var servicePort = 4400;

    server.connection({
        port: servicePort
    });

    
    //-----------------------------------------------------
    // ---- APP DEFAULT ROUTE
    //-----------------------------------------------------
    server.route({
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: "app/",
                listing: false,
                index: true
            }
        }
    });

    //-----------------------------------------------------
    // ---- IMG FOLDER
    //-----------------------------------------------------
    server.route({
        method: "GET",
        path: "/img/{param*}",
        handler: {
            directory: {
                path: "static/img",
                listing: false,
                index: true
            }
        }
    });

    //-----------------------------------------------------
    // ---- ANGULAR 
    //-----------------------------------------------------
    server.route({
        method: "GET",
        path: "/lib/angular/{param*}",
        handler: {
            directory: {
                path: "node_modules/angular",
                listing: false,
                index: true
            }
        }
    });

    //-----------------------------------------------------
    // ---- ANGULAR ANIMATE
    //-----------------------------------------------------
        server.route({
        method: "GET",
        path: "/lib/angular-animate/{param*}",
        handler: {
            directory: {
                path: "node_modules/angular-animate",
                listing: false,
                index: true
            }
        }
    });
    
    //-----------------------------------------------------
    // ---- ANGULAR ROUTE
    //-----------------------------------------------------
        server.route({
        method: "GET",
        path: "/lib/angular-route/{param*}",
        handler: {
            directory: {
                path: "node_modules/angular-route",
                listing: false,
                index: true
            }
        }
    });

    //-----------------------------------------------------
    // ---- FONT AWESOME
    //-----------------------------------------------------
    server.route({
        method: "GET",
        path: "/lib/font-awesome/{param*}",
        handler: {
            directory: {
                path: "node_modules/font-awesome",
                listing: false,
                index: true
            }
        }
    });

    //-----------------------------------------------------
    // ---- START THE SERVER
    //-----------------------------------------------------
    server.start(function() {
        console.log("Umbra.Web server started on port " + servicePort);
    });
 })();