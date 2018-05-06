# pico8gulp
Simple workflow helper for pico8 development

## PreReqs
1. install [nodejs and npm](http://www.nodejs.org)
2. install [gulp](https://gulpjs.com)
3. run ```npm install```  


## Configuration
This build assumes that there is a PICO8 environment variable in your PATH.

# I dont have PICO8 in my PATH:
Don't worry about it.  Instead, create a `.env` file at the root of this repo with the following info:

``` bash
#	For me on Windows 10 I used:
#	PICO8 = "C:/\Program Files (x86)/\PICO-8/\pico8.exe"
PICO8 = "path/to/pico-8.exe"

#	This is optional.  By default it uses "./carts"
CARTS = "./path/to/carts/dir"

```

## How to use
Put your carts in the local `./carts` directory!

##	Video game companies hate these two easy scripts!


```bash
# launches the pico8 app, loads your cart, and has it auto play on boot:
gulp build --file example.p8`
```


``` bash
# reloads your current pico8 project each time you save code changes to the cart file.
gulp reload --file example.p8
```
__( Please note that any unsaved changes in the pico8 editor will be lost when the reload script activates. )__
