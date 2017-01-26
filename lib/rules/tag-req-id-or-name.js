var knife = require('../knife'),
    Issue = require('../issue'),
    proc = require('../processOption');

module.exports = {
    name: 'tag-req-id-or-name',
    on: ['dom'],
    filter: ['tag'],
    desc: [
'The value of this option is a list of strings, each of which is a tag',
'name. Tags with any of the given names are required to either have an id or name.'
].join('\n'),
    process: proc.arrayOfStr
};

module.exports.lint = function (element, opts) {
    var format = opts[this.name];
    if (format.indexOf(element.name) < 0) {
        return [];
    }

    if (knife.hasNonEmptyAttr(element, 'id') || knife.hasNonEmptyAttr(element, 'name')) {
        return [];
    }

    return new Issue('E049', element.openLineCol, { tag: element.name });
};
