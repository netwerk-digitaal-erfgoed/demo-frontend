'use strict';

const Helpers = require('./helpers');

const internals = {};

internals.registerPlugin = async function (server, options) {

    server.views(Helpers.getViewConfig());

    const routes = [
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => h.redirect('/nl').permanent()
        },
        {
            method: 'GET',
            path: '/{languageCode}',
            options: internals.index
        }
    ];

    server.route(routes);
};

exports.plugin = {
    name: 'content',
    register: internals.registerPlugin
};

internals.index = {
    handler: async function (request, h) {

        const data = {
            languageCode: request.params.languageCode,
            pageTitle: request.i18n.__('index.title')
        };

        return h.view('index', data);
    }
};
