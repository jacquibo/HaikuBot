module.exports = async function (context, req) {
    context.log('Generating Nonsense...');
    context.res = {
        body: "Bibble wibble wobble"
    };
};