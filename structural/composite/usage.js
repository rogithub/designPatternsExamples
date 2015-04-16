var menus = require('./menu');
var commands = require('./command');

var newCmd = commands('created');
var opemCmd = commands('opened');
var closeCmd = commands('closed');
var saveCmd = commands('saved');
var editCmd = commands('edited');

var copyCmd = commands('copied');
var cutCmd = commands('cuted');
var pasteCmd = commands('pasted');

var menu = menus('menu');
var file = menus('file');
var edit = menus('edit');

menu.submenus.push(file);
menu.submenus.push(edit);

file.submenus.push(menus('new', newCmd));
file.submenus.push(menus('open', opemCmd));
file.submenus.push(menus('close', closeCmd));
file.submenus.push(menus('save', saveCmd));
file.submenus.push(menus('edit', editCmd));

edit.submenus.push(menus('copy', copyCmd));
edit.submenus.push(menus('cut', cutCmd));
edit.submenus.push(menus('paste', pasteCmd));

function execute(menu, name) {
    if (menu.name === name && menu.command){
        menu.command.execute();
        return;
    }
    
    menu.submenus.forEach(function (menu) {
        execute(menu, name);
    });
}

execute(menu, 'cut');
execute(file, 'open');
execute(edit.submenus[2], 'paste');