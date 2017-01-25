var knife = require('../knife'),
    Issue = require('../issue'),
    proc = require('../processOption');

module.exports = {
    name: 'tag-req-name',
    on: ['dom'],
    filter: ['tag', 'style', 'script'],
    desc: [
'The value of this option is a list of strings, each of which is a tag',
'name. Tags with any of the given names are disallowed.'
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

    return new Issue('E016', element.openLineCol, { tag: element.name });
};
