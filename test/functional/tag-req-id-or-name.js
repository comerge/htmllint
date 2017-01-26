module.exports = [
    {
        desc: 'should pass when set to false',
        input: '<input type="radio">',
        opts: { 'tag-req-id-or-name': false },
        output: 0
    },
    {
        desc: 'should pass when tag not listed in options',
        input: '<input type="radio">',
        opts: { 'tag-req-id-or-name': ['div'] },
        output: 0
    },
    {
        desc: 'should fail when input has no type',
        input: '<input>',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 1
    },
    {
        desc: 'should fail when input has no type value',
        input: '<input type>',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 1
    },
    {
        desc: 'should fail when input has type text',
        input: '<input type="text">',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 1
    },
    {
        desc: 'should fail when radio input has no id or name',
        input: '<input type="radio" >',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 1
    },
    {
        desc: 'should fail when button has no id or name',
        input: '<button>',
        opts: { 'tag-req-id-or-name': ['button'] },
        output: 1
    },
    {
        desc: 'should fail when anchor has no id or name',
        input: '<a></a>',
        opts: { 'tag-req-id-or-name': ['a'] },
        output: 1
    },
    {
        desc: 'should fail when form has no id or name',
        input: '<form></form>',
        opts: { 'tag-req-id-or-name': ['form'] },
        output: 1
    },
    {
        desc: 'should fail when radio input has empty name',
        input: '<input type="radio" name>',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 1
    },
    {
        desc: 'should fail when radio input has empty id',
        input: '<input type="radio" id>',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 1
    },
    {
        desc: 'should fail when radio input has name with no length',
        input: '<input type="radio" name="">',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 1
    },
        {
        desc: 'should pass when input has an id',
        input: '<input type="text" id="hello">',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 0
    },
    {
        desc: 'should pass when button has an id',
        input: '<button id="hello">',
        opts: { 'tag-req-id-or-name': ['button'] },
        output: 0
    },
    {
        desc: 'should pass when form has an id',
        input: '<form id="hello"></form>',
        opts: { 'tag-req-id-or-name': ['form'] },
        output: 0
    },
    {
        desc: 'should pass when anchor has an id',
        input: '<a id="hello"></a>',
        opts: { 'tag-req-id-or-name': ['a'] },
        output: 0
    },
    {
        desc: 'should pass when input has a name',
        input: '<input type="radio" name="hello">',
        opts: { 'tag-req-id-or-name': ['input'] },
        output: 0
    },
    {
        desc: 'should pass when button has a name',
        input: '<button name="hello">',
        opts: { 'tag-req-id-or-name': ['button'] },
        output: 0
    },
    {
        desc: 'should pass when form has a name',
        input: '<form name="hello"></form>',
        opts: { 'tag-req-id-or-name': ['form'] },
        output: 0
    },
    {
        desc: 'should pass when anchor has a name',
        input: '<a name="hello"></a>',
        opts: { 'tag-req-id-or-name': ['a'] },
        output: 0
    }
];