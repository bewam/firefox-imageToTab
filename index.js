const _ = require("sdk/l10n").get;
const contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");
/**
 *
 */
contextMenu.Item({
    label: _('openInNewTab'),
    context : contextMenu.SelectorContext("img"),
    contentScript : 'self.on("click", function (node) {' +
                //  '  console.log(node.nodeName);' +
                'if(node.hasAttribute("src"))'+
                 ' self.postMessage(node.src); ' +
                 '});',
    onMessage : function(imageSrc){
        tabs.open(imageSrc);
    }
});
