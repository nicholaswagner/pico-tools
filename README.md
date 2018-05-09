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
```bash
# install pico-tools with 
npm install -g pico-tools
```

## Setup is a piece of cake
pico-tools uses an environment variable to know where your pico-8 executable is.

There are many ways to do that, but we've included an easy way for beginners:

Simply create a `.env` file at the root of your project folder with one of the following: ( Your setup may differ slightly. )

```bash
# Typical Windows setup
PICO8=c:\Users\nicho\Desktop\pico-8_win32\pico8.exe

# Typical MacOS setup
PICO8 = /Applications/PICO-8/PICO-8.app/Contents/MacOS/pico8
```


## Documentation

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

---

### `pico-tools home`

```bash
# will open the pico-tools github page

pico-tools home
```

---

### `pico-tools bbs`

```bash
# will open the pico-8 bbs in your browser

pico-tools bbs
```

---

### `pico-tools man`

```bash
# This will echo the Pico-8 Documentation to the terminal.
# Combine this with other tools like less or grep!
# example:    pico-tools man | less
pico-tools man
```

---
