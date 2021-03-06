/*
 * Copyright Dansk Bibliotekscenter a/s. Licensed under GNU GPL v3
 *  See license text at https://opensource.dbc.dk/licenses/gpl-3.0
 */

/* global __SolrFields */

/**
 * exports SolrFields with method:
 * SolrFields.addSolrField
 *
 * global variable __SolrFields contains target object, that implements void addField(String, String)
 */
EXPORTED_SYMBOLS = ['solrField'];

var solrField = function (javaFunc) {

    return  function (name, value) {
        javaFunc(name, value);
    };

}(Function.prototype.bind.call(__SolrFields.addField, __SolrFields));

delete __SolrFields;
