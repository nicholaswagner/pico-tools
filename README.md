# pico-tools
> Fast and simple.  Just like me.  - the author

Don't make me take my hands off the home row!
This is a toolchain I use to make pico-8 dev a little faster and more flexible.

`setup` lets you configure the current folder for pico-tools.(you can have different settings per folder)
`build` will load your cart in pico-8, and auto-play automatically.
`watch` will detect changes to your .p8 file and run another `build`.
`add_vscode_tasks` will copy over a .vscode/tasks.json file which let you do the same, but from a hotkey.

## PreReqs
1. An installed copy of [pico-8](https://www.lexaloffle.com/)
2. requires [nodejs and npm](http://www.nodejs.org)

## Gimme Gimme!
Yeah, yeah, calm down.
1. install the tools  with `npm install -g pico-tools`
2. configure it by running: `pico-tools setup `


## Documentation

### `pico-tools setup`
```bash
# pico-tools will need to know where your Pico-8 executable lives.  
pico-tools setup
```
---

### `pico-tools build`

```bash
# run a cartridge in pico-8 and have it auto-play.

pico-tools build path/to/cartridge.p8
```

---

### `pico-tools watch`

```bash
# watch a specific file for changes, and then reload automatically.

pico-tools watch path/to/cartridge.p8
```

***WARNING***  If you use the watch command, please note that when the tools trigger a reload, you will lose any unsaved changes in the pico editor.  This goes for sprites and music too!  Keep that in mind so you don't lose work!

---

### `pico-tools vscode_tasks`
```bash
# This will create `.vscode/tasks.json` in your current directory.  This lets me hit `cntrl+shift+b` and activate one of the tools.

pico-tools vscode_tasks
```
